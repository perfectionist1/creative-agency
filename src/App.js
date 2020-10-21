import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import ServiceList from './components/ServiceList/ServiceList';
import Review from './components/Review/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       { loggedInUser.displayName && <p>Welcome! {loggedInUser.displayName}</p> }
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/home"> 
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
