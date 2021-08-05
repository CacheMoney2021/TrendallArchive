import React, { Component } from "react";
import HomepageHeader from "../components/header/HomepageHeader";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const BasicSearchBanner = styled.div`
    width: 100%;
    height: 350px;
    padding: 45px 60px 45px 60px;
    box-sizing: border-box;
    background-color: #D4422F;
    background-image: url(${BannerVaseImage});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
    display: inline-block;
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

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#DAA844',
    '&:hover': {
      backgroundColor: '#C89A3E',
    },
    borderRadius: 10,
  },
}))(Button);

const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '2px 4px',
    width: '50%',
    height: 50,
    borderRadius: '10px 10px 10px 10px',
    elevation: 0,
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 50,
    margin: 4,
  },
}));

const currencies = [
  {
    value: 'VaseID',
    label: 'Vase Number',
  },
  {
    value: 'Shape',
    label: 'Shape',
  },
  {
    value: 'Technique',
    label: 'Technique',
  },
  {
    value: 'Fabric',
    label: 'Fabric',
  },
  {
    value: 'Artist',
    label: 'Artist',
  },
  {
    value: 'Inscription',
    label: 'Inscription',
  },
  {
    value: 'Subject',
    label: 'Subject',
  },
  {
    value: 'Publication',
    label: 'Publication',
  },
  {
    value: 'Collection',
    label: 'Collection',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      padding: "0px 0px 0px 8px",
      width: '16ch',
    },
  },
}));

function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('VaseID');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          InputProps={{ disableUnderline: true }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
    </form>
  );
}

function SearchBar() {
  const classes = useSearchStyles();

  return (
    <SearchBarDiv>
      
    <Paper component="form" elevation={0} className={classes.root}>
      <MultilineTextFields/>

      <Divider className={classes.divider} orientation="vertical" />

      <InputBase
        className={classes.input}
        placeholder="Search the Trendall Archive in the selected field..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
      <AdvancedSearchDiv>
        <ColorButton variant="contained" disableElevation>Advanced Search</ColorButton>
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
            <SearchBar/>
          </BasicSearchBanner>
          <HomepageFooter/>
        </div>
      ); 
    }
  }