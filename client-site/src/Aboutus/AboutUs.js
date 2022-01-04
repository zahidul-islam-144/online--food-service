

import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='bg-dark'>
    
           
           <div className="row">
        
                        <div className="col-md-6  bg-warning mt-5">
                        
                        <Carousel className='mt-5' >
  <Carousel.Item >
    <img
      className="d-block mx-auto w-75 " 
      src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wmprmduobugxvcsugdca"
      alt="First slide"
    />
    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores"></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://washingtonsources.org/wp-content/uploads/2021/06/Fast-Food-Companies-Are-Targeting-The-Youth-With-More-Ads.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores"> </NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://thumbs.dreamstime.com/b/lunchboxes-different-meals-white-table-healthy-food-delivery-lunchboxes-different-meals-white-table-flat-lay-160387451.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <NavLink style={{textDecoration:"none"}} to="/explores"> </NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Button className="btn fw-bolder btn-success text-white mt-5">About</Button>
<h4 className="fw-bolder mb-5 pt-4 text-dark">" Food-Daily is the choice relevent Page "</h4>
                          </div>
                                <div className="col-md-3 container">
                                <div className="cart">
                                    <h4 className="fw-bolder mt-5 text-info border border-info p-2 rounded">About-Page</h4>
                    <p className="fw-bolder mt-4 text-info">Food writing is a genre of writing that includes recipes, food blogs, food and restaurant critiques, and print and online medium. If you are interested in learning how to write your own recipes, create your own food blog, or write critiques of other restaurants, this Wikiversity page is here to help! We also help you to break down whether your own personal food writing.Recipe-writing is a crucial and integral part of the food-writing process. Without recipes, it would be impossible to create uniformity within dishes and share them with others.</p>
                </div>
                                    </div>
                                    </div>

            </div>
    

    );
};

export default AboutUs;
