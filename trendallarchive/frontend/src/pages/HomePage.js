import React, { Component } from "react";
import HomepageHeader from "../components/header/HomepageHeader";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import styled from 'styled-components';
import GoldBtn from "../components/buttons/GoldBtn";
import SearchWithDropdown from "../components/searchbars/SearchWithDropdown";


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

const HomepageFooter = styled.div`
    position: absolute;
    width: 100%;
    height: 20px;
    background: #D4422F;
    bottom: 0px;
`

const SearchBarDiv = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
`

const AdvancedSearchDiv = styled.div`
    display: flex;
    padding-left: 1%;
`

const SearchBarComps = () => {
  return (
    <SearchBarDiv>
      <SearchWithDropdown/>
      <AdvancedSearchDiv>
        <GoldBtn name="Advanced Search"/>
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
          <HomepageFooter/>
        </div>
      ); 
    }
  }