import React from 'react'
import AboutContent from '../componets/AboutContent';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import HomeCard from '../componets/HomeCard';
import ProductsData from '../componets/Productsdata';





function Home() {
  return (
    <div className="home">
        
        <Header/>
       <div className="homecard">
       <HomeCard 
         img={ProductsData[0].imgURL}
         name={ProductsData[0].name}
         price={ProductsData[0].price}
         description={ProductsData[0].description}
        />
         <HomeCard 
         img={ProductsData[1].imgURL}
         name={ProductsData[1].name}
         price={ProductsData[1].price}
         description={ProductsData[1].description}
        />
         <HomeCard 
         img={ProductsData[2].imgURL}
         name={ProductsData[2].name}
         price={ProductsData[2].price}
         description={ProductsData[2].description}
        />

       </div>
    
        
        <AboutContent/>
        <Footer/>
        
    </div>
  )
}

export default Home;