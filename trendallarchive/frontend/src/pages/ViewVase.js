import React, { Component } from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/header/SearchPageHeader";
import Footer from '../components/page_elements/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
} from '@material-ui/core';
import InfoIcon from '../components/images/infoicon_brown.png';
import GoldBtn from "../components/buttons/GoldBtn";



export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
            <SearchPageHeader/>
            <Vase/>
            <Footer/>

        </div>
      ); 
    }
}