import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BannerVaseImage from '../components/images/basicsearchimage.png';
import VaseOne from '../components/samplevase/P11.png';
import VaseTwo from '../components/samplevase/P12.png';
import VaseThree from '../components/samplevase/P13.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const CropDiv = styled.div`
    width: 350px;
    height: 500px;
    overflow: hidden;
    object-fit: none;
    object-position: 0 0;
`

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    margin-left: 100px;
    margin-bottom:15px;
    padding: 45px;
`

const VaseImg = (props) => {
    return <img src={props.name} width="350px" height="auto"/>; 
}

const items = [
    <div className="item" data-value="1"><VaseImg name={VaseOne}/></div>,
    <div className="item" data-value="2"><VaseImg name={VaseTwo}/></div>,
    <div className="item" data-value="3"><img src={BannerVaseImage}/></div>,
    <div className="item" data-value="4"><img src={BannerVaseImage}/></div>,
    <div className="item" data-value="5"><img src={BannerVaseImage}/></div>,
  ];
  

  const navItem = (item, i) => {
    return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

const VaseGallery = () => {
    return(
        <FormDiv>
            <AliceCarousel
            animationType="fadeout" 
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            />
        </FormDiv>
    )
}

export default VaseGallery;