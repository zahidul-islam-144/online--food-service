import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className='text-warning border-3 border border-warning p-1 rounded'>Food-Daily</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/aboutus">About</Nav.Link>
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/addService">Orders</Nav.Link>
                        <Nav.Link className='text-info border border-info rounded-pill m-1' as={Link} to="/manageService">Manage Orders</Nav.Link>
                        {user?.email ?
                            <Button className='bg-info m-1' onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className='text-info' as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text className='text-primary'>
                        <span> Signed in as: <a  className='text-info' href="#login">{user?.displayName}</a></span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;