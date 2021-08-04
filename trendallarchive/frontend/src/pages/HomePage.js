import React, { Component } from "react";
import HomepageHeader from "../components/header/HomepageHeader";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import styled from 'styled-components';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const BasicSearchBanner = styled.div`
    width: 100%;
    height: 400px;
    padding: 45px 60px 45px 60px;
    box-sizing: border-box;
    background-color: #D4422F;
    background-image: url(${BannerVaseImage});
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto;
`

const TrendallTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 60px;
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

const useStylesBasicSearch = makeStyles((theme) => ({
  root: {
    width: 1000,
    height: 50,
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function BasicSearchField(props) {
  const classes = useStylesBasicSearch();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

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
            <BasicSearchField
              label="Basic Search"
              variant="filled"
              id="basic-search-input"/>

          </BasicSearchBanner>
          <HomepageFooter/>
        </div>
      ); 
    }
  }