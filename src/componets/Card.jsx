import React from 'react'

function Card(props) {
  return (
    <div  className="product-card ">
          <div className="card   card11 " >
  <img src={props.img} className="card-img-top" alt="photo1"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">${props.price}</h6>
    <p className="card-text">{props.description}</p>
    <a href="#order" className="btn btn-light bg3 btn-card "> Order Now</a>
  </div>
</div>
</div>
  


    
  )
}

export default Card;