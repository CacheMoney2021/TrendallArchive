import React, { Component } from "react";
import styled from 'styled-components';
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import SearchResults from "../components/SearchResults";

const FormDiv = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    left: 0;
    padding: 45px;
    margin-top: 5px;
    background-color: #F6E7CB;
`


//Render the Search Results Page.
export default class FacetedSearch extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
         <SearchPageHeader/>
            <PageContainer>
              <FormDiv/>
              <SearchResults/>
            </PageContainer>
          <Footer/>
        </div>
      ); 
    }
  }
