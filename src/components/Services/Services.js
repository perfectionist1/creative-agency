import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mobileDesignLogo from '../images/icons/service1.png';
import graphicDesignLogo from '../images/icons/service2.png';
import webDesignLogo from '../images/icons/service3.png';

const Services = () => {
    return (
        <div>
            <Container style={{marginTop: '100px'}}>
                <Row>
                    <Col className="col-md-12 mt-5" >
                        <h2 className="text-center font-weight-bold"> Provide awesome  <span className="text-success">services</span> </h2>
                    </Col>                                      
                </Row>
                <Row>
                    <Col className="col-md-4 col-sm-6 mt-5">
                        <div class="card" style={{width: '18rem'}}>
                            <div className="d-flex justify-content-center mt-3"><img src={mobileDesignLogo} style={{height: '50px', width: '50px',}} class="card-img-top" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Web & Mobile design</h5>
                                <small class="card-text text-muted align-middle">Some quick example text to build on the card title and make up the bulk of the card's content.</small>                                
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-sm-6 mt-5">
                        <div class="card" style={{width: '18rem'}}>
                            <div className="d-flex justify-content-center mt-3"><img src={graphicDesignLogo} style={{height: '50px', width: '50px',}} class="card-img-top" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Web & Mobile design</h5>
                                <small class="card-text text-muted align-middle">Some quick example text to build on the card title and make up the bulk of the card's content.</small>                                
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-sm-6 mt-5">
                        <div class="card" style={{width: '18rem'}}>
                            <div className="d-flex justify-content-center mt-3"><img src={webDesignLogo} style={{height: '50px', width: '50px',}} class="card-img-top" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title text-center">Web & Mobile design</h5>
                                <small class="card-text text-muted align-middle">Some quick example text to build on the card title and make up the bulk of the card's content.</small>                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;