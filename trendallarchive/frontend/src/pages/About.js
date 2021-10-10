//this page contains components for 'About' page
import React from 'react';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { Footer } from "../components/page_elements/Div.elements";
import AboutInfo from "../components/AboutInfo";

//class to render all components for the About page
export default class About extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>

            <AboutInfo/>
            <Footer/>
        </div>
      ); 
    }
}