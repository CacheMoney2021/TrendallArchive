import React, { Component } from "react";
import styled from 'styled-components';
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import SearchResults from "../components/SearchResults";

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
              <SearchResults/>
            </PageContainer>
          <Footer/>
        </div>
      ); 
    }
}
