import React from 'react'

const ItemDetail = (item) => {
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
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-primary text-uppercase mr-2 px-4">Add to cart</button> </div>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default ItemDetail