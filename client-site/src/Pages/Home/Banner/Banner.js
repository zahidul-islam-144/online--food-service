import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
       <>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://files.list.co.uk/images/2020/04/07/pg11-LST247315.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://static.toiimg.com/thumb/77780968.cms?width=680&height=512&imgsize=1451531"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://c.files.bbci.co.uk/141EE/production/_110541428_chinesefood.jpg"
      alt="Fourth slide"
    />


  </Carousel.Item>
</Carousel>
       </>
    );
};

export default Banner;