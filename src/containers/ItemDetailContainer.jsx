import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from '../components/ItemDetail'
import { data } from '../utils/items'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [ item, setItem] = useState([])
  const { itemId } = useParams();

    useEffect(()=>{
        const getItem = new Promise ((res)=>{    
            setTimeout(() =>{
            res(data)
    },1000)})
    .then((data)=>{
        setItem(data.find(e => e.id === parseInt(itemId)))
      })
    .catch((error)=>{
            console.log(error)
    })},[itemId])

  return (
    <>
    {
      item.title == "undefined" || item.title == null ? 
    <div className="d-flex align-items-center loading-box">
        <strong>Loading...  </strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
       : <ItemDetail title={item.title} description={item.description}
            price={item.price} imageUrl={item.imageUrl} stock={item.stock} />
    }
    </>
  )
}

export default ItemDetailContainer