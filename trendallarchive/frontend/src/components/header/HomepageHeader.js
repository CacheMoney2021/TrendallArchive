import React from 'react';
import { HomeHeader, NavBar, NavLi } from './Header.elements';
import {ReactComponent as LaTrobeLogo} from '../images/logo.svg';
import BookmarkIcon from '../images/bookmarkicon.png';
import UserIcon from '../images/usericon.png';

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="35px" height="35px"/>; 
}

//Render the Homepage Header Component
const HomepageHeader = () => {
  return (
    <HomeHeader>
      <LaTrobeLogo/>
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