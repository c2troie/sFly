// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Images 
import seoSVG from '../../images/illustrator/SEO_SVG.svg';
import mobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';

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

             </section>
            </React.Fragment>
        );
    }
}

export default HowItWorks;
