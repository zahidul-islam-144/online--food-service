import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect,useState} from 'react';
import { Container, Form, ListGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Datepicker from '../Datepicker/Datepicker';
import useAuth from '../hooks/useAuth';
import Dashbods from './Dashbods';
import './Dashboard.css';


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MakeAdmin from '../hooks/MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const [dashs, setDashs] = useState([])
    useEffect(() => {
       
        fetch('dashboard.json')

            .then(res => res.json())
            .then(data => setDashs(data));
    }, [])
    return (

        <div className="row  bg-dark">
             <div className="col-md-3  vh-100 pt-5 bg-primary text-primary">
               
                 <Container >
                
                     <ListGroup variant="flush">
  <ListGroup.Item active>  <Nav.Link  className="text-dark fw-bolder border border-2 border-dark pt-2"  as={Link} to="/pay">Pay</Nav.Link></ListGroup.Item>
  <ListGroup.Item active><Nav.Link  className="text-dark fw-bolder border border-2 border-dark pt-2"  as={Link} to="/manageService">My Orders</Nav.Link></ListGroup.Item>
  <ListGroup.Item active>    <Nav.Link  className="text-dark fw-bolder border border-2 border-dark pt-2"  as={Link} to="/explores">Explore-Offer</Nav.Link></ListGroup.Item>
  <ListGroup.Item active> <Nav.Link  className="text-dark fw-bolder border border-2 border-dark pt-2"  as={Link} to="/drinks">Dessert-Drink</Nav.Link></ListGroup.Item>
</ListGroup>
                     {user?.email ?
                         <Button className=' fw-bolder bg-success m-1' onClick={logOut} variant="light">Logout</Button> :
                         <Nav.Link className='fw-bolder text-dark ' as={Link} to="/login">Login</Nav.Link>}
                     <Navbar.Text className='text-dark fw-bolder border border-2 border-dark'>
                         Signed in as: <a className='text-dark fw-bolder' href="#login">{user?.displayName}</a>
                     </Navbar.Text>
             </Container>
</div>
    <div className="col-9 pt-4 bg-dark">
    <h2 className="text-danger m-3">Our upcoming-menu</h2>
   <div className='container m-4'> <Datepicker></Datepicker></div>
            <div className="dashboard-container bg-dark">
                {
                    dashs.map(dash => <Dashbods
                        key={dash.id}
                        dash={dash}
                    ></Dashbods>)
                }
            </div>

        </div>
        </div>
      
      

    );
};

export default Dashboard;