import React, { Component } from "react";
import HomePage from "./home/HomePage"
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
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
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      );
    }
  }
  