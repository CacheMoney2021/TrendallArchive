import React from 'react';
import { Link } from 'react-router-dom';
import { HomeHeader, NavBar, NavLi } from './Header.elements';
import {ReactComponent as LatrobeLogo} from '../images/latrobelogo.svg';
import styled from 'styled-components';


//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

const LaTrobeLogo = () => {
  return(
      <LatrobeLogoSVG/>
  );
}

const Img = styled.div`
    width: 225px;
    height: 65px;
    margin: 5px 15px 5px 10px;
    top: 0px;
    position: relative;
    left: -225px;
`

//Render the Homepage Header Component
const HomepageHeader = () => {
  return (
    <HomeHeader>
      <LatrobeLogo/>
      <a href="/">
        <Img/>
      </a>
      <NavBar>
        <NavLi><Link to= "/about/">About </Link></NavLi>
        <NavLi>Contact</NavLi>
        <NavLi><Icon/></NavLi>
      </NavBar>
    </HomeHeader>
  )
}

export default HomepageHeader