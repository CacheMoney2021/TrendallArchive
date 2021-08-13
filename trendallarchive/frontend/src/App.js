import React, { Component } from "react";
import { render } from "react-dom";
import WebRouter from "./WebRouter";
import HomepageHeader from "./components/header/HomepageHeader";

export default class App extends React.Component {
    constructor(props) {
      super(props);
    
    }
    // not doing anything.
    // getVase(){
    //   fetch(
        
    //     'http://127.0.0.1:8000/viewvaseapi/',
    //     {
    //       method: "GET", mode: "cors", credentials: "omit",
    //       headers: {
    //         'Authorization': "Bearer " + this.state.clientToken.accessToken
    //       }
    //     }
    //   )
    //     .then(response => response.json())
    //     .then(responseData => this.setState({ data: responseData }))
    //     .catch((error) => {
    //       console.log('Error fetching and parsing data', error);
    //    });
    // }    
    render() {
      /* WebRouter*/
      return <div>{<WebRouter />}</div>;
    }
  }
  

const appDiv = document.getElementById("app");
render(<App />, appDiv);
