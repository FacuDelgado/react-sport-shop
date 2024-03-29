import { useContext } from 'react'
import { CartContext } from '../context/cartContext';

const CartItem = (param) => {
    const {removeItem}  = useContext(CartContext);
    
  return (
    <>
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={param.item.imageUrl}
              className="img-fluid rounded-3" alt="Cotton T-shirt"/>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{param.item.title}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <p>Item(s) added: {param.count} x ${param.item.price}</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">${param.partialCount}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <span className="text-danger delete-button" onClick={() => removeItem(param.item.id)}><i className="fas fa-trash fa-lg"></i></span>
          </div>
        </div>
      </div>
  </div>
    </>
  )
}

export default CartItem