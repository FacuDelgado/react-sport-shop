import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (item) => {
    const onAdd = (param) => {
        console.log('New order for total ammount: ' + {param})
      }
  return (
    <>
    <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4 border"> <img id="main-image" src={item.imageUrl} width="250" /> </div>                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                            <div className="mt-4 mb-3">
                                <h5 className="text-uppercase">{item.title}</h5>
                            </div>
                            <p className="about">{item.description}</p>
                            <div className="sizes mt-4">
                                <h6 className="text-uppercase">Price</h6> <label className="radio"> <span>${item.price}</span> </label>
                            </div>
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default ItemDetail