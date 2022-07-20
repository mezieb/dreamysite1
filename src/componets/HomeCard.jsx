import React from 'react'

function HomeCard(props) {
  return (
    <div  className="product-card">
          <div className="card   card11" >
  <img src={props.img} className="card-img-top" alt="photo1"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">${props.price}</h6>
    <p className="card-text">{props.description}</p>
    <a href="/Product" className="btn btn-light bg3 btn-card"> See All Products</a>
  </div>
</div>
</div>
  )
}

export default HomeCard;