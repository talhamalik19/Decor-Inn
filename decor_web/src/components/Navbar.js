import React from 'react'
import {Link} from 'react-router-dom'
import Categories from './Categories'
import logo from '../images/logo.jpg'
export default function Navbar() {

  return (
    <>
   <nav id='navbar' className="navbar navbar-expand-lg">
  <div id='container-fluid' className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <Link className="nav-item" id='nav-link' to="/Dashboard"><img id='navImage' src={logo}/></Link>
      </ul>
      <ul className="nav-list">
        <li className="nav-item mx-10">
          <Link className="nav-link active" aria-current="page" to="/Dashboard">Home</Link>
        </li>
        <li className="nav-item">
          <Link id='cat_nav' className="nav-link" to="#">Categories 
          <Categories/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        </ul>
        
      
    </div>
  </div>
</nav>
    </>
  )
}
