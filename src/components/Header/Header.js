import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logos/logo.png';
import headerBodyImage from '../images/logos/Frame.png';
import brandOne from '../images/logos/slack.png';
import brandTwo from '../images/logos/google.png';
import brandThree from '../images/logos/uber.png';
import brandFour from '../images/logos/netflix.png';
import brandFive from '../images/logos/airbnb.png';

import './Header.css';


const Header = () => {
    return (  
        <main>
            <div className="background-style pt-3 divider">
                <div className="header__bg"></div> 
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <Navbar  variant="light">                                
                                <Navbar.Brand> <img src={logo} alt="" style={{height: '50px'}}/> </Navbar.Brand>                                                                        
                                <Nav className=" d-flex justify-content-end " style={{marginLeft: '340px'}}>
                                    <Nav.Link className="pr-4"><Link to="/home" className="text-dark"> Home </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/destination" className="text-dark"> Our Portfolio </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/events" className="text-dark"> Our Team </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/blog" className="text-dark"> Blog </Link></Nav.Link>                                
                                    <Nav.Link><button className="btn btn-dark px-4"> <Link to="/login" className="text-white">Login </Link></button> </Nav.Link>
                                </Nav>                        
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="col-md-4 pl-5 pt-5">
                            <h1>Let’s Grow Your Brand To The Next Level</h1>
                            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button className="btn btn-dark px-5"> Hire us</button>
                        </Col>
                        <Col className="col-md-8 pl-5">
                            <img src={headerBodyImage} style={{height: '350px'}} alt=""/>                            
                        </Col>
                    </Row>            
                </Container>                
            </div>
            <Container className="mt-5 brand-style">
                    <Row className="d-flex justify-content-center">
                        <Col className="col-md-10">
                            <div style={{display: 'flex'}} className="brand-image-style">
                                <img src={brandOne} class="img-fluid" alt="" className="pr-5 mr-5" />     
                                <img src={brandTwo} class="img-fluid" alt="" className="pr-5 mr-5" />
                                <img src={brandThree} class="img-fluid" alt=""className="pr-5 mr-5" />  
                                <img src={brandFour} class="img-fluid" alt="" className="pr-5 mr-5" />  
                                <img src={brandFive} class="img-fluid" alt="" className="pr-5" />                               
                            </div>
                        </Col>
                    </Row>
            </Container>  
        </main>              
    );
};

export default Header;