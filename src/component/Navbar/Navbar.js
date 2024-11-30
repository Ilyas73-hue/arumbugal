import React from 'react';
import "./Navbar.css";
import nav_logo from "../../arumbugal_assets/Navbar_logo/nav_logo.png";
import { IoMdMenu } from "react-icons/io";


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg " id="navbar">
    <div class="container">
      <a class="navbar-brand" href="/"><img id="nav-logo" src={nav_logo} alt={nav_logo} /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <IoMdMenu id="navbar-menu-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
          <li class="nav-item" id="nav-item">
            <a class="nav-link" id="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">What we do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">Activities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-link" href="/">Contact us</a>
          </li>
        </ul>
        <div className='d-flex' id="d-flex">
          <button id="d-flex-contact">Contact</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
