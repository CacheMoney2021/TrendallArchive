import React, { Component } from "react";
import { render } from "react-dom";
import WebRouter from "./WebRouter";
import HomepageHeader from "./home/HomepageHeader";

export default class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      /* WebRouter
      return <div>{<WebRouter />}</div>;*/

      /*Testing HomeHeader*/
      return <HomepageHeader/>;
    }
  }
  

const appDiv = document.getElementById("app");
render(<App />, appDiv);
