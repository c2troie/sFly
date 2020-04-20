// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import team1 from "../../images/team/Khalid.png";
import team2 from "../../images/team/Jalel.png";
import team3 from "../../images/team/Luana.png";
import team4 from "../../images/team/4.jpg";

import roundWhite from "../../images/shapes/round-white.png";

// Partners

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Qui sommes nous ?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                   Depuis 2000, S-fly a transformer le paiement en ligne. Notre objectif : faciliter la vie des gens grace à 
                   des applis simple comme bonjour. Notre équipe d'experts a travaillé sans relache pour élaborer notre application
                   et donner aux utilisateurs ce qu'ils on toujours souhaité : la possibilité d'etre toujours mobiles.
                  </p>
                </div>
              </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col lg={3} md={6} className="mt-4 pt-2">
                <div className="team text-center rounded bg-white pt-3">
                  <div className="position-relative">
                    <img
                      src={team1}
                      className="img-fluid d-block rounded-pill mx-auto shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-facebook" title="Facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i
                            className="mdi mdi-instagram"
                            title="Instagram"
                          ></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-twitter" title="Twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded">
                          <i
                            className="mdi mdi-google-plus"
                            title="Twitter"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Khalid Ouazari
                      </Link>
                    </h5>
                    <small className="designation text-muted">Big BOSS</small>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} className="mt-4 pt-2">
                <div className="team text-center rounded bg-white pt-3">
                  <div className="position-relative">
                    <img
                      src={team2}
                      className="img-fluid d-block rounded-pill mx-auto shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-facebook" title="Facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i
                            className="mdi mdi-instagram"
                            title="Instagram"
                          ></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-twitter" title="Twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded">
                          <i
                            className="mdi mdi-google-plus"
                            title="Twitter"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Jalel Chine
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Esclave du Big Boss & PDinhio
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} className="mt-4 pt-2">
                <div className="team text-center rounded bg-white pt-3">
                  <div className="position-relative">
                    <img
                      src={team3}
                      className="img-fluid d-block rounded-pill mx-auto shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-facebook" title="Facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i
                            className="mdi mdi-instagram"
                            title="Instagram"
                          ></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded mr-1">
                          <i className="mdi mdi-twitter" title="Twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded">
                          <i
                            className="mdi mdi-google-plus"
                            title="Twitter"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Luana Damasceno
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Esclave du Big Boss & PDinhia
                    </small>
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
        </section>
      </React.Fragment>
    );
  }
}

export default Speakers;
