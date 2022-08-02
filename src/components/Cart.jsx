import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, clearCart, totalCountInCart}  = useContext(CartContext);
  const [ totalCountItems, setTotalCountItems] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cart.length; index++) {
      sum += cart[index].totalCountPrice;
    }
  
    setTotalCountItems(sum)
  
  }, [totalCountItems])

  
  return (
    <>
    <section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
        </div>
        {
        cart.length > 0 ? 
        cart.map(i => 
          <CartItem key={i.item.id} item={i.item} count={i.count} partialCount={i.totalCountPrice} /> ) 
  :
  <Link to={`/`}><button type="button" className="btn btn-primary btn-lg btn-block">Continue shopping</button></Link>

        }
        {
          cart.length > 0 ?
        <div className="card">
          <div className="card-body">
            <h2>Total: $ {totalCountInCart()}</h2>
            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
            <br />
            <button type="button" className="btn btn-secondary btn-sm clean-cart" onClick={() => clearCart()}>Clean cart</button>
          </div>
        </div> :
        <br></br>
        }
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Cart