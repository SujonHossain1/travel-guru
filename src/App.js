import React, { createContext, useState } from 'react';
import './App.css';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import HotelDetails from './components/HotelDetails/HotelDetails';
import BedroomDetails from './components/BedroomDetails/BedroomDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Contact from './components/Contact/Contact';

export const LocationContext = createContext();
export const UserContext = createContext();

function App() {

  const [locationData, setLocationData] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isValidEmail: null,
    isSignIn: false,
    error: null
  })

  if (loggedInUser.error) {
    setTimeout(() => { setLoggedInUser({ error: '' }) }, 8000);
  }

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <LocationContext.Provider value={[locationData, setLocationData]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <header>
                <Header />
                <Destination />
              </header>
            </Route>
            <Route path="/booking">
              <header>
                <Header />
                <Booking />
              </header>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/hotel-details">
              <HotelDetails />
            </PrivateRoute>
            <Route path="/bedroom-details/:bedroomId">
              <BedroomDetails />
            </Route>
            <Route path="/contact">
              <Contact />
              </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
