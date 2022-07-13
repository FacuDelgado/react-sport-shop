import React, { useEffect, useState } from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from '../utils/items'


const ItemList = () => {
    const [ items, setItems] = useState([])

    useEffect(()=>{
        const task = new Promise ((res)=>{    
            setTimeout(() =>{
            res(data)
    },2000)})
    .then((data)=>{
        setItems(data)})
    .catch((error)=>{
            console.log(error)
    })},[])

  return (
    <>
    {
       items.length === 0 ? 
    <div className="d-flex align-items-center loading-box">
        <strong>Loading...  </strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
       : items.map(item => <Item key={item.id} title={item.title} description={item.description}
            price={item.price} imageUrl={item.imageUrl} stock={item.stock} />)
    }
    </>
  )
}

export default ItemList