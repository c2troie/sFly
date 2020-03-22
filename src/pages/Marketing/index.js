// React Basic and Bootstrap
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Typist from "react-typist";
import ModalVideo from "react-modal-video";

// Import images
import marketingShape from "../../images/marketing/marketing-shape.png";
import marketing from "../../images/marketing/marketing.png";

// import generic component
import Feature from "./Feature";
import Faqs from "./Faqs";
import Partners from "../../components/Shared/Partner";
import Speakers from "../Event/Speakers";
import HowItWorks from '../../components/Shared/HowItWorks';

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

  return (
    <React.Fragment>
      {/* <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div> */}

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
                  <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h2 className="font-weight-bold mb-3 d-flex">
                      Improve Your Flight For &nbsp;
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

      {/* Faqs */}
      <Faqs />

{/* Partner */}
      <Speakers/>


      
      <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Sign up for our Newsletter</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Tenez vous informez & <span className="text-primary font-weight-bold">SFLY</span> vous enverra les Newsletter</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10}>
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required aria-describedby="newssubscribebtn" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary submitBnt" type="button" id="newssubscribebtn">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                
    </React.Fragment>
  );
};

export default Index;
