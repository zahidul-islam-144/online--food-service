
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Explore = ({explore} ) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { _id, name, price, desciption, img } = explore;
    return (
       
        <div className="pb-3">

            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Charge: {price}</h5>
            <p>{desciption}</p>
       
            <Button variant="warning" onClick={handleShow}>
        puchase
      </Button>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rides & Parcel-Chase</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fw-bolder'><img className='w-25' src='https://us.123rf.com/450wm/chirokung2/chirokung22006/chirokung2200600157/150478680-.jpg?ver=6'/>Rides and Parcel contact are fastyyy.....</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Details
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
       
    );
};

export default Explore;