import React, { Component } from "react";
import HomepageHeader from "../components/header/HomepageHeader";

export default class HomePage extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <HomepageHeader/>
      ); 
    }
  }