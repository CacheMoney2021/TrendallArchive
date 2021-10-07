import React, { Component } from 'react';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import ContactInfo from "../components/ContactInfo";

//class to render all components for the About page
export default class Contact extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
            <ContactInfo/>
            <Footer/>
        </div>
      ); 
    }
}