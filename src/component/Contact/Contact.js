import React, {useState, useEffect} from 'react';
import "./Contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function Contact() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  return (
    <div id="contact">
       {/* section 1 */}
        
       <section id="contact-section-1">
          <div className='container' id="contact-section-1-div-1">
              <motion.h6
               variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="contact-section-1-div-1-h6-1">Contact</motion.h6>
              <motion.p
                       variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                       initial="hidden"
                       whileInView={'show'}
                       viewport={{ once: false, amount: 0.7 }}
              id="contact-section-1-div-1-P-1">Home / <span id="contact-section-1-div-1-P-1-span">Contact</span></motion.p>
          </div>
      </section>

      {/* Section 2 */}
      <section id="contact-section-2">
       <div className='container' id="contact-section-2-div-1">
           <div id="contact-section-2-div-1">
               <motion.h6
                        variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
               id="contact-section-2-div-1-h6-1">Contact</motion.h6>
               <motion.div
                        variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
               id="contact-section-2-div-1-line"></motion.div>
           </div>
           <div id="contact-section-2-div-2">

             <motion.div
                      variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}
             id="contact-section-2-div-2-1">
                 <h6 id="contact-section-2-div-2-1-h6-1">Get In Touch</h6>
                 <form id="contact-section-2-div-2-1-form-1">
                     <div id="contact-section-2-div-2-1-form-1-div-1">
                       <input id="contact-section-2-div-2-1-form-1-input-1" type="text" placeholder='Name' />
                       <input id="contact-section-2-div-2-1-form-1-input-2" type="number" placeholder='Phone No' />
                     </div>
                     <input id="contact-section-2-div-2-1-form-1-input-3" type="email" placeholder='Email' />
                     <textarea id="contact-section-2-div-2-1-form-1-input-4" type="message" placeholder='Message'></textarea>
                     <button id="contact-section-2-div-2-1-form-1-button">Submit</button>
                 </form>
             </motion.div>

             <motion.div
                      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}
             id="contact-section-2-div-2-2">

             <div id="contact-section-2-div-2-2-1">
<div id="contact-section-2-div-2-2-1-1">
  <IoLocationSharp id="contact-section-2-div-2-2-1-1-location" />
</div>
<div id="contact-section-2-div-2-2-1-2">
  <p id="contact-section-2-div-2-2-1-2-p-1">
    Arumbugal Trust  9/410, Archimadam,  Thiruchendur Main
    Road,  Palayamkotai, Tirunelveli, 627011.
  </p>
</div>
</div>

<div id="contact-section-2-div-2-2-2">
<div id="contact-section-2-div-2-2-2-1">
<FaPhoneAlt id="contact-section-2-div-2-2-2-1-phone" />
</div>
<div id="contact-section-2-div-2-2-2-2">
<p id="contact-section-2-div-2-2-2-2-p-1">
98947 58517, 77087 93189 
 </p>
</div>
</div>

<div id="contact-section-2-div-2-2-3">
<div id="contact-section-2-div-2-2-3-1">
<MdOutlineMail id="contact-section-2-div-2-2-3-1-email" />
</div>
<div id="contact-section-2-div-2-2-3-2">
 <p id="contact-section-2-div-2-2-3-2-p-1">arumbugal07@gmail.com </p>
</div>
</div>


             </motion.div>

           </div>
       </div>
      </section>

      <motion.section
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
      id="contact-section-3">
      <iframe id="contact-section-3-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9645435157!2d77.78681337500807!3d8.694916994129013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040d975bab78f7%3A0xcba1dc58b6e2140f!2sArumbugal%20Trust%20Office!5e0!3m2!1sen!2sin!4v1732966957167!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </motion.section>


    </div>
  )
}

export default Contact;

{/* 




 */}
