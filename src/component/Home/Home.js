import React, {useState} from "react";
import "./Home.css";
import bg_1 from "../../arumbugal_assets/Home/home_bg_1.jpeg";
import bg_2 from "../../arumbugal_assets/Home/home_bg_2.png";
import bg_3 from "../../arumbugal_assets/Home/home_bg_3.png";
import home_about_logo_1 from "../../arumbugal_assets/Home/home_about_logo_1.png";
import home_about_logo_2 from "../../arumbugal_assets/Home/home_about_logo2.png";
import home_about_logo_3 from "../../arumbugal_assets/Home/home_about_logo_3.png";
import home_about_logo_4 from "../../arumbugal_assets/Home/home_about_logo_4.png";
import home_what_we_do_card_img_1 from "../../arumbugal_assets/Home/home_what_we_do_card_img_1.png";
import home_what_we_do_card_img_4 from "../../arumbugal_assets/Home/home_what_we_do_card_img_4.png";
import home_what_we_do_card_img_5 from "../../arumbugal_assets/Home/home_what_we_do_card_img_5.png";
import home_what_we_do_card_img_6 from "../../arumbugal_assets/Home/home_what_we_do_card_img_6.png";
import home_what_we_do_card_img_7 from "../../arumbugal_assets/Home/home_what_we_do_card_img_7.png";
import home_what_we_do_card_img_8 from "../../arumbugal_assets/Home/home_what_we_do_card_img_8.png";
import home_section_5_img_1 from "../../arumbugal_assets/Home/home_section_5_img_1.png";
import home_section_5_img_2 from "../../arumbugal_assets/Home/home_section_5_img_2.png";
import home_section_6 from "../../arumbugal_assets/Home/home_section_6.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };



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
                <div id="carousel-content-1">
                  <h6 id="carousel-content-1-h6-1">
                    Well-being Redefined: Holistic Health Solutions
                  </h6>
                  <p id="carousel-content-1-p-1">
                    Wellness for All - Learn about our healthdevelopment
                    initiatives
                  </p>
                  <button id="carousel-button">Donate</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}

        <section id="home-section-2">
          <div className="container" id="home-section-2-1">
            <div id="home-section-2-1-1">
              <div id="home-section-2-1-1-1">
                <div id="home-section-2-1-1-1-line"></div>
                <div id="home-section-2-1-1-1-2">
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
            </div>
            <div id="home-section-2-1-2">
              <div id="home-section-2-1-2-1">
                <div id="home-section-2-1-2-1-1">
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
                </div>
                <div id="home-section-2-1-2-1-2">
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
                </div>
              </div>
              <div id="home-section-2-1-2-2">
                <div id="home-section-2-1-2-2-1">
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
                </div>
                <div id="home-section-2-1-2-2-2">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 */}

        <section id="home-section-3">
          <div className="container" id="home-section-3-1">
            <h6 id="home-section-3-1-h6-1">Help Other People</h6>
            <p id="home-section-3-1-p-1">
              Your contribution empowers us to save lives and enhance well-being
              through groundbreaking research and education.
            </p>
            <button id="home-section-3-1-button">Donate</button>
          </div>
        </section>

        {/* Section 4 */}

        <section id="home-section-4">
          <div className="container" id="home-section-4-1">
            <div id="home-section-4-1-1">
              <h6 id="home-section-4-1-1-h6-1">What We Do</h6>
            </div>
            <div id="home-section-4-1-2"></div>
            <div id="home-section-4-1-3">
              <p id="home-section-4-1-3-p-1">
                Help today because tomorrow you may be the one who needs more
                helping!
              </p>
            </div>

            <div id="home-section-4-1-4">
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_1}
                  alt={home_what_we_do_card_img_1}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Women <span id="home-section-4-1-4-1-p-2">empowerment</span>
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_4}
                  alt={home_what_we_do_card_img_4}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Health <span id="home-section-4-1-4-1-p-2">care</span>{" "}
                  activity
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_4}
                  alt={home_what_we_do_card_img_4}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Skill <span id="home-section-4-1-4-1-p-2">development</span>
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_4}
                  alt={home_what_we_do_card_img_4}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Women <span id="home-section-4-1-4-1-p-2">empowerment</span>
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_5}
                  alt={home_what_we_do_card_img_5}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eastern <span id="home-section-4-1-4-1-p-2">Ghats</span>
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_6}
                  alt={home_what_we_do_card_img_6}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Sugam <span id="home-section-4-1-4-1-p-2">Canteen</span>
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_7}
                  alt={home_what_we_do_card_img_7}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eco <span id="home-section-4-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </div>
              <div id="home-section-4-1-4-1">
                <img
                  id="home-section-4-1-4-1-img"
                  src={home_what_we_do_card_img_8}
                  alt={home_what_we_do_card_img_8}
                />
                <p id="home-section-4-1-4-1-p-1">
                  Eco <span id="home-section-4-1-4-1-p-2">conservation</span>{" "}
                  activity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* home Section 5 */}

        <section id="home-section-5">
          <div className="container" id="home-section-5-1">
              <div id="home-section-5-1">
              <div id="home-section-5-1-1">
                <div id="home-section-5-1-1-1">
                    <h6 id="home-section-5-1-1-1-h6-1">Our vision</h6>
                    <p id="home-section-5-1-1-1-p-1">To create an inclusive and empowered society rooted in social justice and sustainable environmental practices, achieved through a profound commitment to nature.</p>
                    <button id="home-section-5-1-1-1-button">Read More</button>
                </div>
                <div id="home-section-5-1-1-2">
                  <img id="home-section-5-1-1-2-img" src={home_section_5_img_1} alt={home_section_5_img_1} />
                </div>
              </div>

              <div id="home-section-5-1-2">
              <div id="home-section-5-1-2-2">
                  <img id="home-section-5-1-2-2-img" src={home_section_5_img_2} alt={home_section_5_img_2} />
                </div>
                <div id="home-section-5-1-2-1">
                    <h6 id="home-section-5-1-2-1-h6-1">Our Mission</h6>
                    <p id="home-section-5-1-2-1-p-1">To create an inclusive and empowered society rooted in social justice and sustainable environmental practices, achieved through a profound commitment to nature.</p>
                    <button id="home-section-5-1-2-1-button">Read More</button>
                </div>
              </div>
              </div>
          </div>
        </section>

      {/* Home Section 6 */}

      <section id="home-section-6">
         <div className="container" id="home-section-6-1">
          <div id="home-section-6-1-1">
            <img id="home-section-6-1-1-img" src={home_section_6} alt={home_section_6} />
          </div>
          <div id="home-section-6-1-2">
            <h6 id="home-section-6-1-2-h6-1">Awards</h6>
          <div id="home-section-6-1-2-1">
            <div id="home-section-6-1-2-1-1">
               <p id="home-section-6-1-2-1-1-p-1">World Bank IDM Award (2004)</p>
               <div id="home-section-6-1-2-1-1-1">
               <MdKeyboardArrowRight id="home-section-6-1-2-1-1-1-arrow"  />
               </div>
            </div>  
            <div id="home-section-6-1-2-1-2">
            <p id="home-section-6-1-2-1-2-p-1">Lorem Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem </p>
            </div>  
            </div>  
            </div>
         </div>
      </section>

      </div>
    </div>
  );
}

export default Home;
