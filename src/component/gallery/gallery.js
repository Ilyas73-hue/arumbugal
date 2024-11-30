import React, {useState, useEffect} from 'react';
import "./gallery.css";
import img_1 from "../../arumbugal_assets/gallery/gallery_1.png";
import img_2 from "../../arumbugal_assets/gallery/gallery_2.png";
import img_3 from "../../arumbugal_assets/gallery/gallery_3.png";
import img_4 from "../../arumbugal_assets/gallery/gallery_4.png";
import img_5 from "../../arumbugal_assets/gallery/gallery_5.png";
import img_6 from "../../arumbugal_assets/gallery/gallery_6.png";
import img_7 from "../../arumbugal_assets/gallery/gallery_7.png";
import img_8 from "../../arumbugal_assets/gallery/gallery_8.png";
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
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_1} alt={img_1} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_2} alt={img_2} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_3} alt={img_3} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_4} alt={img_4} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_5} alt={img_5} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_6} alt={img_6} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_7} alt={img_7} />
                <motion.img
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                id="gallery-section-2-1-3-img"  src={img_8} alt={img_8} />
              </div>
           </div>
      </section>


    </div>
  )
}

export default Gallery;
