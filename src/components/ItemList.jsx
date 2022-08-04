import React, { useEffect, useState } from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
const ItemList = () => {
    const [ items, setItems] = useState([])
    const { categoryId } = useParams();
    useEffect(()=>{
        const db = getFirestore(); 

        let itemsCollection = "";
        
        if (categoryId !== undefined) {
          itemsCollection = query(collection(db, "items"), where("categoryId", "==", parseInt(categoryId, 10)));
        }
        else {
          itemsCollection = collection(db, "items");
        } 

        getDocs(itemsCollection).then((snapshot) => {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        });
      },[categoryId])

  return (
    <>
    {
       items.length == 0 ? 
    <div className="d-flex align-items-center loading-box">
        <strong>Loading...  </strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
       : items.map(item => <Item key={item.id} id={item.id} title={item.title} description={item.description}
            price={item.price} imageUrl={item.imageUrl} stock={item.stock} />)
    }
    </>
  )
}

export default ItemList