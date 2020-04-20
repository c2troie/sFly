// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";

// Import Images
import seoSVG from "../../images/illustrator/SEO_SVG.svg";
import mobileNotificationSVG from "../../images/illustrator/Mobile_notification_SVG.svg";
import Asset190 from "../../images/illustrator/Asset190.svg";
import Asset189 from "../../images/illustrator/Asset189.svg";
import Asset186 from "../../images/illustrator/Asset186.svg";
import Asset187 from "../../images/illustrator/Asset187.svg";

import CountUp from "react-countup";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light border-bottom">
          <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-60">
                  <h4 className="main-title mb-4">Nos Services</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Simplifier vous la vie en quelques clics !
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="container  mt-60">
            <Row id="counter" style={{ justifyContent: "center" }}>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="col-12 col-sm-4 col-md-4 col-lg-4"
              >
                <div className="counter-box text-center">
                  <img src={Asset190} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="10">
                      {" "}
                      Intuitive
                    </span>
                  </h2>
                  <p
                    className="counter-head text-muted"
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      wordBreak: "break-all",
                      textAlign: "justify",
                    }}
                  >
                    Une solution innovante qui répond à vos besoins au
                    quotidien, ou que vous soyer. Notre interface a été
                    spécialement concue pour vous. et vous permet de bénéficier
                    d'une grande diversité d'options selon vos préférences.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="col-12 col-sm-4 col-md-4 col-lg-4"
              >
                <div className="counter-box text-center">
                  <img src={Asset189} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="10">
                      {" "}
                      Intuitive
                    </span>
                  </h2>
                  <p
                    className="counter-head text-muted"
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      wordBreak: "break-all",
                      textAlign: "justify",
                    }}
                  >
                    Une solution innovante qui répond à vos besoins au
                    quotidien, ou que vous soyer. Notre interface a été
                    spécialement concue pour vous. et vous permet de bénéficier
                    d'une grande diversité d'options selon vos préférences.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="col-12 col-sm-4 col-md-4 col-lg-4"
              >
                <div className="counter-box text-center">
                  <img src={Asset187} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="10">
                      {" "}
                      Intuitive
                    </span>
                  </h2>
                  <p
                    className="counter-head text-muted"
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      wordBreak: "break-all",
                      textAlign: "justify",
                    }}
                  >
                    Une solution innovante qui répond à vos besoins au
                    quotidien, ou que vous soyer. Notre interface a été
                    spécialement concue pour vous. et vous permet de bénéficier
                    d'une grande diversité d'options selon vos préférences.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
