import React from 'react'
import ItemCount from './ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css'

const Item = (item) => {
  const onAdd = (param) => {
    console.log('New order for total ammount: ' + {param})
  }

  return (
    <>
    <div className="col-6 col-md-3 col-sm-2">
      <div className="card card-item">
        <img src={item.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6>Price: ${item.price}</h6>
          <p className="card-text text-truncate">{item.description}</p>
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item