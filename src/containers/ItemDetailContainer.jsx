import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from '../components/ItemDetail'
import { data } from '../utils/items'

const ItemDetailContainer = () => {
  const [ item, setItem] = useState([])

    useEffect(()=>{
        const getItem = new Promise ((res)=>{    
            setTimeout(() =>{
            res(data[0])
    },2000)})
    .then((data)=>{
        setItem(data)})
    .catch((error)=>{
            console.log(error)
    })},[])

  return (
    <>
    {
      typeof(item) == "undefined" || item == null ? 
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