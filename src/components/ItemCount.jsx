import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial)
  
  const add = () => {
    if (counter < stock) {
      const aux  = counter+1
      setCounter(aux)
    } else
    {
      console.log('Max ammount to add')
    }
  }

  const subtrack = () => {
    if (counter > initial) {
      const aux  = counter-1
      setCounter(aux)
    } else
    {
      console.log('Min amount to subtrack')
    }
  }

  return (
    <div className="col-6 col-md-3 col-sm-2">
      <div  className="card card-item">
        <img src="https://dummyimage.com/286x180/000/fff" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={subtrack}>-</button>
              <span className="counter-number"> {counter} </span>
              <button type="button" className="btn btn-secondary" onClick={add}>+</button>
            </div>
            <div className="btn-group btn-group-card">
              <button type="button" className="btn btn-lg btn-primary" onClick={onAdd}>Add to the Card</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount