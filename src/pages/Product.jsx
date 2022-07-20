import React from 'react'
import Card from '../componets/Card';
import Footer from '../componets/Footer';
import ProductsData from '../componets/Productsdata';



function createCard(ProductsData){
  return(
       <Card
       key={ProductsData.id}
       img={ProductsData.imgURL}
       name={ProductsData.name}
       price={ProductsData.price}
       description={ProductsData.description}
       
       />
  );
}

function Product() {
  return (
    <div className="product-page">
      <div className="product-cards">{ProductsData.map(createCard)}</div>
    
      <Footer/>
      
    </div>
  )
}

export default Product;