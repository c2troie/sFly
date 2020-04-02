// React Basic and Bootstrap
import React, { Component, useEffect, useState } from "react";
import { Row, Col, Alert } from "reactstrap";

import { ApiRequest } from "../../controllers/ApiRequest";

const Newsletter = () => {
  const [contactvisible, setContactvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [colorAlert, setColorAlert] = useState("");

  
  useEffect(() => {}, []);

  const handleSubmit = async event => {
    event.preventDefault();
let sendEmail = await ApiRequest.post('send-email',email)
    
//console.log('sendEmail',sendEmail)
   //await ApiRequest.post('send-email',email);
    if(sendEmail.status === 200){
      setColorAlert("success")
      setMessageAlert(sendEmail.message)
      setContactvisible(true)
      setTimeout(()=>{setContactvisible(false)},2000)
      console.log('IF',sendEmail)
    }else if(sendEmail.status === 400){
      setColorAlert("danger")
      setMessageAlert(sendEmail.message)
      setContactvisible(true)
      setTimeout(()=>{setContactvisible(false)},4000)
    }
    else if(sendEmail.status === 500){
      setColorAlert("danger")
      setMessageAlert(sendEmail.message)
      setContactvisible(true)
      setTimeout(()=>{setContactvisible(false)},2000)
    }
    else{
      setColorAlert("danger")
      setMessageAlert("Erreur !")
      setContactvisible(true)
      setTimeout(()=>{setContactvisible(false)},2000)
    }

   
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
              color={colorAlert}
              isOpen={contactvisible}
              toggle={() => setContactvisible(!contactvisible)}
              fade={true}
            >
              {messageAlert}
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
