import React from "react";
import { AppBar, Toolbar, withStyles} from "@material-ui/core";
import Logo from './logo.svg';
import { red } from "@material-ui/core/colors";


const Header = () => {
  const StyledToolbar = withStyles({
    root: {
      background: 'red',
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 0 0 0',
    },
  })(Toolbar);

  return <StyledToolbar><Logo /></StyledToolbar>;
};

export default function HomeHeader() {
  return (
    <header>
      <AppBar>{Header()}</AppBar>
    </header>
  );

}