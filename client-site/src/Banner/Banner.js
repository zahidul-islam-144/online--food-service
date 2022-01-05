import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg';
  import banner1 from '../../images/banner.jpg';
import banner2 from '../../images/banner3.jpg';
 import banner3 from "../../images/bannerbg.jpg";


const Banner = () => {
    return (
        <>
            <Carousel>
            
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                     <Carousel.Caption>
                        <h2 className="lighter" style={{ animationDelay:'1s' }}>Ana-Food-delivery</h2>
                        <h1>Place Your Order</h1>
                        <p className="sub-title">Choose from Keto, Paleo and Healthy Diet Meal Plans directly from Chef Marc’s Meal Prep!!.</p>
                        <Button className="text-dark bg-warning">GET STARTED</Button>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h2></h2> */}
                        <h1 className="lighter">Chef Prepared</h1>
                        <p className="sub-title">Chef Marc will custom design and prepare your meal plan based on your dietary preferences and fitness goals!!.</p>
                        <Button className="text-dark bg-warning">GET STARTED</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="lighter ">Delivered to You </h1>
                        <p className="sub-title">We offer free delivery to LA and Orange Counties. Please leave your empty cooler bag out for pick up on delivery days!!.</p>
                        <Button className="text-dark bg-warning">GET STARTED</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;