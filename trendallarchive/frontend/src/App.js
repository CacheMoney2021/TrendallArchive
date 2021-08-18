import React, { Component } from "react";
import { render } from "react-dom";
import WebRouter from "./WebRouter";
import HomepageHeader from "./components/header/HomepageHeader";

export default class App extends React.Component {
    constructor(props) {
      super(props);
    
    }
      
    render() {
      /* WebRouter*/
      return <div>{<WebRouter />}</div>;
    }
  }
  

const appDiv = document.getElementById("app");
render(<App />, appDiv);
