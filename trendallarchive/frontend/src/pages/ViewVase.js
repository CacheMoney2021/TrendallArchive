import React, { Component } from 'react';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseGallery from '../components/VaseGallery';
import VaseImage from '../components/VaseImage';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import BackIcon from '../components/images/backarrow_white.png';
import { Link } from 'react-router-dom';

const VaseWrapper = styled(PageContainer)`
  margin-left: 80px;
  margin-top: 70px;
`

function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
              <VaseWrapper>
                <Link to="/"><Icon name={BackIcon}/></Link> 
                <VaseImage/>
                <Vase/>
              </VaseWrapper>
            <Footer/>
        </div>
      ); 
    }
}

