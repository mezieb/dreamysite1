import React from 'react'




function Navbar() {
  return (
    <div  >
        <nav className="navbar navbar-expand-lg  navbar-dark bg fixed-top">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">
    <img src="./imges/logo1.png" className="logoImg" alt="profile-pic"/>
      </a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-nav">
        <li className="nav-item ">
          <a className="nav-link active nav-link2" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link2" aria-current="page" href="/Product">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link2" aria-current="page" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link2" aria-current="page" href="/Contact">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;