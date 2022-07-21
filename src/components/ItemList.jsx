import React, { useEffect, useState } from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from '../utils/items'
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [ items, setItems] = useState([])
    const { categoryId } = useParams();
    useEffect(()=>{
        const task = new Promise ((res)=>{    
            setTimeout(() =>{
            res(data)
    },1000)})
    .then((data)=>{
      if (categoryId !== undefined) {
        setItems(data.filter(e => e.categoryId === parseInt(categoryId)))
      }
      else {
        setItems(data)
      }})
    .catch((error)=>{
            console.log(error)
    })},[categoryId])

  return (
    <>
    {
       items.length === 0 ? 
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