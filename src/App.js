import React, { createContext, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Hotel from './components/Hotel/Hotel';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Data from './fakedData/Data';


export const userContext = createContext();

function App() {

const [loggedInUser, setLoggedInUser] = useState({})


console.log(loggedInUser);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Home data={Data} ></Home>
        </Route>
        <Route exact path="/destination/:slug">
          <Booking data={Data}></Booking>
        </Route>
        <PrivateRoute exact path="/hotel/">
          <Hotel></Hotel>
        </PrivateRoute>
        <Route exact path="/login/">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <Error></Error>
        </Route>
      </Switch>
    </userContext.Provider>
  );
}

export default App;
