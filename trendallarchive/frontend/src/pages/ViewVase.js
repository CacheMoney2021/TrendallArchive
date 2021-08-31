import React, { Component } from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseGallery from '../components/VaseGallery';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import BackIcon from '../components/images/backarrow_black.png';
import { useHistory } from 'react-router-dom';

const useBtnStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 20,
    marginTop: 10,
    marginLeft: 40,
    marginBottom: 10,
  }, 
}));

function Icon(props){
  return <img src={props.name} width="auto" height="auto"/>; 
}

const BackBtn = () => {
  const classes = useBtnStyles();
  const history = useHistory();

  return (
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={() => history.goBack()}>
        <Icon name={BackIcon}/>
      </IconButton>
  )
}


export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
              <BackBtn/>
              <PageContainer>
                  <VaseGallery/>
                <Vase/>
              </PageContainer>
            <Footer/>
        </div>
      ); 
    }
}

