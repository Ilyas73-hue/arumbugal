import React from 'react';
import "./First_Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function First_Navbar() {
  return (
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
  )
}

export default First_Navbar;
