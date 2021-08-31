import React, { Component } from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseGallery from '../components/VaseGallery';


const PageContainer = styled.div`
    display: flex;
`

export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div class>
            <SearchPageHeader/>
              <PageContainer>
                <VaseGallery/>
                <Vase/>
              </PageContainer>
            <Footer/>
        </div>
      ); 
    }
}
