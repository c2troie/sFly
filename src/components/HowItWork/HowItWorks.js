// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Images 
import seoSVG from '../../images/illustrator/SEO_SVG.svg';
import mobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';
import Asset190 from '../../images/illustrator/Asset190.svg';
import Asset189 from '../../images/illustrator/Asset189.svg';
import Asset186 from '../../images/illustrator/Asset186.svg';
import Asset187 from '../../images/illustrator/Asset187.svg';

import CountUp from 'react-countup';

class HowItWorks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    render() {
        return (
            <React.Fragment>
             <section className="section bg-light border-bottom">
            <div className="container">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <div className="section-title mb-60">
                            <h4 className="main-title mb-4">How It Work ?</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">SFLY</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <img src={seoSVG} alt="" />
                    </Col>

                    <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ml-lg-5">
                            <h4 className="title mb-4">Changer la facon d'embarquer</h4>
                            <p className="text-muted">You can combine all the process into a single one, you can take <span className="text-primary font-weight-bold">SFLY</span> Application pour automaqtiser.</p>
                            <ul className="list-unstyled feature-list text-muted">
                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Sérinité</li>
                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Sécurié</li>
                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Sssssss</li>
                            </ul>
                            
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container mt-100 mt-60">
                       
                        <Row id="counter">
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset190} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="10"> <CountUp start={0} end={10} duration={8} /></span>%</h2>
                                    <h5 className="counter-head text-muted">Securité en +</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset189} height="70" alt="" />
        <h2 className="mb-0 mt-3"><span className="counter-value" data-count="20"> <CountUp start={0} end={9} duration={8} /></span>{" "}Min</h2>
                                    <h5 className="counter-head text-muted">Du temps en +</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset186} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="48002"> <CountUp start={0} end={5000} duration={8} /></span>$</h2>
                                    <h5 className="counter-head text-muted">Par vols</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset187} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="11"><CountUp start={0} end={11} duration={8} /></span>%</h2>
                                    <h5 className="counter-head text-muted">Profit</h5>
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
