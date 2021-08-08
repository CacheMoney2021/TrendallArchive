import React from 'react';
import { HomeHeader, NavBar, NavLi } from './Header.elements';
import { ReactComponent as LatrobeLogo } from '../images/latrobelogo.svg';
import BookmarkIcon from '../images/bookmarkicon_brown.png';
import UserIcon from '../images/usericon_brown.png';

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

//Render the Homepage Header Component
const HomepageHeader = () => {
  return (
    <HomeHeader>
      <LatrobeLogo/>
      <NavBar>
        <NavLi>About</NavLi>
        <NavLi>Contact</NavLi>
        <NavLi><Icon name={BookmarkIcon}/></NavLi>
        <NavLi><Icon name={UserIcon}/></NavLi>
      </NavBar>
    </HomeHeader>
  )
}

export default HomepageHeader