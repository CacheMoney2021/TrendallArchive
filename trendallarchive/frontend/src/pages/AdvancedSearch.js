import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import InfoIcon from '../components/images/infoicon_brown.png';
import GoldBtn from "../components/buttons/GoldBtn";

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    margin-left: 100px;
    margin-bottom:15px;
    padding: 45px;
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
    width: 40%;
    margin-bottom: 0px;
`

const FieldTitleImages = styled(FieldTitle)`
    width: 26.5%;
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
  iconButton: {
    padding: 10,
    marginLeft: 5,
  },
  radioGroup: {
    '& .MuiFormGroup-root': {
      color: 'black',
    },
  }  
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
        inputProps={props.inputProps} 
        fullWidth  
      />

      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Icon name={InfoIcon}/>
      </IconButton>
      </Paper>
      </div>
  )
}

const GreenRadio = withStyles({
  root: {
    color: '#909090',
    '&$checked': {
      color: '#3BA593',
    },
  },
  checked: {},
})((props) => <Radio {...props} />);

const FieldImages = () => {
  const classes = useSearchStyles();
  const [value, setValue] = React.useState('yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      
    <Paper component="form" elevation={0} className={classes.root}>
      <FieldTitleImages>With Images?</FieldTitleImages>
      <RadioGroup className={classes.radioGroup} row aria-label="imagequery" name="imagequery" value={value} onChange={handleChange}>
        <FormControlLabel value="yes" control={<GreenRadio />} label="Yes" />
        <FormControlLabel value="no" control={<GreenRadio />} label="No" />
      </RadioGroup>

      </Paper>
      </div>
  )
}

//Advanced Search Form Component. Includes 'Search' Button.
const AdvancedForm = () => {
  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>
      <FieldSearch title="Vase Number" placeholder="Type Vase Number" inputProps="{ 'aria-label': 'vaseID' }"/>
      <FieldSearch title="Fabric" placeholder="Enter Fabric Name" inputProps="{ 'aria-label': 'fabric' }"/>
      <FieldSearch title="Technique" placeholder="Enter Technique Name" inputProps="{ 'aria-label': 'technique' }"/>
      <FieldSearch title="Shape" placeholder="Enter Shape Name" inputProps="{ 'aria-label': 'shape' }"/>
      <FieldSearch title="Provenance" placeholder="Enter Provenance Name" inputProps="{ 'aria-label': 'provenanceID' }"/>
      <FieldSearch title="Inscription Type" placeholder="Enter Inscription Type" inputProps="{ 'aria-label': 'inscriptionType' }"/>
      <FieldSearch title="Inscription" placeholder="Enter Inscription" inputProps="{ 'aria-label': 'inscription' }"/>
      <FieldSearch title="Artist" placeholder="Enter Artist Name" inputProps="{ 'aria-label': 'artist' }"/>
      <FieldSearch title="Scholar" placeholder="Enter Scholar Name" inputProps="{ 'aria-label': 'scholar' }"/>
      <FieldSearch title="Decorated Area" placeholder="Enter Decorated Area" inputProps="{ 'aria-label': 'decoratedArea' }"/>
      <FieldSearch title="Collection Name" placeholder="Enter Collection Name" inputProps="{ 'aria-label': 'collectionID' }"/>
      <FieldSearch title="Collection No." placeholder="Type Collection Number" inputProps="{ 'aria-label': 'collectionNo' }"/>
      <FieldSearch title="Publication Name" placeholder="Enter Publication Name" inputProps="{ 'aria-label': 'publication' }"/>
      <FieldImages/>
      
      <GoldBtn width='100px' name="Search" link="/search"/> 

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
          <PageContainer>
            <AdvancedForm/>
          </PageContainer>
          <Footer/>
        </div>
      ); 
    }
  }
