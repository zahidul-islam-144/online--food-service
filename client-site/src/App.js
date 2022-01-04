<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageServices/ManageService';
import './App.css';
import Services from './Pages/Home/Services/Services';
import AboutUs from './Aboutus/AboutUs';
import Dashboard from './Dashboard/Dashboard';
import Datepicker from './Datepicker/Datepicker';
import Dashbods from './Dashboard/Dashbods';
import Pay from './Dashboard/Pay/Pay';
// import Explore from './Explore/Explore';
import Explores from './Dashboard/Explore/Explores';
import Parcels from './Dashboard/Explore/Parcels';
import Deserts from './Dashboard/Drinks/Deserts';
import Drinks from './Dashboard/Drinks/Drinks';
import Map from './Dashboard/Explore/Map/Map';
import Search from './Pages/Home/Services/Search/Search';

=======
import React from 'react';
import './App.css';
import JSONDATA from './services.json';
import {useState} from 'react';
>>>>>>> 585bf2d9b687dba91d00c19758a764e4068f7e96

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
<<<<<<< HEAD
       <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
           <Route path="/dashboard">
             <Dashboard></Dashboard>
           </Route>
<Route path="/datepicker">
  <Datepicker></Datepicker>
</Route>
<Route path="/dashbods">
  <Dashbods></Dashbods>
</Route>
<Route path="/pay">
  <Pay></Pay>
</Route>
<Route path="/explores">
  <Explores></Explores>
</Route>
<Route path="/parcels">
  <Parcels></Parcels>
</Route>
<Route path="/deserts">
  <Deserts></Deserts>
</Route>
<Route path="/drinks">
  <Drinks></Drinks>
</Route>
<Route path="/map">
  <Map></Map>
</Route>
<Route path="/search">
  <Search></Search>
</Route>

            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
        <PrivateRoute path ="/manageService">
          <ManageService></ManageService>
        </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
=======
      <input type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
      {JSONDATA.filter((val) => {
        if (searchTerm == ""){
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className='user' key={key}>
           <p>{val.name}</p>
           <p>{val.offer}</p>
           <p>{val.description}</p> 
          </div>
        );
      })}
>>>>>>> 585bf2d9b687dba91d00c19758a764e4068f7e96
    </div>
  );
}

export default App;
