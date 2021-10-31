import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AddDestination from './Pages/AddDestination/AddDestination';
import AllBookings from './Pages/AllBookings/AllBookings';
import Booking from './Pages/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import UsersOrder from './Pages/UsersOrder/UsersOrder';

function App() {
  return (
    <div className='bg-black'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/usersOrder">
              <UsersOrder></UsersOrder>
            </Route>
            <Route path="/allBookings">
              <AllBookings></AllBookings>
            </Route>
            <Route path="/addDestination">
              <AddDestination></AddDestination>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
