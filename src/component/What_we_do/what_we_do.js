import React, {useState, useEffect} from 'react';
import "./what_we_do.css";
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
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";

function What_we_do() {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 769px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 769px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div id="what_we_do">
      {/* Section 1 */}
      <section id="what_we_do_section-1">
          <div className='container' id="what_we_do_section-1-div-1">
              <motion.h6
                variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-1-div-1-h6-1">What we do</motion.h6>
              <motion.p
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-1-div-1-P-1">Home / <span id="what_we_do_section-1-div-1-P-1-span">What we do</span></motion.p>
          </div>
      </section>
    
    {/* Section 2 */}
 

<section id="what_we_do_section-2">
          <div className="container" id="what_we_do_section-2-1">
            <motion.div
            variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            id="what_we_do_section-2-1-1">
              <h6 id="what_we_do_section-2-1-1-h6-1">What We Do</h6>
            </motion.div>
            <motion.div
             variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            id="what_we_do_section-2-1-2"></motion.div>
            <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
            id="what_we_do_section-2-1-3">
              <p id="what_we_do_section-2-1-3-p-1">
                Help today because tomorrow you may be the one whoneeds more
                helping!
              </p>
            </motion.div>

            <div id="what_we_do_section-2-1-4">
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_1}
                  alt={home_what_we_do_card_img_1}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Women <span id="what_we_do_section-2-1-4-1-p-2">empowerment</span>
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_2}
                  alt={home_what_we_do_card_img_2}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Health <span id="what_we_do_section-2-1-4-1-p-2">care</span>{" "}
                  activity
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_3}
                  alt={home_what_we_do_card_img_3}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Skill <span id="what_we_do_section-2-1-4-1-p-2">development</span>
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_4}
                  alt={home_what_we_do_card_img_4}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Women <span id="what_we_do_section-2-1-4-1-p-2">empowerment</span>
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_5}
                  alt={home_what_we_do_card_img_5}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Eastern <span id="what_we_do_section-2-1-4-1-p-2">Ghats</span>
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_6}
                  alt={home_what_we_do_card_img_6}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Sugam <span id="what_we_do_section-2-1-4-1-p-2">Canteen</span>
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_7}
                  alt={home_what_we_do_card_img_7}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Eco <span id="what_we_do_section-2-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </motion.div>
              <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-2-1-4-1">
                <img
                  id="what_we_do_section-2-1-4-1-img"
                  src={home_what_we_do_card_img_8}
                  alt={home_what_we_do_card_img_8}
                />
                <p id="what_we_do_section-2-1-4-1-p-1">
                  Eco <span id="what_we_do_section-2-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        

        {/* Section 3 */}

        <section id="what_we_do_section-3">
          <motion.div
          variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="container" id="what_we_do_section-3-1">
            <h6 id="what_we_do_section-3-1-h6-1">Help Other People</h6>
            <p id="what_we_do_section-3-1-p-1">
              Your contribution empowers us to save lives and enhance well-being
              through groundbreaking research and education.
            </p>
            <button id="what_we_do_section-3-1-button">Donate</button>
          </motion.div>
        </section>

        {/* Section 4 */}
      
        <section id="what_we_do_section-4">
          <div className="container" id="what_we_do_section-4-1">
              <div id="what_we_do_section-4-1">
              <div id="what_we_do_section-4-1-1">
                <motion.div
                variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                id="what_we_do_section-4-1-1-1">
                    <h6 id="what_we_do_section-4-1-1-1-h6-1">Our vision</h6>
                    <p id="what_we_do_section-4-1-1-1-p-1">To create an inclusive and empowered society rooted in social justice and sustainable environmental practices, achieved through a profound commitment to nature.</p>
                    <button id="what_we_do_section-4-1-1-1-button">Read More</button>
                </motion.div>
                <motion.div
                  variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                id="what_we_do_section-4-1-1-2">
                  <img id="what_we_do_section-4-1-1-2-img" src={home_section_5_img_1} alt={home_section_5_img_1} />
                </motion.div>
              </div>

              <div id="what_we_do_section-4-1-2">
              <motion.div
              variants={matches ? fadeSmallIn("right") :fadeBigIn("right")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              id="what_we_do_section-4-1-2-2">
                  <img id="what_we_do_section-4-1-2-2-img" src={home_section_5_img_2} alt={home_section_5_img_2} />
                </motion.div>
                <motion.div
                  variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                id="what_we_do_section-4-1-2-1">
                    <h6 id="what_we_do_section-4-1-2-1-h6-1">Our Mission</h6>
                    <p id="what_we_do_section-4-1-2-1-p-1">To create an inclusive and empowered society rooted in social justice and sustainable environmental practices, achieved through a profound commitment to nature.</p>
                    <button id="what_we_do_section-4-1-2-1-button">Read More</button>
                </motion.div>
              </div>
              </div>
          </div>
        </section>

    </div>
  )
}

export default What_we_do;

