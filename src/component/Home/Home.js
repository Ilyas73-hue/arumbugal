import React, {useState, useEffect} from 'react';
import "./Home.css";
import bg_1 from "../../arumbugal_assets/Home/home_bg_1.jpeg";
import bg_2 from "../../arumbugal_assets/Home/home_bg_2.png";
import bg_3 from "../../arumbugal_assets/Home/home_bg_3.png";
import home_about_logo_1 from "../../arumbugal_assets/Home/home_about_logo_1.png";
import home_about_logo_2 from "../../arumbugal_assets/Home/home_about_logo2.png";
import home_about_logo_3 from "../../arumbugal_assets/Home/home_about_logo_3.png";
import home_about_logo_4 from "../../arumbugal_assets/Home/home_about_logo_4.png";
import home_what_we_do_card_img_1 from "../../arumbugal_assets/Home/home_what_we_do_card_img_1.png";
import home_what_we_do_card_img_2 from "../../arumbugal_assets/Home/home_what_we_do_card_img_2.png";
import home_what_we_do_card_img_3 from "../../arumbugal_assets/Home/home_what_we_do_card_img_3.png";
import home_what_we_do_card_img_4 from "../../arumbugal_assets/Home/home_what_we_do_card_img_4.png";
import home_what_we_do_card_img_5 from "../../arumbugal_assets/Home/home_what_we_do_card_img_5.png";
import home_what_we_do_card_img_6 from "../../arumbugal_assets/Home/home_what_we_do_card_img_6.png";
import home_what_we_do_card_img_7 from "../../arumbugal_assets/Home/home_what_we_do_card_img_7.png";
import home_what_we_do_card_img_8 from "../../arumbugal_assets/Home/home_what_we_do_card_img_8.png";
import home_section_5_img_1 from "../../arumbugal_assets/Home/home_section_5_img_1.png";
import home_section_5_img_2 from "../../arumbugal_assets/Home/home_section_5_img_2.png";
import home_section_6 from "../../arumbugal_assets/Home/home_section_6.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";
import working_area_img from "../../arumbugal_assets/Home/working_area_img.png";
import organogram from "../../arumbugal_assets/Home/Organogram.png";

function Home() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

const Dropdata = [{
  id: 1,
  name: "World Bank IDM Award (2004)",
  description: "In New Delhi for the development of low-cost sanitary napkins benefiting impoverished rural women."
}, {
  id: 2,
  name: "UNAIDS Civil Society Award (2006)",
  description: "In New Delhi for outstanding community care and support services provided to individuals living with HIV/AIDS in Chennai."
}, {
  id: 3,
  name: "International Achievers Award for Social Service (2010)",
  description: "Presented by the Indian Achievers Forum in New Delhi."
}, {
  id: 4,
  name: "Dr. Gurusamy Mudaliar Award (2014)",
  description: "For exceptional contributions to environmental conservation and management, conferred by the Department of Environment and Forests, Government of Tamil Nadu."
}, {
  id: 5,
  name: "Social Responsibility Award (2015)",
  description: "Presented by the Cancer Prevention Center, Tirunelveli."
}, {
  id: 6,
  name: "Independence Day NGO Award (2020)",
  description: "For outstanding contributions to COVID-19 prevention activities, recognized by the district administration in Tirunelveli District."
}, {
  id: 7,
  name: "NABARD Award (2021)",
  description: "Received for four consecutive years, recognizing support for 17 lakh SHG women beneficiaries."
}, {
  id: 8,
  name: "Best NGO Award for Micro insurance (2021 and 2022)",
  description: "Conferred by LIC of India, Tirunelveli."
}, {
  id: 9,
  name: "Best NGO Award (2024)",
  description: "Presented by the Rotary Club Tirunelveli, Porunai."
}, {
  id: 10,
  name: "Best CSR Partner Award (2024)",
  description: "Conferred by Bosch Ltd., Gangaikondan."
}]

  return (
    <div id="home">
      <div id="home1">
        {/* Section 1 */}

        <section is="home-section-1">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div id="carousel-image">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={bg_1} class="d-block" id="d-block" alt={bg_1} />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={bg_2} class="d-block" id="d-block" alt={bg_2} />
                </div>
                <div class="carousel-item">
                  <img src={bg_3} class="d-block" id="d-block" alt={bg_3} />
                </div>
              </div>
              <div id="carousel-content">
                <motion.div
                variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                id="carousel-content-1">
                  <h6 id="carousel-content-1-h6-1">
                  In every bloom, a story of progress
                  </h6>
                  <button id="carousel-button">Donate</button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}

        <section id="home-section-2">
          <div className="container" id="home-section-2-1">
            <motion.div
             variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-2-1-1">
              <div id="home-section-2-1-1-1">
                <div id="home-section-2-1-1-1-line"></div>
                <div
                id="home-section-2-1-1-1-2">
                  <p id="home-section-2-1-1-1-2-p-1">About us</p>
                </div>
              </div>

              <div id="home-section-2-1-1-2">
                <p id="home-section-2-1-1-2-p-1">
                  Welcome to Arumbugal trust -{" "}
                </p>
              </div>

              <div id="home-section-2-1-1-3">
                <p id="home-section-2-1-1-3-p-1">
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

            <div
             
            id="home-section-2-1-2">
              <div id="home-section-2-1-2-1">
                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-2-1-2-1-1">
                  <div id="home-section-2-1-2-1-1-1">
                    <img
                      id="home-section-2-1-2-1-1-1-img"
                      src={home_about_logo_1}
                      alt={home_about_logo_1}
                    />
                  </div>
                  <div id="home-section-2-1-2-1-1-2">
                    <p id="home-section-2-1-2-1-1-2-p-1">Become Volunteer</p>
                  </div>
                </motion.div>
                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-2-1-2-1-2">
                  <div id="home-section-2-1-2-1-2-1">
                    <img
                      id="home-section-2-1-2-1-2-1-img"
                      src={home_about_logo_2}
                      alt={home_about_logo_2}
                    />
                  </div>
                  <div id="home-section-2-1-2-1-2-2">
                    <p id="home-section-2-1-2-1-2-2-p-1">Give Donation</p>
                  </div>
                </motion.div>
              </div>
              <div id="home-section-2-1-2-2">
                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-2-1-2-2-1">
                  <div id="home-section-2-1-2-2-1-1">
                    <img
                      id="home-section-2-1-2-2-1-1-img"
                      src={home_about_logo_3}
                      alt={home_about_logo_3}
                    />
                  </div>
                  <div id="home-section-2-1-2-2-1-2">
                    <p id="home-section-2-1-2-2-1-2-p-1">Quick Fundraise</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                id="home-section-2-1-2-2-2">
                  <div id="home-section-2-1-2-2-2-1">
                    <img
                      id="home-section-2-1-2-2-2-1-img"
                      src={home_about_logo_4}
                      alt={home_about_logo_4}
                    />
                  </div>
                  <div id="home-section-2-1-2-2-2-2">
                    <p id="home-section-2-1-2-2-2-2-p-1">people help</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Section 3 */}

        <section id="home-section-3">
          <motion.div
           variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          className="container" id="home-section-3-1">
            <h6 id="home-section-3-1-h6-1">Help Other People</h6>
            <p id="home-section-3-1-p-1">
              Your contribution empowers us to save lives and enhance well-being
              through groundbreaking research and education.
            </p>
            <button id="home-section-3-1-button">Donate</button>
          </motion.div>
        </section>

           {/* Section 8 */}

        <section id="home-section-8">
           <div className='container' id="home-section-8-div-1">
             <motion.div
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-8-div-1-1">
              <p id="home-section-8-div-1-1-p-1">Our Working Areas</p>
              <div id="home-section-8-div-1-1-line">

              </div>
             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-8-div-1-2">
                  <img id="home-section-8-div-1-2-img-1" src={working_area_img} alt={working_area_img} />
             </motion.div>
           </div>
        </section>

        {/* Section 9 */}

        <section id="home-section-9">
           <div className='container' id="home-section-9-div-1">
             <motion.div
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-9-div-1-1">
              <p id="home-section-9-div-1-1-p-1">Organogram</p>
              <div id="home-section-9-div-1-1-line">

              </div>
             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 } }
             id="home-section-9-div-1-2">
                  <img id="home-section-9-div-1-2-img-1" src={organogram} alt={organogram} />
             </motion.div>
           </div>
        </section>


        {/* Section 4 */}

        <section id="home-section-4">
          <div className="container" id="home-section-4-1">
            <motion.div
             variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-4-1-1">
              <h6 id="home-section-4-1-1-h6-1">What We Do</h6>
            </motion.div>
            <motion.div
             variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-4-1-2"></motion.div>
            <motion.div
             variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="home-section-4-1-3">
              <p id="home-section-4-1-3-p-1">
                Help today because tomorrow you may be the one whoneeds more
                helping!
              </p>
            </motion.div>

            <div id="home-section-4-1-4">
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_1}
                  alt={home_what_we_do_card_img_1}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Women <span id="home-section-4-1-4-1-p-2">empowerment</span>
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_2}
                  alt={home_what_we_do_card_img_2}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Health <span id="home-section-4-1-4-1-p-2">care</span>{" "}
                  activity
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_3}
                  alt={home_what_we_do_card_img_3}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Skill <span id="home-section-4-1-4-1-p-2">development</span>
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_4}
                  alt={home_what_we_do_card_img_4}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Women <span id="home-section-4-1-4-1-p-2">empowerment</span>
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_7}
                  alt={home_what_we_do_card_img_7}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eco <span id="home-section-4-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_5}
                  alt={home_what_we_do_card_img_5}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eastern <span id="home-section-4-1-4-1-p-2">Ghats</span>
                </p>
              </motion.div>
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_6}
                  alt={home_what_we_do_card_img_6}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Sugam <span id="home-section-4-1-4-1-p-2">Canteen</span>
                </p>
              </motion.div>
     
              <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_8}
                  alt={home_what_we_do_card_img_8}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eco <span id="home-section-4-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* home Section 5 */}

        <section id="home-section-5">
          <div className="container" id="home-section-5-1">
              <div id="home-section-5-1">
              <div id="home-section-5-1-1">
                <motion.div
                 variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-5-1-1-1">
                    <h6 id="home-section-5-1-1-1-h6-1">Our vision</h6>
                    <p id="home-section-5-1-1-1-p-1">To create an inclusive and empowered society rooted in social justice and sustainable environmental practices, achieved through a profound commitment to nature.</p>
                    <button id="home-section-5-1-1-1-button">Read More</button>
                </motion.div>
                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-5-1-1-2">
                  <img id="home-section-5-1-1-2-img" src={home_section_5_img_1} alt={home_section_5_img_1} />
                </motion.div>
              </div>

              <div id="home-section-5-1-2">
              <motion.div
               variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="home-section-5-1-2-2">
                  <img id="home-section-5-1-2-2-img" src={home_section_5_img_2} alt={home_section_5_img_2} />
                </motion.div>
                <motion.div
                 variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                id="home-section-5-1-2-1">
                    <h6 id="home-section-5-1-2-1-h6-1">Our Mission</h6>
                    <p id="home-section-5-1-2-1-p-1">To mobilize and organize marginalized communities by generating awareness, capacity building and facilitating access to resources.</p>
                    <button id="home-section-5-1-2-1-button">Read More</button>
                </motion.div>
              </div>
              </div>
          </div>
        </section>

      {/* Home Section 6 */}

      <section id="home-section-6">
         <div className="container" id="home-section-6-1">
          <motion.div
           variants={matches ? "none" :fadeBigIn("right")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          id="home-section-6-1-1">
            <img id="home-section-6-1-1-img" src={home_section_6} alt={home_section_6} />
          </motion.div>
          <motion.div
           variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          id="home-section-6-1-2">
            <h6 id="home-section-6-1-2-h6-1">Awards</h6>
          <div id="home-section-6-1-2-1">

            
              {
                Dropdata.map((item, i) => (
                   <div id="home-section-6-1-2-1-flex">
                 <div id="home-section-6-1-2-1-1" onClick={() => toggle(i)}>
               <p id="home-section-6-1-2-1-1-p-1">{item.name}</p>
               <div id="home-section-6-1-2-1-1-1">
               <MdKeyboardArrowRight id="home-section-6-1-2-1-1-1-arrow"  />
               </div>
            </div> 

            <div id="home-section-6-1-2-1-2">
            <p id={ selected === i ? "home-section-6-1-2-1-2-p-1" : "home-section-6-1-2-1-2-unclick" }>{item.description}</p>
            </div>
                  </div>
                ))
              }
          
            </div>  
            </motion.div>
         </div>
      </section>

      {/* Home Section 7 */}


      <section id="home-section-7">
        <div className="container" id="home-section-7-1">
             <motion.div
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-7-1-1">
               <h6 id="home-section-7-1-1-h6-1">Activities</h6>
             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-7-1-2">

             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="home-section-7-1-3">
                <p id="home-section-7-1-3-p-1">Help today because tomorrow you may be the one whoneeds more helping!</p>
             </motion.div>
             <div id="home-section-7-1-4">
                  <motion.div
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                  id="home-section-7-1-4-card">
                    <div id="home-section-7-1-4-card-content-1">
                    <img id="home-section-7-1-4-card-img" src={home_what_we_do_card_img_1} alt={home_what_we_do_card_img_1} />
                    </div>
                    <div id="home-section-7-1-4-card-content-2">
                    <p id="home-section-7-1-4-card-p">Women’s Empowerment and Financial Independence</p>
                    <p id="home-section-7-1-4-card-p-1">Arumbugal collaborates with over 500 women’s self-help groups and 50 joint liability groups,</p>
                    </div> 
                    <div id="home-section-7-1-4-card-content-3">
                    <div id="home-section-7-1-4-card-arrow">
                    <FaArrowRight id="home-section-7-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                  id="home-section-7-1-4-card">
                    <div id="home-section-7-1-4-card-content-1">
                    <img id="home-section-7-1-4-card-img" src={home_what_we_do_card_img_2} alt={home_what_we_do_card_img_2} />
                    </div>
                    <div id="home-section-7-1-4-card-content-2">
                    <p id="home-section-7-1-4-card-p">Health Care Activities</p>
                    <p id="home-section-7-1-4-card-p-1">Conducting awareness programmes about reproductive Health, HIV/AIDS Care & Support, Tubersulosis, Cancer, Menstrual hygiene and Occupational hazards of beedi rolling.</p>
                    </div> 
                    <div id="home-section-7-1-4-card-content-3">
                    <div id="home-section-7-1-4-card-arrow">
                    <FaArrowRight id="home-section-7-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                   variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.7 }}
                  id="home-section-7-1-4-card">
                    <div id="home-section-7-1-4-card-content-1">
                    <img id="home-section-7-1-4-card-img" src={home_what_we_do_card_img_3} alt={home_what_we_do_card_img_3} />
                    </div>
                    <div id="home-section-7-1-4-card-content-2">
                    <p id="home-section-7-1-4-card-p">Life Insurance Awareness</p>
                    <p id="home-section-7-1-4-card-p-1">In partnership with the Life Insurance Corporation of India, we empower women to appreciate the importance of life insurance with policies tailored to their needs.</p>
                    </div> 
                    <div id="home-section-7-1-4-card-content-3">
                    <div id="home-section-7-1-4-card-arrow">
                    <FaArrowRight id="home-section-7-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
             </div>
        </div>
      </section>

      </div>
    </div>
  );
}

export default Home;