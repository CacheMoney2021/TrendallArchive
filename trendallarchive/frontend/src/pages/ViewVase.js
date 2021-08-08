import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchPageHeader from "../components/header/SearchPageHeader";
import Footer from '../components/page_elements/Footer';

export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
            <SearchPageHeader/>
            <Footer/>

        </div>
      ); 
    }
    
}