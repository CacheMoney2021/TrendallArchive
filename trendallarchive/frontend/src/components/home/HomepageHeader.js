import React from 'react';
import { HomeHeader, NavBar, NavLi } from './Header.elements';
import {ReactComponent as LaTrobeLogo} from '../images/logo.svg';
import BookmarkIcon from '../images/bookmarkicon.png';
import UserIcon from '../images/usericon.png';

//A function to take in the name of an import image and return it as a styled image
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

//Issues currently faced:
//Cannot add any other components after <LaTrobeLogo/> or it will disappear
//This works to load: <img src={BookmarkIcon} width="35px" height="35px"/>; 