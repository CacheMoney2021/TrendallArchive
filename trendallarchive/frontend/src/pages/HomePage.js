import React, { Component } from "react";
import HomepageHeader from "../components/header/HomepageHeader";
import styled from 'styled-components';
import BannerVaseImage from '../components/images/basicsearchimage.png';

const BasicSearchBanner = styled.div`
    width: 100%;
    height: 400px;
    background-color: #D4422F;
    background-image: url(${BannerVaseImage});
    background-repeat: no-repeat;
    background-position: right;
`

const BannerImg = () =>{
  return <img src={BannerVaseImage} height="100%" width="auto" image-rendering="high-quality"/>;
}

const BannerDiv = styled.div`

`

export default class HomePage extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <HomepageHeader/>
          <BasicSearchBanner></BasicSearchBanner>
        </div>
      ); 
    }
  }