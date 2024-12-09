import React, {useState, useEffect} from 'react';
import "./About.css";
import home_about_logo_1 from "../../arumbugal_assets/Home/home_about_logo_1.png";
import home_about_logo_2 from "../../arumbugal_assets/Home/home_about_logo2.png";
import home_about_logo_3 from "../../arumbugal_assets/Home/home_about_logo_3.png";
import home_about_logo_4 from "../../arumbugal_assets/Home/home_about_logo_4.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";
import future_plan_card_1 from "../../arumbugal_assets/Home/future_card_logo_1.png";
import future_plan_card_2 from "../../arumbugal_assets/Home/future_card_logo_2.png";
import future_plan_card_3 from "../../arumbugal_assets/Home/future_card_logo_3.png";
import future_plan_card_4 from "../../arumbugal_assets/Home/future_card_logo_4.png";

function About() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const future_data =[{
    id: 1,
    name: "Online Marketing Forum",
    description: "Establish an online platform to support women entrepreneurs in marketing their products and services.",
    img: `${future_plan_card_1}`
  }, {
    id: 2,
    name: "Skill Development Center",
    description: "Set up a dedicated center to provide advanced skill development training for women.",
    img: `${future_plan_card_2}`
  }, {
    id: 3,
    name: "Multi-Faceted Training Center",
    description: "Develop a training center focusing on community development and performing arts.",
    img: `${future_plan_card_3}`
  }, {
    id: 4,
    name: "Life Skill Education Center",
    description: "Create a center to offer life skills education for children and adolescents, fostering their personal and professional growth.",
    img: `${future_plan_card_4}`
  }]

  return (
    <div id="about">
        {/* Section 1 */}
      <section id="about-section-1">
          <div className='container' id="about-section-1-div-1">
              <motion.h6
                  variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
              id="about-section-1-div-1-h6-1">About Us</motion.h6>
              <motion.p
                  variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
              id="about-section-1-div-1-P-1">Home / <span id="about-section-1-div-1-P-1-span">About us</span></motion.p>
          </div>
      </section>

      {/* Section 2 */}

      <section id="about-section-2">
<div className="container" id="about-section-2-1">
  <motion.div
   variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
   initial="hidden"
   whileInView={'show'}
   viewport={{ once: false, amount: 0.7 }}
   id="about-section-2-1-1">
    <div id="about-section-2-1-1-1">
      <div id="about-section-2-1-1-1-line"></div>
      <div id="about-section-2-1-1-1-2">
        <p id="about-section-2-1-1-1-2-p-1">About us</p>
      </div>
    </div>

    <div id="about-section-2-1-1-2">
      <p id="about-section-2-1-1-2-p-1">
        Welcome to Arumbugal trust -{" "}
      </p>
    </div>

    <div id="about-section-2-1-1-3">
      <p id="about-section-2-1-1-3-p-1">
        Arumbugal Trust, established in 1987, is a registered NGO
        dedicated to fostering comprehensive development for
        marginalized communities in Tamil Nadu. Through social,
        educational, and developmental initiatives, the organization
        aims to enhance the quality of life for disadvantaged groups
        in the region. The term Arumbugal, meaning floral buds ready
        to bloom, symbolizes potential growth and new beginnings,
        reflecting the Trust’s mission to empower communities to
        realize their full potential.
      </p>
    </div>
  </motion.div>
  <div id="about-section-2-1-2">
    <div id="about-section-2-1-2-1">
      <motion.div
      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      id="about-section-2-1-2-1-1">
        <div id="about-section-2-1-2-1-1-1">
          <img
            id="about-section-2-1-2-1-1-1-img"
            src={home_about_logo_1}
            alt={home_about_logo_1}
          />
        </div>
        <div id="about-section-2-1-2-1-1-2">
          <p id="about-section-2-1-2-1-1-2-p-1">Become Volunteer</p>
        </div>
      </motion.div>
      <motion.div
      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      id="about-section-2-1-2-1-2">
        <div id="about-section-2-1-2-1-2-1">
          <img
            id="about-section-2-1-2-1-2-1-img"
            src={home_about_logo_2}
            alt={home_about_logo_2}
          />
        </div>
        <div id="about-section-2-1-2-1-2-2">
          <p id="about-section-2-1-2-1-2-2-p-1">Give Donation</p>
        </div>
      </motion.div>
    </div>
    <div
    id="about-section-2-1-2-2">
      <motion.div
      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      id="about-section-2-1-2-2-1">
        <div id="about-section-2-1-2-2-1-1">
          <img
            id="about-section-2-1-2-2-1-1-img"
            src={home_about_logo_3}
            alt={home_about_logo_3}
          />
        </div>
        <div id="about-section-2-1-2-2-1-2">
          <p id="about-section-2-1-2-2-1-2-p-1">Quick Fundraise</p>
        </div>
      </motion.div>
      <motion.div
      variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      id="about-section-2-1-2-2-2">
        <div id="about-section-2-1-2-2-2-1">
          <img
            id="about-section-2-1-2-2-2-1-img"
            src={home_about_logo_4}
            alt={home_about_logo_4}
          />
        </div>
        <div id="about-section-2-1-2-2-2-2">
          <p id="about-section-2-1-2-2-2-2-p-1">people help</p>
        </div>
      </motion.div>
    </div>
  </div>
</div>
</section>

    {/* Section 3 */}

    <section id="about-section-3">
<motion.div
 variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
 initial="hidden"
 whileInView={'show'}
 viewport={{ once: false, amount: 0.7 }}
className="container" id="about-section-3-1">
  <h6 id="about-section-3-1-h6-1">Help Other People</h6>
  <p id="about-section-3-1-p-1">
    Your contribution empowers us to save lives and enhance well-being
    through groundbreaking research and education.
  </p>
  <button id="about-section-3-1-button">Donate</button>
</motion.div>
</section>

{/* Section 4  */}

<section id="about-section-4">
     <div className='container' id="about-section-4-div-1">
      <div id="about-section-4-div-1-1">
        <motion.h6
         variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
        id="about-section-4-div-1-1-h6-1">Future Plans</motion.h6>
        <motion.div
         variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
        id="about-section-4-div-1-1-line"></motion.div>
      </div>
      <div id="about-section-4-div-1-2">
        {
          future_data.map((item) => (
            <motion.div
            variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           id="about-section-4-div-1-2-1">
             <div id="about-section-4-div-1-2-1-1">
              <img id="about-section-4-div-1-2-1-1-img" src={item.img} alt={item.img} />
             </div>
             <div id="about-section-4-div-1-2-1-2">
             <p id="about-section-4-div-1-2-1-p-1">{item.name}</p>
             <p id="about-section-4-div-1-2-1-p-2">{item.description}</p>
             </div>
   
           </motion.div>
          ))
        }
      

        {/* <motion.div
         variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
        id="about-section-4-div-1-2-1">
        <p id="about-section-4-div-1-2-1-p-1">Skill Development Center</p>
        <p id="about-section-4-div-1-2-1-p-2">Set up a dedicated center to provide advanced skill development training for women.</p>
        </motion.div>
        <motion.div
         variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
        id="about-section-4-div-1-2-1">
        <p id="about-section-4-div-1-2-1-p-1">Multi-Faceted Training Center</p>
        <p id="about-section-4-div-1-2-1-p-2">Develop a training center focusing on community development and performing arts.</p>
        </motion.div>
        <motion.div
         variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
        id="about-section-4-div-1-2-1">
        <p id="about-section-4-div-1-2-1-p-1">Life Skill Education Center</p>
        <p id="about-section-4-div-1-2-1-p-2">Create a center to offer life skills education for children and adolescents, fostering their personal and professional growth.</p>
        </motion.div> */}
      </div>
     </div>
</section>

    </div>
  )
}

export default About;




