import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import "./Navbar.css";
import nav_logo from "../../arumbugal_assets/Navbar_logo/nav_logo.png";
import { IoMdMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl( window.location.pathname);
  }, [location]);

  console.log(url)


  return (
    <div id="navbar">
          <div id="first_navbar">
      <div className='container' id="first_navbar_1">
        <div id="first-navbar-1">
        <div id="first-navbar-1-1">
         <div id="first-navbar-1-1-1">
         <FaPhoneAlt id="first-navbar-1-1-1-phone" />
         </div>
         <div id="first-navbar-1-1-2">
            <p id="first-navbar-1-1-2-p">98947 58517 , 77087 93189 </p>
        </div>
        </div>
        <div id="first-navbar-1-2">
         <div id="first-navbar-1-2-1">
         <MdEmail id="first-navbar-1-2-1-email" />
         </div> 
         <div id="first-navbar-1-2-2">
           <p id="first-navbar-1-2-2-p">arumbugal07@gmail.com </p>
        </div>  
        </div>
        </div>  
        <div id="first-navbar-2">
           <div id="first-navbar-2-1">
             <p id="first-navbar-2-1-p">Follow Us :</p>
           </div>
           <div id="first-navbar-2-2">
           <FaFacebookF id="first-navbar-2-2-facebook" />
           </div>
           <div id="first-navbar-2-3">
           <FaTwitter id="first-navbar-2-2-twitter" />
           </div>
           <div id="first-navbar-2-4">
           <FaInstagram  id="first-navbar-2-2-instagram" />
           </div>
           <div id="first-navbar-2-5">
           <FaLinkedinIn id="first-navbar-2-2-linkedin" />
           </div>
        </div>  
      </div>
    </div>

   <nav class="navbar navbar-expand-lg " >
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
    </div>
 
  )
}

export default Navbar;