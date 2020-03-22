import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
 
// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class FooterLight extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
           
        <footer className="footer footer-bar">
            <div className="container text-center">
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="text-sm-left">
                            <p className="mb-0">©  {new Date().getFullYear()} Sfly. Develop by MKStudio.</p>
                        </div>
                    </Col>

                 </Row>
            </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterLight;
