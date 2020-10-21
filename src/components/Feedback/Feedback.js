import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import customerOne from '../images/customer-1.png';
import customerTwo from '../images/customer-2.png';
import customerThree from '../images/customer-3.png';

const Feedback = () => {
    return (
        <div  style={{paddingBottom: '100px'}}>        
            <Container style={{marginTop: '40px'}} >
                <Row>
                    <Col className="col-md-12 mt-3 pt-5 pb-5" >
                        <h2 className="text-center font-weight-bold"> Clients' <span className="text-success">Feedback</span> </h2>
                    </Col>                                      
                </Row>
                <Row className="mt-5" style={{position: 'relative'}}>
                    <Col className="col-md-4 col-sm-6" style={{position: 'relative', left: '70px'}}>
                        <div class="card" style={{width: '18rem'}}>
                            <Row style={{position: 'relative'}}>
                                <Col className="col-md-6 col-sm-6 pt-3" style={{position: 'relative', left: '20px', top: '10px'}}>
                                    <img src={customerOne} style={{height: '50px', width: '50px'}} class="card-img-top img-fluid " alt="..." />
                                </Col>
                                <Col className="col-md-6 col-sm-6" style={{position: 'relative', left: '-70px', top: '30px', lineHeight: '50%'}}>
                                    <h6 className="font-weight-bold">Nash Patrik</h6>
                                    <small>CEO, Manpol</small>
                                </Col>
                            </Row>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus facere ut!</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-sm-6">
                        <div class="card" style={{width: '18rem'}}>
                            <Row style={{position: 'relative'}}>
                                <Col className="col-md-6 col-sm-6 pt-3" style={{position: 'relative', left: '20px', top: '10px'}}>
                                    <img src={customerTwo} style={{height: '50px', width: '50px'}} class="card-img-top img-fluid " alt="..." />
                                </Col>
                                <Col className="col-md-6 col-sm-6" style={{position: 'relative', left: '-70px', top: '30px', lineHeight: '50%'}}>
                                    <h6 className="font-weight-bold">Nash Patrik</h6>
                                    <small>CEO, Manpol</small>
                                </Col>
                            </Row>
                            <div class="card-body">
                                <p class="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit mollitia modi  </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-sm-6" style={{position: 'relative', left: '-70px'}}>
                        <div class="card" style={{width: '18rem'}}>
                            <Row style={{position: 'relative'}}>
                                <Col className="col-md-6 col-sm-6 pt-3" style={{position: 'relative', left: '20px', top: '10px'}}>
                                    <img src={customerThree} style={{height: '50px', width: '50px'}} class="card-img-top img-fluid " alt="..." />
                                </Col>
                                <Col className="col-md-6 col-sm-6" style={{position: 'relative', left: '-70px', top: '30px', lineHeight: '50%'}}>
                                    <h6 className="font-weight-bold">Nash Patrik</h6>
                                    <small>CEO, Manpol</small>
                                </Col>
                            </Row>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia autem ipsam!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
             
        </div>
    );
};

export default Feedback;