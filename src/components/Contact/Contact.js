import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{backgroundColor: '#f4c013'}}>
            <Container>
                <Row>
                    <Col className="col-md-6 col-sm-12 pr-5 mt-5" >
                        <div>
                            <h1  className="mb-4">Let us handle your <span style={{display: 'block'}}> project, professionally </span></h1>
                            <small>
                                With well written codes, we build amazing apps for all <span style={{display: 'block'}}> platforms, mobile and web apps in general.</span>
                            </small>
                        </div>
                    </Col>
                    <Col className="col-md-6 col-sm-12 mt-5">
                        <div>
                            <form action="">
                                <p><input type="email" name="" placeholder="Your email address"/></p>
                                <p><input type="text" name="" placeholder="Your name / company's name"/></p>
                                <p><textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea></p>
                                <button className="btn btn-dark px-5">Send</button>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12 text-center  mt-5 pt-3 pb-4">
                        <small >copyright orange labs 2020</small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;