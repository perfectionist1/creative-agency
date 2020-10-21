import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sliderOne from '../images/carousel-1.png';
import sliderTwo from '../images/carousel-2.png';
import sliderThree from '../images/carousel-3.png';
import './Portfolios.css';

const Portfolios = () => {
    return (
        <div className="bg-dark" style={{paddingBottom: '100px'}}>        
            <Container style={{marginTop: '60px'}} >
                <Row>
                    <Col className="col-md-12 mt-3 pt-5 pb-5" >
                        <h2 className="text-center font-weight-bold text-white"> Here are some of our <span className="text-success">works</span> </h2>
                    </Col>                                      
                </Row>
            </Container>
            <Row style={{position: 'relative'}}>
                <Col className="col-md-4"  style={{position: 'relative', left: '90px'}}>
                    <img class="img-fluid" src={sliderOne} alt="" style={{height: '300px', width: '460px'}}/>
                </Col>
                <Col className="col-md-4" style={{position: 'relative', left: '120px'}}>
                    <img src={sliderTwo} class="img-fluid" alt="" style={{height: '300px', width: '460px'}} />
                </Col>
                <Col className="col-md-4" style={{position: 'relative', left: '150px'}}>
                    <img src={sliderThree} class="img-fluid" alt="" style={{height: '300px', width: '300px'}} />
                </Col>
            </Row> 
            <Row>
                <Col className="col-md-12 d-flex justify-content-center mt-5">
                    <div className="circleTop">
                        <div className="circle "> </div>
                        <div className="circle bg-secondary"> </div>
                        <div className="circle bg-secondary"> </div>
                    </div>
                </Col>
            </Row>          
        </div>
    );
};

export default Portfolios;