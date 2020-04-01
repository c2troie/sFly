// React Basic and Bootstrap
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { Col, Row } from "reactstrap";
// import generic component
import Faqs from "../components/Faq/Faqs";
import HowItWorks from "../components/HowItWork/HowItWorks";
import Newsletter from "../components/Newsletter/Newsletter";
import Feature from "../components/IconFeature/Feature";
import Speakers from "../components/Speaker/Speakers";

// Import images
import calendar from "../images/icon/calendar.svg";
import sandClock from "../images/icon/sand-clock.svg";
import user from "../images/icon/user.svg";
import marketingShape from "../images/marketing/marketing-shape.png";
import marketing from "../images/marketing/marketing.png";
import curveLight from "../images/shapes/curve-light.png";
//Style Media Queries
import "./style.css";




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
      imgUrl: user
    },
    {
      id: 2,
      title: "Rapport Journalier",
      description:
        "Chaque commandant de bors aura un récap de son prochain vol avec le trafic météo selon sa destination.",
      imgUrl: calendar
    },
    {
      id: 3,
      title: "Real Time Zone",
      description:
        "Un systeme de notification pour informer le pilote ou les perssone a prevenir en cas d'incident.",
      imgUrl: sandClock
    }
  ];

  return (
    <React.Fragment>
      {/* Hero Start */}
      <section
        className="bg-marketing"
        style={{ background: `url(${marketingShape})` }}
        id="home"
      >
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <Row className="justify-content-center mt-5">
                <Col lg={7} md={7} className="text-center">
                  <img
                    src={marketing}
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                    alt=""
                  />
                  <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                    <h2 className="font-weight-bold mb-3 d-flex adjustText">
                      <span> Improve Your Flight For &nbsp;</span>

                      <Typist>
                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Serinity
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Security
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Serinity
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Security
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Serinity
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Security
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Serinity
                        </span>
                        <Typist.Backspace count={15} delay={400} />

                        <span
                          className="element text-custom"
                          style={{ color: "#4466d8" }}
                        >
                          Security
                        </span>
                      </Typist>
                    </h2>

                    <p className="para-desc text-muted">
                      IL FAUT TROUVER UN TRUC A ECRIRE ICI
                    </p>
                    <div className="watch-video mt-4 pt-2">
                      <Link
                        onClick={openModal}
                        to="#"
                        className="video-play-icon watch text-dark"
                      >
                        <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i>{" "}
                        WATCH VIDEO
                      </Link>
                      <ModalVideo
                        channel="youtube"
                        isOpen={open}
                        videoId="L61p2uyiMSo"
                        onClose={() => isOpen(false)}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      {/* HowItWorks */}
      <HowItWorks />

      {/* Impact Business */}
      <div className="container mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-title">
              <h4 className="title mb-4">See everything about your Flight</h4>
              <p className="text-muted para-desc">
                Automatiser les process chronophage grace à{" "}
                <span className="text-primary font-weight-bold">SFLY</span>.
              </p>
              <ul className="list-unstyled feature-list text-muted">
                <li>
                  <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                  Gagner en Sécurity
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                  Gagner en Temps
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                  Gagner en Argents
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <div className="row ml-lg-5" id="counter">
              <div className="col-md-6 col-12">
                <Row>
                  <Col className="mt-4 pt-2 col-12">
                    <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                      <h2 className="mb-0">
                        <span className="counter-value" data-count="97">
                          97
                        </span>
                        %
                      </h2>
                      <h5 className="counter-head">Temps</h5>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2 col-12">
                    <div className="counter-box position-relative counter-border bg-primary shadow rounded p-4 pt-5 pb-5 text-center">
                      <h2 className="text-light mb-0">
                        <span className="counter-value" data-count="15">
                          1 000 000
                        </span>
                        $
                      </h2>
                      <h5 className="counter-head text-light">Money</h5>
                    </div>
                  </Col>
                </Row>
              </div>

              <Col md={6} className="col-12">
                <Row className="pt-lg-5 mt-lg-4">
                  <Col className="mt-4 pt-2 col-12">
                    <div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
                      <h2 className="text-light mb-0">
                        <span className="counter-value" data-count="2">
                          87
                        </span>
                        %
                      </h2>
                      <h5 className="counter-head text-light">Security</h5>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>

      {/* Faqs */}
      <Faqs />

      {/* Feature Delimitation */}
      <section className="section">
        <div className="container">
          <Feature featureArray={featureArray} isCenter={false} />
        </div>

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

      {/* Partner */}
      <Speakers />

      {/* Newsletter */}
      <Newsletter />
    </React.Fragment>
  );
};

export default Index;
