// React Basic and Bootstrap
import React, { Component } from 'react';
import {  Col } from 'reactstrap';

// Import Images 
import client1 from '../../images/sFly/Khalid.png';
import client2 from '../../images/sFly/Luana.png';
import client3 from '../../images/sFly/Jalel.png';


class Partner extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                            <Col lg={2} md={2} className="col-6 text-center">
                                <img src={client1} height="70" alt="" />
                            </Col>

                            <Col lg={2} md={2}  className="col-6 text-center">
                                <img src={client2} height="70" alt="" />
                            </Col>

                            <Col lg={2} md={2}  className="col-6 text-center mt-4 mt-sm-0">
                                <img src={client3} height="70" alt="" />
                            </Col>

                            
                          
                   </React.Fragment>
        );
    }
}

export default Partner;
