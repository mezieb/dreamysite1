import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Navbar from "./componets/Navbar";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Navbar/>
       <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
  </Routes>
  
  </BrowserRouter>
    
      
      
      
    </div>
  );
}

export default App;
