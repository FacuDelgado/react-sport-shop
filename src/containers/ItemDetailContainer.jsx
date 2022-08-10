import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom';
import {  getItem } from '../utils/firestore';

const ItemDetailContainer = () => {
  const [ item, setItem] = useState([])
  const { itemId } = useParams();
  
  useEffect(()=>{
    getItem(itemId)
      .then( result => setItem(result))
      .catch( err => console.log(err));
  },[])

  return (
    <>
    {
      item.title == "undefined" || item.title == null ? 
    <div className="d-flex align-items-center loading-box">
        <strong>Loading...  </strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
       : <ItemDetail id={item.id} title={item.title} description={item.description}
            price={item.price} imageUrl={item.imageUrl} stock={item.stock} />
    }
    </>
  )
}

export default ItemDetailContainer