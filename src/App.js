import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Navbar from "../src/Components/Navbar/Navbar";
import Bike from "./Components/Bike/Bike";
import Bus from "./Components/Bus/Bus";
import Car from "./Components/Car/Car";
import Train from "./Components/Train/Train";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Destination from "./Components/Destination/Destination";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        Name: {loggedInUser.name} <br />
        Email: {loggedInUser.email}
        <Navbar />
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/bike">
              <Bike />
            </PrivateRoute>
            <PrivateRoute path="/bus">
              <Bus />
            </PrivateRoute>
            <PrivateRoute path="/car">
              <Car />
            </PrivateRoute>
            <PrivateRoute path="/train">
              <Train />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
