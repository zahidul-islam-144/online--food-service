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


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
