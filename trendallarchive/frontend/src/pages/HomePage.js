import React, { Component } from "react";
import styled from 'styled-components';
import HomepageHeader from "../components/page_elements/HomepageHeader";
import SearchWithDropdown from "../components/searchbars/SearchWithDropdown";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import GoldBtn from "../components/buttons/GoldBtn";
import Welcome from "../components/Welcome";

const BasicSearchBanner = styled.div`
    width: 100%;
    height: 350px;
    padding: 45px 60px 45px 60px;
    box-sizing: border-box;
    background-color: #D4422F;
    background-image: url(${BannerVaseImage});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 850px;
`

const TrendallTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 65px;
    letter-spacing: 0.05em;
    line-height: 70px;
    text-transform: uppercase;
    color: #FCF7EE;
`

const SearchBarDiv = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
`

const AdvancedSearchDiv = styled.div`
    display: flex;
    padding-left: 1.5%;
`
const SearchBarComps = () => {
  return (
    <SearchBarDiv>
      <SearchWithDropdown/>
      <AdvancedSearchDiv>
        <GoldBtn name="Advanced Search" link="/advanced-search"/>
      </AdvancedSearchDiv>
    </SearchBarDiv>
  );
}

//Render the HomePage Component.
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
   }
  
 render() {
    return(
      <div>
        <HomepageHeader/>
         <BasicSearchBanner>
            <TrendallTitle>A.D. Trendall<br/>Research Centre</TrendallTitle>
            <SearchBarComps/>
         </BasicSearchBanner>
         <Welcome/>
        <Footer/>
      </div>
    ); 
  }
}