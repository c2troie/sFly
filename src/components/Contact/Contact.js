import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';
//import contact from '../images/contact.png';
import contact from './../../images/contact.png';

const Contact = () => {

    const handleSubmit = (event)=> {
        event.preventDefault();
        this.setState({Contactvisible : true});
    } 

    const [contactvisible, setContactvisible] = useState(false);

    return(
        <section className="section bg-light">
            
      <div className="container mt-100 mt-60">
      <Row className="align-items-center">
          <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
              <div className="pt-5 pb-5 p-4 bg-light shadow rounded">
                  <h4>Get In Touch !</h4>
                  <div className="custom-form mt-4">
                      <div id="message"></div>
                      <Alert color="info" isOpen={contactvisible} toggle={()=>{ setContactvisible( !contactvisible) }}>
                          Contact details send successfully.
                       </Alert>
                      <form method="post" onSubmit={handleSubmit} name="contact-form" id="contact-form">
                          <Row>
                              <Col md={6}>
                                  <div className="form-group position-relative">
                                      <label>Your Name <span className="text-danger">*</span></label>
                                      <i className="mdi mdi-account ml-3 icons"></i>
                                      <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required />
                                  </div>
                              </Col>
                              <Col md={6}>
                                  <div className="form-group position-relative">
                                      <label>Your Email <span className="text-danger">*</span></label>
                                      <i className="mdi mdi-email ml-3 icons"></i>
                                      <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required />
                                  </div>
                              </Col>
                              <Col md={12}>
                                  <div className="form-group position-relative">
                                      <label>Subject</label>
                                      <i className="mdi mdi-book ml-3 icons"></i>
                                      <input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :" required />
                                  </div>
                              </Col>
                              <Col md={12}>
                                  <div className="form-group position-relative">
                                      <label>Comments</label>
                                      <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                      <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                  </div>
                              </Col>
                          </Row>
                          <Row>
                              <Col sm={12} className="text-center">
                                  <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message" />
                                  <div id="simple-msg"></div>
                              </Col>
                          </Row>
                      </form>
                  </div>
              </div>
          </Col>

          <Col lg={7} md={6} className="order-1 order-md-2">
              <img src={contact} className="img-fluid" alt="Landrick" />
          </Col>
      </Row>
  </div>

        </section> 
    )
}

export default Contact