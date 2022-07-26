import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ItemCount ({initial, stock, addCart}) {
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

  function onAdd () {
    addCart(counter);
  };

  return (
    <>
      <div className="itemCount">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" disabled={stock < 1} className="btn btn-secondary" onClick={subtrack}>-</button>
          <span className="counter-number"> {counter} </span>
          <button type="button" disabled={stock < 1} className="btn btn-secondary" onClick={add}>+</button>
        </div>
        <div className="btn-group btn-group-card">
          <button type="button" disabled={stock < 1} className="btn btn-lg btn-primary" onClick={onAdd}>Add to the Card</button>
          <p>Stock : {stock}</p>
        </div>
      </div>
    </>
  )
}

export default ItemCount