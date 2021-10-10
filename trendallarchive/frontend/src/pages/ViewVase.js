//page to view the vase details and images.
//these details are seperated into components and are called on this page. 
import React from 'react';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseImage from '../components/VaseImage';
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

