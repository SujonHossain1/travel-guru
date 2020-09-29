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

export const LocationContext = createContext();
export const UserContext = createContext();

function App() {

  const [locationData, setLocationData] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isValidEmail: false,
    isSignIn: false,
    successMessage: '',
    errorMessage: ''
  })

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <LocationContext.Provider value={[locationData, setLocationData]}>
        <Router>
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
        </Router>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
