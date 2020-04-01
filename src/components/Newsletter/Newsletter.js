// React Basic and Bootstrap
import React, { Component, useEffect, useState } from "react";
import { Row, Col, Alert } from "reactstrap";

import { ApiRequest } from "../../controllers/ApiRequest";

const Newsletter = () => {
  const [contactvisible, setContactvisible] = useState(false);
  const [email, setEmail] = useState("");

  
  useEffect(() => {}, []);

  const handleSubmit = async event => {
    event.preventDefault();

    
    await ApiRequest.post('send-email',email);

   
  };
  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <React.Fragment>
      {/* Alert */}

      {/* Newsletter */}
      <div className="container mt-100 mt-60">
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">Sign up for our Newsletter</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Tenez vous informez &{" "}
                <span className="text-primary font-weight-bold">SFLY</span> vous
                enverra les Newsletter
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4 pt-2">
          <Col lg={7} md={10}>
            <Alert
              color="success"
              isOpen={contactvisible}
              toggle={() => setContactvisible(!contactvisible)}
              fade={true}
            >
              Merci !
            </Alert>
            <form onSubmit={eve => handleSubmit(eve)}>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    name="email"
                    id="emailsubscribe"
                    type="email"
                    className="form-control"
                    placeholder="Your email : "
                    required
                    onChange={handleChange}
                    aria-describedby="newssubscribebtn"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary submitBnt"
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      value="Subscribe"
                    >
                      Subscribe
                    </button>
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

export default Newsletter;
