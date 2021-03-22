import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Navbar from "../src/Components/Navbar/Navbar";
import Bike from "./Components/Bike/Bike";
import Bus from "./Components/Bus/Bus";
import Car from "./Components/Car/Car";
import Train from "./Components/Train/Train";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bike">
            <Bike />
          </Route>
          <Route path="/bus">
            <Bus />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/train">
            <Train />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
