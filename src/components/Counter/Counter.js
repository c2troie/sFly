// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import CountUp from 'react-countup';

// Import images
import laptop from '../../images/laptop.png';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
            <React.Fragment>
                    <section className="section bg-light">
                        <div className="container">
                            <Row className="align-items-center">
                                <Col md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="section-title mr-lg-5">
                                        <h4 className="title mb-4">Get Notified About Importent Email</h4>
                                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                        <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </Col>

                                <Col md={6} className="order-1 order-md-2">
                                    <img src={laptop} className="img-fluid" alt="" />
                                </Col>
                            </Row>
                        </div>

                       </section>
            </React.Fragment>
        );
    }
}

export default Counter;
