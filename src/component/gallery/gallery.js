import React, {useState, useEffect} from 'react';
import "./gallery.css";
import img_1 from "../../arumbugal_assets/gallery/gallery_img_1.png";
import img_2 from "../../arumbugal_assets/gallery/gallery_img_2.png";
import img_3 from "../../arumbugal_assets/gallery/gallery_img_3.png";
import img_4 from "../../arumbugal_assets/gallery/gallery_img_4.png";
import img_5 from "../../arumbugal_assets/gallery/gallery_img_5.png";
import img_6 from "../../arumbugal_assets/gallery/gallery_img_6.png";
import img_7 from "../../arumbugal_assets/gallery/gallery_img_7.png";
import img_8 from "../../arumbugal_assets/gallery/gallery_img_8.png";
import img_9 from "../../arumbugal_assets/gallery/gallery_img_9.png";
import img_10 from "../../arumbugal_assets/gallery/gallery_img_10.png";
import img_11 from "../../arumbugal_assets/gallery/gallery_img_11.png";
import img_12 from "../../arumbugal_assets/gallery/gallery_img_12.png";
import img_13 from "../../arumbugal_assets/gallery/gallery_img_13.png";
import img_14 from "../../arumbugal_assets/gallery/gallery_img_14.png";
import img_15 from "../../arumbugal_assets/gallery/gallery_img_15.png";
import img_16 from "../../arumbugal_assets/gallery/gallery_img_16.png";
import img_17 from "../../arumbugal_assets/gallery/gallery_img_17.png";
import img_18 from "../../arumbugal_assets/gallery/gallery_img_18.png";
import img_19 from "../../arumbugal_assets/gallery/gallery_img_19.png";
import img_20 from "../../arumbugal_assets/gallery/gallery_img_20.png";
import img_21 from "../../arumbugal_assets/gallery/gallery_img_21.png";
import img_22 from "../../arumbugal_assets/gallery/gallery_img_22.png";
import img_23 from "../../arumbugal_assets/gallery/gallery_img_23.png";
import img_24 from "../../arumbugal_assets/gallery/gallery_img_24.png";
import img_25 from "../../arumbugal_assets/gallery/gallery_img_25.png";
import img_26 from "../../arumbugal_assets/gallery/gallery_img_26.png";
import img_27 from "../../arumbugal_assets/gallery/gallery_img_27.png";
import img_28 from "../../arumbugal_assets/gallery/gallery_img_28.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Gallery() {

  
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  const gallery_data = [{
   id: 1, 
   img: `${img_1}`
  }, {
    id: 2, 
   img: `${img_2}`
  }, {
    id: 3, 
   img: `${img_3}`
  }, {
    id: 4, 
   img: `${img_4}`
  }, {
    id: 5, 
   img: `${img_5}`
  }, {
    id: 6, 
   img: `${img_6}`
  }, {
    id: 7, 
   img: `${img_7}`
  }, {
    id: 8, 
   img: `${img_8}`
  },{
    id: 9, 
   img: `${img_9}`
  }, {
    id: 10, 
   img: `${img_10}`
  }, {
    id: 11, 
   img: `${img_11}`
  }, {
    id: 12, 
   img: `${img_12}`
  }, {
    id: 13, 
   img: `${img_13}`
  }, {
    id: 14, 
   img: `${img_14}`
  }, {
    id: 15, 
   img: `${img_15}`
  }, {
    id: 16, 
   img: `${img_16}`
  }, {
    id: 17, 
   img: `${img_17}`
  }, {
    id: 18, 
   img: `${img_18}`
  }, {
    id: 19, 
   img: `${img_19}`
  }, {
    id: 20, 
   img: `${img_20}`
  },{
    id: 21, 
   img: `${img_21}`
  }, {
    id: 22, 
   img: `${img_22}`
  }, {
    id: 23, 
   img: `${img_23}`
  }, {
    id: 24, 
   img: `${img_24}`
  }, {
    id: 25, 
   img: `${img_25}`
  },{
    id: 26, 
   img: `${img_26}`
  }, {
    id: 27, 
   img: `${img_27}`
  }, {
    id: 28, 
   img: `${img_28}`
  }] 

  return (
    <div id="gallery">
      {/* section 1 */}

      <section id="gallery-section-1">
          <div className='container' id="gallery-section-1-div-1">
              <motion.h6
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="gallery-section-1-div-1-h6-1">Gallery</motion.h6>
              <motion.p
                 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
              id="gallery-section-1-div-1-P-1">Home / <span id="gallery-section-1-div-1-P-1-span">Gallery</span></motion.p>
          </div>
      </section>

      {/* Section 2 */}


      <section id="gallery-section-2">
           <div className='container' id="gallery-section-2-1">
              <motion.div
                 variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
              id="gallery-section-2-1-1">
                  <p id="gallery-section-2-1-1-p-1">Gallery</p>
              </motion.div>
              <motion.div 
                 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
              id="gallery-section-2-1-2">
                     
              </motion.div>
              <div id="gallery-section-2-1-3">
              {
gallery_data.map((item) => (

                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={item.img} alt={item.img} />
        
))
              }
                    </div>
             
           </div>
      </section>


    </div>
  )
}

export default Gallery;
