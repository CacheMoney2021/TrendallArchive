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
import styled from 'styled-components';


const ContainerDiv = styled.div`
    padding: 20px;
    height: 100%;
    
`


export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div class>
            <SearchPageHeader/>
            <ContainerDiv>
            <Vase/>
            </ContainerDiv>
            <Footer/>


        </div>
      ); 
    }
}