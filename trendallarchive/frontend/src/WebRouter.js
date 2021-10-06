import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import ViewVase from "./pages/ViewVase";
import AdvancedSearch from "./pages/AdvancedSearch";
import FacetedSearch from "./pages/FacetedSearch";
import About from "./pages/About";

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
            <Route exact path="/viewvase/" component={ViewVase} />
            <Route exact path="/advanced-search/" component={AdvancedSearch} />
            <Route exact path="/search/" component={FacetedSearch} />
            <Route exact path="/about/" component={About} />
          </Switch>
        </Router>
      );
    }
  }
