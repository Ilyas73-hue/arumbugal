import React from "react";
import "./Footer.css";
import footer_logo from "../../arumbugal_assets/footer/footer_logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


function Footer() {
  return (
    <div id="footer">
      <div className="container" id="footer-1">
        <div id="footer-div-1">
          <section id="footer-section-1">
            <div id="footer-section-1-div-1">
              <img
                id="footer-section-1-div-1-logo"
                src={footer_logo}
                alt={footer_logo}
              />
            </div>
            <div id="footer-section-1-div-2">
              <p id="footer-section-1-div-2-p">
                Arumbugal Trust, established in 1987, is a registered NGO
                dedicated to fostering comprehensive development for
                marginalized communities in Tamil Nadu. Through social,
                educational, and developmental initiatives, the organization
                aims to enhance the quality of life for disadvantaged groups in
                the region.
              </p>
            </div>
            <div id="footer-section-1-div-3">
              <div id="footer-section-1-div-3-instagram-bg">
                <FaInstagram id="footer-section-1-div-3-instagram-logo" />
              </div>
              <div id="footer-section-1-div-3-facebook-bg">
                <FaFacebookF id="footer-section-1-div-3-facebook-logo" />
              </div>
              <div id="footer-section-1-div-3-twitter-bg">
                <FaXTwitter id="footer-section-1-div-3-twitter-logo" />
              </div>
              <div id="footer-section-1-div-3-linkedin-bg">
                <FaLinkedinIn id="footer-section-1-div-3-linkedin-logo" />
              </div>
            </div>
          </section>

          <section id="footer-section-2">
            <div id="footer-section-2-div-1">
              <p id="footer-section-2-div-1-p-1">Page links</p>
            </div>
            <div id="footer-section-2-div-2">
              <ul id="footer-section-2-div-2-ul">
                <li id="footer-section-2-div-2-li">
                  <a id="footer-section-2-div-2-li-a" href="/">
                    Home
                  </a>
                </li>
                <li id="footer-section-2-div-2-li">
                  <a id="footer-section-2-div-2-li-a" href="/about">
                    About
                  </a>
                </li>
                <li id="footer-section-2-div-2-li">
                  <a id="footer-section-2-div-2-li-a" href="/what_we_do">
                    What we do
                  </a>
                </li>
                <li id="footer-section-2-div-2-li">
                  <a id="footer-section-2-div-2-li-a" href="/gallery">
                    Gallery
                  </a>
                </li>
                <li id="footer-section-2-div-2-li">
                  <a id="footer-section-2-div-2-li-a" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="footer-section-3">
            <div id="footer-section-3-div-1">
              <p id="footer-section-3-div-1-p-1">What we do</p>
            </div>
            <div id="footer-section-3-div-2">
              <ul id="footer-section-3-div-2-ul">
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Women{" "}
                    <span id="footer-section-3-div-2-li-a-span">
                      empowerment
                    </span>
                  </a>
                </li>
              
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Skill{" "}
                    <span id="footer-section-3-div-2-li-a-span">
                      development
                    </span>
                  </a>
                </li>
                
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Eco{" "}
                    <span id="footer-section-3-div-2-li-a-span">
                      conservation
                    </span>{" "}
                    activity
                  </a>
                </li>
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Life{" "}
                    <span id="footer-section-3-div-2-li-a-span">Insurance</span>{" "}
                    Awareness
                  </a>
                </li>
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Health{" "}
                    <span id="footer-section-3-div-2-li-a-span">care</span>{" "}
                    activity
                  </a>
                </li>
                <li id="footer-section-3-div-2-li">
                  <a id="footer-section-3-div-2-li-a" href="">
                    Sugam{" "}
                    <span id="footer-section-3-div-2-li-a-span">Canteen</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="footer-section-4">
            <div id="footer-section-4-div-1">
              <p id="footer-section-4-div-1-p-1">Contact</p>
            </div>
            <div id="footer-section-4-div-2">
              <div id="footer-section-4-div-2-1">
                <div id="footer-section-4-div-2-1-1">
                  <IoLocationSharp id="footer-section-4-div-2-1-1-location" />
                </div>
                <div id="footer-section-4-div-2-1-2">
                  <p id="footer-section-4-div-2-1-2-p-1">
                  Arumbugal           Trust <br/>9/410, Aachimadam,    
                     Thiruchendur Main
                    Road,  Palayamkottai, Tirunelveli, 627011.
                  </p>
                  {/* Arumbugal Trust */}
                </div>
              </div>
              <div id="footer-section-4-div-2-2">
                 <div id="footer-section-4-div-2-2-1">
                 <FaPhoneAlt id="footer-section-4-div-2-2-1-phone" />
                 </div>
                 <div id="footer-section-4-div-2-2-2">
                 <p id="footer-section-4-div-2-2-2-p-1">
                 98947 58517<br /> 77087 93189 
                  </p>
                 </div>
              </div>
              <div id="footer-section-4-div-2-3">
                 <div id="footer-section-4-div-2-3-1">
                 <MdOutlineMail id="footer-section-4-div-2-3-1-email" />
                 </div>
                 <div id="footer-section-4-div-2-3-2">
                  <p id="footer-section-4-div-2-3-2-p-1">arumbugal07@gmail.com </p>
                 </div>
              </div>
            </div>
          </section>
        </div>
        <div id="footer-div-2">

        </div>
        <div id="footer-div-3">
          <div id="footer-div-3-1">
          <p id="footer-div-3-1-p-1">Copyright © 2024 <span id="footer-div-3-1-p-1-span">Arumbugal trust</span>. All Rights Reserved.</p>
          </div>
          <div id="footer-div-3-2">
            <p id="footer-div-3-2-p-1">
            Developed by <a id="footer-div-3-2-p-1-a" href="">Intwhizz</a>
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;