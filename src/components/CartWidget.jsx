import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {counterCart}  = useContext(CartContext);
  const classNameLink = counterCart > 0 ? 'text-reset me-3' : 'text-reset me-3 disalbeCartWidget'
  return (
    <>
        <div className="d-flex align-items-center">
          <Link className={classNameLink} to={counterCart > 0 ? '/cart' : '#'}>
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">{counterCart}</span>
          </Link>
        </div>
    </>
  );
}

export default CartWidget