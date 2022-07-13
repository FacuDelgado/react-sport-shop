import React from 'react'
import ItemList from '../components/ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = () => {
  return (
    <>
    <div className='container item-list'>
      <div className='row'>
        <ItemList />
      </div>
    </div>
    </>
  )
}

export default ItemListContainer