import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logos/logo.png';
import googleLogo from '../images/icons/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {

    const [loggedInUser, setLoggedInUser] =  useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {        
            const {displayName, email} = result.user;
            const signedInUser = {displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(signedInUser);
            
        }).catch(function(error) {        
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    return (
        <div className="container-top">
            <Container>
                <Row>
                    <Col>                    
                        <div className="col-md-6 login-style mt-5 ">                            
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logo} alt="company-logo" style={{height: '50px'}}/>
                            </div>
                            <div className="login-style-box">
                                <h2 className="text-center pt-5 pb-3">Login With </h2>
                                <div className="d-flex justify-content-center">
                                    <p className="google-logoSection-style"> <img src={googleLogo} alt="" style={{height: '25px'}}/> <Link onClick={handleGoogleSignIn}> <span style={{marginLeft: '100px', color: '#000'}}>Continue with Google </span></Link></p>
                                </div>
                                <div className="d-flex justify-content-center">                                   
                                    <p className="text-center mt-1">Don't you have an account? 
                                        <Link to="/createAccount"> 
                                            <span className="text-primary ml-1">Create an account</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>                                                      
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;