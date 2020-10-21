import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-3">
                        <img src={logo} className="img-fluid" style={{height: '50px'}} alt=""/>
                    </Col>
                    <Col className="col-md-5 ">
                        <h5 className="text-left pl-5">Order</h5>
                    </Col>
                    <Col className="col-md-4">
                        <h5 className="text-right">User</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-3 mt-5">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><FontAwesomeIcon icon={faShoppingCart} /> <span className="pl-2">Order</span> </li>
                            <li class="list-group-item"><Link to="/serviceList">Service list</Link></li>
                            <li class="list-group-item"><Link to="/review">Review</Link></li>                            
                        </ul>
                    </Col>
                    <Col className="col-md-9" style={{backgroundColor: '#E5E5E5'}}>
                        <Row>
                            <Col className="col-md-7">
                                <form action="" className="pt-5 pb-5">
                                    <p><input type="text" name="" placeholder="Your name / company's name"/></p>
                                    <p><input type="email" name="" placeholder="Your email address"/></p>
                                    <p><input type="text" name="" placeholder="Graphic Design"/></p>
                                    <p><textarea name="" id="" cols="20" rows="4" placeholder="Project Details"></textarea></p>
                                    <p><input type="file" /></p>
                                    <button className="btn btn-dark px-5">Send</button>
                                </form>
                            </Col>
                            <Col className="col-md-5">

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;