import React from 'react';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div >                
            <Header></Header>
            <Services></Services>
            <Portfolios></Portfolios>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;