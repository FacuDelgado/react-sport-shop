const CartWidget = () => {
  return (
    <>
        <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
        </div>
    </>
  );
}

export default CartWidget