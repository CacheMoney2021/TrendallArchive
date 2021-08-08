import React from 'react';
import { SearchHeader, NavBar, NavLi } from './Header.elements';
import HomeIcon from '../images/homeicon_white.png';
import BookmarkIcon from '../images/bookmarkicon_white.png';
import UserIcon from '../images/usericon_white.png';

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

//Render the Header Component for all Search Pages
const SearchPageHeader = () => {
  return (
    <SearchHeader>
      <NavBar>
        <NavLi><Icon name={HomeIcon}/></NavLi> 
        <NavLi><Icon name={BookmarkIcon}/></NavLi> 
        <NavLi><Icon name={UserIcon}/></NavLi>
      </NavBar>
    </SearchHeader>
  )
}

export default SearchPageHeader