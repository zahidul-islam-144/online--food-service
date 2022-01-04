import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Dashbods = ({dash}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { _id, name,offer,price, img } = dash;
    return (
        <div className=" text-primary">
            <img className="w-75" src={img} alt="" />
            <h3>{name}</h3>
            <h6>{price}</h6>
            <Button variant="success" onClick={handleShow}>
        puchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food-Item</Modal.Title>
        </Modal.Header>
        <Modal.Body> the Food are tooo awsome</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Dashbods;