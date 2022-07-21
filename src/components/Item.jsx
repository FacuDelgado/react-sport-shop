import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Item = (item) => {

  return (
    <>
    <div className="col-md-4 col-sm-6">
      <div className="card card-item">
        <Link to={`/item/${item.id}`}><img src={item.imageUrl} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <h5 className="card-title"><Link to={`/item/${item.id}`}>{item.title}</Link></h5>
          <h6>Price: ${item.price}</h6>
          <p className="card-text text-truncate">{item.description}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item