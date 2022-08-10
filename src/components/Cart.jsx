import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { serverTimestamp } from 'firebase/firestore'
import { collection} from '@firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { decrementStockItem } from '../utils/firestore';

const Cart = () => {
  const {cart, clearCart, totalCountInCart, submitOrder, orderId}  = useContext(CartContext);
  const [ totalCountItems, setTotalCountItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cart.length; index++) {
      sum += cart[index].totalCountPrice;
    }
  
    setTotalCountItems(sum)
  
  }, [totalCountItems, cart])

  //  Order Form
  const [orderForm, setOrderForm] = useState({
    Name: '',
    Email: '',
    Phone: ''
  })

  const handleInputChange = (event) => {
    setOrderForm({
        ...orderForm,
        [event.target.name] : event.target.value
    })
  }

  const submit = (event) => {
    event.preventDefault()

    let itemsInNewOrder = cart.map(element => ({
      id: element.item.id,
      price: element.item.price,
      title: element.item.title,
      total: element.count
    }));
    
    const order = {
      buyer: { name: orderForm.Name , phone: parseInt(orderForm.Phone, 10) , email: orderForm.Email },
      items: itemsInNewOrder,
      date: serverTimestamp(),
      total:  totalCountInCart()
    }
    
    const createOrderInDb = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order)
  
      return newOrderRef;
    }

    createOrderInDb()
        .then(result =>  alert('New Order crated with id: ' +  result.id))
        .catch(err => console.log(err));
    
    cart.forEach(element => {
      decrementStockItem(element.item.id, element.count)
    });

    clearCart()
    handleClose()
  }

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
      <div className="card">
        <div className="card-body">
        <p>There is no items in cart, click in following link to:</p>
        <br/>
        <Link to={`/`}><button type="button" className="btn btn-primary btn-lg btn-block">Continue shopping</button></Link>
        </div>
      </div>
        }
        {
          cart.length > 0 ?
        <div className="card">
          <div className="card-body">
            <h2>Total: $ {totalCountInCart()}</h2>
            <button type="button" onClick={handleShow} className="btn btn-warning btn-block btn-lg">Checkout</button>
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
<Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill this form to confirm your order:</p>
          <form className="cart-checkout-form" onSubmit={submit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="Name" placeholder="Name" onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="Email" placeholder="Email" onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" className="form-control" name="Phone" placeholder="Phone" onChange={handleInputChange} required/>
            </div>
            <br />
            <div className="form-group buttons">
              <button className="btn btn-secondary" onClick={handleClose}>
              Cancel
              </button>
              <button type="submit" className="btn btn-success">Send</button>
            </div>
          </form>
        </Modal.Body>
</Modal>
    </>
  )
}

export default Cart