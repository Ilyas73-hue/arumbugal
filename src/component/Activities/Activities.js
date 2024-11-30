import React, {useState, useEffect} from 'react';
import "./Activities.css";
import home_what_we_do_card_img_1 from "../../arumbugal_assets/Home/home_what_we_do_card_img_1.png";
import home_what_we_do_card_img_3 from "../../arumbugal_assets/Home/home_what_we_do_card_img_3.png";
import home_what_we_do_card_img_4 from "../../arumbugal_assets/Home/home_what_we_do_card_img_4.png";
import home_what_we_do_card_img_5 from "../../arumbugal_assets/Home/home_what_we_do_card_img_5.png";
import home_what_we_do_card_img_7 from "../../arumbugal_assets/Home/home_what_we_do_card_img_7.png";
import home_what_we_do_card_img_8 from "../../arumbugal_assets/Home/home_what_we_do_card_img_8.png";
import home_section_6 from "../../arumbugal_assets/Home/home_section_6.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import card_logo_1 from "../../arumbugal_assets/activities/activities-card_logo-1.png";
import card_logo_2 from "../../arumbugal_assets/activities/activities-card_logo-2.png";
import card_logo_3 from "../../arumbugal_assets/activities/activities-card-logo-3.png";
import { motion } from "framer-motion";
import { fadeBigIn, fadeSmallIn } from "./../../variants";


function Activities() {

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
    <div id="activities">
          {/* Section 1 */}
          <section id="activities-section-1">
          <div className='container' id="activities-section-1-div-1">
              <motion.h6
 variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
 initial="hidden"
 whileInView={'show'}
 viewport={{ once: false, amount: 0.7 }}
              id="activities-section-1-div-1-h6-1">Activities</motion.h6>
              <motion.p
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
              id="activities-section-1-div-1-P-1">Home / <span id="activities-section-1-div-1-P-1-span">Activities</span></motion.p>
          </div>
      </section>

      {/* Section 2 */}
      
      <section id="activities-section-2">
        <div className="container" id="activities-section-2-1">
             <motion.div
              variants={matches ? fadeSmallIn("down") :fadeBigIn("down")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="activities-section-2-1-1">
               <h6 id="activities-section-2-1-1-h6-1">Activities</h6>
             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="activities-section-2-1-2">

             </motion.div>
             <motion.div
              variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
             id="activities-section-2-1-3">
                <p id="activities-section-2-1-3-p-1">Help today because tomorrow you may be the one whoneeds more helping!</p>
             </motion.div>
             <div id="activities-section-2-1-4">
                  <motion.div
  variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_1} alt={home_what_we_do_card_img_1} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Women’s Empowerment and Financial Independence</p>
                    <p id="activities-section-2-1-4-card-p-1">Arumbugal collaborates with over 500 women’s self-help groups and 50 joint liability groups,</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                    variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_3} alt={home_what_we_do_card_img_3} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Health Care Activities</p>
                    <p id="activities-section-2-1-4-card-p-1">Conducting awareness programmes about reproductive Health, HIV/AIDS Care & Support, Tubersulosis, Cancer, Menstrual hygiene and Occupational hazards of beedi rolling.</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                    variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_4} alt={home_what_we_do_card_img_4} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Life Insurance Awareness</p>
                    <p id="activities-section-2-1-4-card-p-1">In partnership with the Life Insurance Corporation of India, we empower women to appreciate the importance of life insurance with policies tailored to their needs.</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                    variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_5} alt={home_what_we_do_card_img_5} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Eco Conservation Activities</p>
                    <p id="activities-section-2-1-4-card-p-1">Supporting the Forest Department of Tamil Nadu to organize the target communities, into Community based Organizations like Village</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                    variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_8} alt={home_what_we_do_card_img_8} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Health Care Activities</p>
                    <p id="activities-section-2-1-4-card-p-1">We offer diverse skill development training programs to women in self-help groups, focusing on both technical and soft skills for entrepreneurial success.</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
                  <motion.div
                    variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                  id="activities-section-2-1-4-card">
                    <div id="activities-section-2-1-4-card-content-1">
                    <img id="activities-section-2-1-4-card-img" src={home_what_we_do_card_img_7} alt={home_what_we_do_card_img_7} />
                    </div>
                    <div id="activities-section-2-1-4-card-content-2">
                    <p id="activities-section-2-1-4-card-p">Life Insurance Awareness</p>
                    <p id="activities-section-2-1-4-card-p-1">In partnership with the Life Insurance Corporation of India, we empower women to appreciate the importance of life insurance with policies tailored to their needs.</p>
                    </div> 
                    <div id="activities-section-2-1-4-card-content-3">
                    <div id="activities-section-2-1-4-card-arrow">
                    <FaArrowRight id="activities-section-2-1-4-card-arrow-icon"  />
                    </div>
                    </div> 
                  </motion.div>
             </div>
        </div>
      </section>
      
      {/* Section 3 */}
      

      <section id="activities-section-3">
         <div className="container" id="activities-section-3-1">
          <motion.div
            variants={matches ? "none" :fadeBigIn("right")}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          id="activities-section-3-1-1">
            <img id="activities-section-3-1-1-img" src={home_section_6} alt={home_section_6} />
          </motion.div>
          <motion.div
             variants={matches ? fadeSmallIn("left") :fadeBigIn("left")}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
          id="activities-section-3-1-2">
            <h6 id="activities-section-3-1-2-h6-1">Awards</h6>
          <div id="activities-section-3-1-2-1">

            
              {
                Dropdata.map((item, i) => (
                   <div id="activities-section-3-1-2-1-flex">
                 <div id="activities-section-3-1-2-1-1" onClick={() => toggle(i)}>
               <p id="activities-section-3-1-2-1-1-p-1">{item.name}</p>
               <div id="activities-section-3-1-2-1-1-1">
               <MdKeyboardArrowRight id="activities-section-3-1-2-1-1-1-arrow"  />
               </div>
            </div> 

            <div id="activities-section-3-1-2-1-2">
            <p id={ selected === i ? "activities-section-3-1-2-1-2-p-1" : "activities-section-3-1-2-1-2-unclick" }>{item.description}</p>
            </div>
                  </div>
                ))
              }
          
            </div>  
            </motion.div>
         </div>
      </section>

   {/* Section 4 */}

      <section id="activities-section-4">
       <div className="container" id="activities-section-4-div-1">
         <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
         id="activities-section-4-div-1-1">
           <div id="activities-section-4-div-1-1-1">
              <img id="activities-section-4-div-1-1-1-img" src={card_logo_1} alt={card_logo_1} />
           </div>
           <div id="activities-section-4-div-1-1-2">
             <p id="activities-section-4-div-1-1-2-p-1">Training Center</p>
           </div>
           <div id="activities-section-4-div-1-1-3">
           <p id="activities-section-4-div-1-1-3-p-1">Arumbugal operates a well-equipped training center with essential infrastructure, a canteen accommodating 50 participants, and ample space for outdoor activities. We warmly invite interested organizations to utilize this facility for their needs and benefit.</p>
           </div>
         </motion.div>
         <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
         id="activities-section-4-div-1-1">
           <div id="activities-section-4-div-1-1-1">
              <img id="activities-section-4-div-1-1-1-img" src={card_logo_2} alt={card_logo_2} />
           </div>
           <div id="activities-section-4-div-1-1-2">
             <p id="activities-section-4-div-1-1-2-p-1">Gratitude</p>
           </div>
           <div id="activities-section-4-div-1-1-3">
           <p id="activities-section-4-div-1-1-3-p-1">We express our heartfelt gratitude to all our valued partners, supporters, self-help groups, joint liability group members, and all other well-wishers who contribute to our journey of success. Your support is instrumental in our achievements.</p>
           </div>
         </motion.div>
         <motion.div
               variants={matches ? fadeSmallIn("up") :fadeBigIn("up")}
               initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7 }}
         id="activities-section-4-div-1-1">
           <div id="activities-section-4-div-1-1-1">
              <img id="activities-section-4-div-1-1-1-img" src={card_logo_3} alt={card_logo_3} />
           </div>
           <div id="activities-section-4-div-1-1-2">
             <p id="activities-section-4-div-1-1-2-p-1">Support Us</p>
           </div>
           <div id="activities-section-4-div-1-1-3">
           <p id="activities-section-4-div-1-1-3-p-1">Arumbugal sincerely seeks your continued kindness, support, cooperation, well-wishes, and encouragement to achieve ongoing success and impact. Your support is valuable to all our endeavors. Donations and Volunteers are welcome.</p>
           </div>
         </motion.div>
       </div>
      </section>

    </div>
  )
}

export default Activities;
