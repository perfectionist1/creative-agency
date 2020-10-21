import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import mobileDesignLogo from '../images/icons/service1.png';
import graphicDesignLogo from '../images/icons/service2.png';
import logo from '../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        { loggedInUser.displayName && <h5 className="text-right">{loggedInUser.displayName}</h5>}
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-3 mt-5">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <Link to="/order"> <FontAwesomeIcon icon={faShoppingCart} /> <span className="pl-2">Order </span></Link></li>
                            <li class="list-group-item">Service list</li>
                            <li class="list-group-item"><Link to="/review">Review </Link></li>                            
                        </ul>
                    </Col>
                    <Col className="col-md-9" style={{backgroundColor: '#E5E5E5', height: '500px'}}>
                        <Row>
                            <Col className="col-md-5 col-sm-6 mt-5">
                                <div class="card" style={{width: '18rem', borderRadius: '20px'}}>
                                    <div className="d-flex justify-content-start mt-3" style={{position: 'relative'}}>
                                        <img src={mobileDesignLogo} style={{height: '50px', width: '50px', position: 'relative', left: '20px'}} class="card-img-top" alt="..."  />
                                        <button className="btn btn-warning text-danger" style={{position: 'relative', right: '-130px'}}>Pending</button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Web & Mobile design</h5>
                                        <small class="card-text text-muted align-middle">Some quick example text to build on the card title and make up the bulk of the card's content.</small>                                
                                    </div>
                                </div>
                            </Col>                            
                            <Col className="col-md-5 col-sm-6 mt-5">
                                <div class="card" style={{width: '18rem',  borderRadius: '20px'}}>
                                    <div className="mt-3" style={{position: 'relative'}}>
                                        <img src={graphicDesignLogo} style={{height: '50px', width: '50px', position: 'relative', left: '20px'}} class="card-img-top" alt="..." />
                                        <button className="btn btn-success" style={{position: 'relative', right: '-130px'}}>Done</button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center"> Graphic design</h5>
                                        <small class="card-text text-muted align-middle">Some quick example text to build on the card title and make up the bulk of the card's content.</small>                                
                                    </div>
                                </div>
                            </Col>                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceList;