import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

function ItemDetail (item) {
    const [itemsInCart, setItemsInCart] = useState();
    const {addItem}  = useContext(CartContext);

    function addToCart(count) {
        setItemsInCart(count)
        addItem(count, item)
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
                            {
                                !itemsInCart
                                    ?
                                    <ItemCount initial={1} stock={item.stock} addCart={addToCart}/>
                                    :
                                    <>
                                        <br />
                                        <b><span>{itemsInCart} items added to the </span></b><br />
                                        <Link className="btn btn-lg btn-primary" to="/cart">Cart</Link>
                                    </>
                            }
                        </div>
                    </div>
    </div>
    </>
  )
}

export default ItemDetail