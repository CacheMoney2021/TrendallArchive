import React, { Component } from 'react';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
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