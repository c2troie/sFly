// React Basic and Bootstrap
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { Col, Row, Alert } from "reactstrap";

// import generic component
import Faqs from "../../components/Faq/Faqs";
import HowItWorks from "../../components/HowItWork/HowItWorks";
import Newsletter from "../../components/Newsletter/Newsletter";
import Feature from "../../components/IconFeature/Feature";
import Speakers from "../../components/Speaker/Speakers";
import Contact from "../../components/Contact/Contact";

// Import images
import calendar from "../../images/icon/calendar.svg";
import sandClock from "../../images/icon/sand-clock.svg";
import user from "../../images/icon/user.svg";
import marketingShape from "../../images/marketing/marketing-shape.png";
import marketing from "../../images/marketing/marketing.png";
import curveLight from "../../images/shapes/curve-light.png";
//Style Media Queries
import "./../style.css";
import enterprise from "../../images/home.png";
import roundWhite from "../../images/shapes/round-white.png";
import bg02 from "../../images/single/bg02.jpg";
import contact from "../../images/contact.png";

const Index = () => {
  const [open, isOpen] = useState(false);
  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  const openModal = () => {
    isOpen(true);
  };

  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation);
    };
  }, []);

  const featureArray = [
    {
      id: 1,
      title: "Facile d'utilisation",
      description:
        "L'application très facile d'utilisation avec un design épurée et ergonomique. ",
      imgUrl: user,
    },
    {
      id: 2,
      title: "Rapport Journalier",
      description:
        "Chaque commandant de bors aura un récap de son prochain vol avec le trafic météo selon sa destination.",
      imgUrl: calendar,
    },
    {
      id: 3,
      title: "Real Time Zone",
      description:
        "Un systeme de notification pour informer le pilote ou les perssone a prevenir en cas d'incident.",
      imgUrl: sandClock,
    },
  ];

  return (
    <React.Fragment>
      {/* Hero Start */}
      <section
        className="bg-half-260"
        //style={{ background: `url(${enterprise})` }}
        style={{ background: `no-repeat center/100% 115% url(${enterprise})` }}
        //no-repeat center/100% 115% url(/static/media/home.2bf9bed1.png);
      >
        <div className="bg-overlay bg-overlay-gradient"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <Row>
                <Col>
                  <div className="title-heading text-center mt-4">
                    <h1 className="display-4 text-white mb-3">
                      Changer votre maniere de travailler
                    </h1>
                    <p className="para-desc mx-auto text-white-50">
                      Clicker sur la vidéo pour en savoir +.
                    </p>
                    <div className="mt-4 pt-2">
                      <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                          <Col md={12}>
                            <div className="position-relative">
                              <div className="play-icon">
                                <Link
                                  onClick={() => isOpen(true)}
                                  to="#"
                                  className="video-play-icon watch text-dark"
                                >
                                  <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>

                  <div className="buy-button">
                    <div className="watch-video ">
                      <ModalVideo
                        channel="youtube"
                        isOpen={open}
                        videoId="REubL2l_aR4"
                        onClose={() => isOpen(false)}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="container-fluid">
              <Row>
                <div className="home-shape-bottom">
                  <img
                    src={roundWhite}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Row>
            </div>
          </div>
        </div>
      </section>

      {/* HowItWorks */}
      <HowItWorks />


{/* Partner */}
<Speakers />


     
      {/* Faqs */}
      <Faqs />

      {/* Feature Delimitation */}
      <section className="section">
        

        <div className="container-fluid">
          <Row>
            <div className="home-shape-bottom">
              <img
                src={curveLight}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Row>
        </div>
      </section>

      

      {/* Contact */}
      <Contact />
    </React.Fragment>
  );
};

export default Index;
