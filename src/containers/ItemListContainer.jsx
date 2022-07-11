import React from 'react'
import ItemCount from '../components/ItemCount'


const ItemListContainer = (props) => {
  const onAdd = (param) => {
    console.log('La cantidad comprada es: ' + {param})
  }

  return (
    <>
    <div className='container item-list'>
      <div className='row'>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount  initial={1} stock={10} onAdd={onAdd}/>
      </div>
    </div>
    </>
  )
}

export default ItemListContainer