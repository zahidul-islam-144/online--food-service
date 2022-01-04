
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const ParcelQu = ({explore} ) => {
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
          <Modal.Title>Rides & Purcel-Chase</Modal.Title>
        </Modal.Header>
        <Modal.Body><img className='w-25' src='https://c8.alamy.com/comp/B5XJXJ/gift-parcel-B5XJXJ.jpg'/>Parcel contact are fastyyy.....</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
       
    );
};

export default ParcelQu;