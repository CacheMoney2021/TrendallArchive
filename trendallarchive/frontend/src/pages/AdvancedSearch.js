import React, { Component } from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
} from '@material-ui/core';
import SearchPageHeader from "../components/header/SearchPageHeader";
import Footer from '../components/page_elements/Footer';
import InfoIcon from '../components/images/infoicon_brown.png';
import GoldBtn from "../components/buttons/GoldBtn";

const FormDiv = styled.div`
    width: 35%;
    height: 100%;
    left: 0;
    margin-left: 100px;
    padding: 45px;
    display: absolute;
`

const AdvancedSearchTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 100;
    color: #3F342C;
    margin-bottom: 15px;
`

const FieldTitle = styled(AdvancedSearchTitle)`
    font-size: 16px;
    display: flex;
    width: 36%;
    margin-bottom: 0px;
`

const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 45,
    elevation: 0,
    alignItems: 'center',
    backgroundColor: '#FCF7EE',
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginLeft: 5,
  },  
}));

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="20px"/>; 
}

const FieldSearch = (props) => {
  const classes = useSearchStyles();

  return (
    <div>
    <Paper component="form" elevation={0} className={classes.root}>
      <FieldTitle>{props.title}</FieldTitle>
      <Input 
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': '{props.inputProps}' }} 
        fullWidth  
      />

      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Icon name={InfoIcon}/>
      </IconButton>
      </Paper>
      </div>
  )
}


const AdvancedForm = () => {
  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>
      <FieldSearch title="Vase Number" placeholder="Type Vase Number" inputProps="vaseID"/>
      <FieldSearch title="Fabric" placeholder="Enter Fabric Name" inputProps="fabric"/>
      <FieldSearch title="Technique" placeholder="Enter Technique Name" inputProps="technique"/>
      <FieldSearch title="Shape" placeholder="Enter Shape Name" inputProps="shape"/>
      <FieldSearch title="Provenance" placeholder="Enter Provenance Name" inputProps="provenanceID"/>
      <FieldSearch title="Inscription Type" placeholder="Enter Inscription Type" inputProps="inscriptionType"/>
      <FieldSearch title="Inscription" placeholder="Enter Inscription" inputProps="inscription"/>
      <FieldSearch title="Artist" placeholder="Enter Artist Name" inputProps="artist"/>
      <FieldSearch title="Scholar" placeholder="Enter Scholar Name" inputProps="scholar"/>
      <FieldSearch title="Decorated Area" placeholder="Enter Decorated Area" inputProps="decoratedArea"/>
      <FieldSearch title="Collection Name" placeholder="Enter Collection Name" inputProps="collectionID"/>
      <FieldSearch title="Collection No." placeholder="Type Collection Number" inputProps="collectionNo"/>
      <FieldSearch title="Publication Name" placeholder="Enter Publication Name" inputProps="publication"/>

    </FormDiv>
  );
}

//Render the HomePage Component.
export default class AdvancedSearch extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <SearchPageHeader/>
          <AdvancedForm/>
          <Footer/>
        </div>
      ); 
    }
  }
