import React, { useEffect, useState } from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom'
import { getItems } from '../utils/firestore'

const ItemList = () => {
    const [ items, setItems] = useState([])
    const { categoryId } = useParams();
    useEffect(()=>{
      getItems(parseInt(categoryId, 10))
          .then(result => setItems(result))
          .catch(err => console.log(err));
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