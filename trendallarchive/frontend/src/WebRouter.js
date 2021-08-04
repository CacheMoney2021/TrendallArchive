import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  Redirect 
} from "react-router-dom";

export default class WebRouter extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      );
    }
  }
