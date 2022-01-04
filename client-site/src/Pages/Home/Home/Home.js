import React from 'react';
import AboutUs from '../../../Aboutus/AboutUs';
import Datepicker from '../../../Datepicker/Datepicker';
import Footer from '../../../Footer/Footer';
import Booking from '../../Booking/Booking/Booking';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home" className='bg-dark'>
            <Banner></Banner>
           
            <Reviews></Reviews>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;