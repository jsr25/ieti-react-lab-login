import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Task from "./component/task/Task";
import Home from "./component/home/Home";
import Login from "./component/login/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/navbar/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/task" component={Task} ></Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
