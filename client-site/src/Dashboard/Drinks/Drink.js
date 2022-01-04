
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Drink = ({explores} ) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { _id, name, price, desciption, img } = explores;
    return (
       
        <div className="pb-3">

            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{desciption}</p>
       
            <Button variant="success" onClick={handleShow}>
        Choose
      </Button>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Drinks & Desserts </Modal.Title>
        </Modal.Header>
        <Modal.Body className='fw-bolder'><img className='w-25' src='https://factsofindonesia.com/wp-content/uploads/2021/07/es-es.jpg'/>  Drinks and Desserts are too Delicious here....</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Details
          </Button>
          <Button variant="success" onClick={handleClose}>
            Choose
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
       
    );
};

export default Drink;