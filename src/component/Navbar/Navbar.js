import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import "./Navbar.css";
import nav_logo from "../../arumbugal_assets/Navbar_logo/nav_logo.png";
import { IoMdMenu } from "react-icons/io";


function Navbar() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl( window.location.pathname);
  }, [location]);

  console.log(url)


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
            <a class="nav-link" id={ url === "/" ? "nav-link-active" : "nav-link" } href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id={ url === "/about" ? "nav-link-active" : "nav-link" } href="/about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id={ url === "/what_we_do" ? "nav-link-active" : "nav-link" } href="/what_we_do">What we do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id={ url === "/activities" ? "nav-link-active" : "nav-link" } href="/activities">Activities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id={ url === "/gallery" ? "nav-link-active" : "nav-link" } href="/gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id={ url === "/contact" ? "nav-link-active" : "nav-link" } href="/contact">Contact us</a>
          </li>
        </ul>
        <div className='d-flex' id="d-flex">
          <button id="d-flex-contact" onClick={() => window.location.href="/contact"}>Contact</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;