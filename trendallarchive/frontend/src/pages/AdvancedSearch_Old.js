import React, { Component } from "react";
import styled from 'styled-components';
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
import { PageContainer, Footer, FormDiv } from "../components/page_elements/Div.elements";
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import InfoIcon from '../components/images/infoicon_brown.png';
import GoldBtn from "../components/buttons/GoldBtn";

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

const GreenRadioBtn = withStyles({
  root: {
    color: '#909090',
    '&$checked': {
      color: '#3BA593',
    },
  },
  checked: {},
})((props) => <Radio {...props} />);

const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 50,
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

//Advanced Search Form Component. Includes 'Search' Button.
const AdvancedForm = () => {
  const classes = useSearchStyles();
  //Component that displays each 'Field Line' in the Advanced Search Form. E.g. Vase Number: Enter here (InfoIcon).
  const FieldSearch = (props) => {
    const classes = useSearchStyles();

    return (
      <div>
      <Paper component="form" elevation={0} className={classes.root}>
        <FieldTitle>{props.title}</FieldTitle>
        <Input 
          placeholder={props.placeholder}
          name={props.name} 
          fullWidth  
        />

        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <Icon name={InfoIcon}/>
        </IconButton>
        </Paper>
        </div>
    )
  }

  //Component that gives user the option: 'Has Images? Any/Y/N'.
  const FieldImages = () => {
    const classes = useSearchStyles();
    const [value, setValue] = React.useState('any');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <div>
        <Paper component="form" elevation={0} className={classes.root}>
          <FieldTitleImages>Has Images?</FieldTitleImages>
          <RadioGroup className={classes.radioGroup} row aria-label="imagequery" name="imagequery" value={value} onChange={handleChange}>
            <FormControlLabel value="any" control={<GreenRadioBtn />} label="Any" />
            <FormControlLabel value="yes" control={<GreenRadioBtn />} label="Yes" />
            <FormControlLabel value="no" control={<GreenRadioBtn />} label="No" />
          </RadioGroup>
        </Paper>
      </div>
    )
  }

  const fields = [
    { value: 'vaseRef',         placeholder: "Type Vase Reference No.",     title: 'Vase Reference' },
    { value: 'shapeName',       placeholder: "Enter Shape Name",            title: 'Shape' },
    /*{ value: 'Technique',   label: 'Technique' }, API View 'FilterVases' is missing Technique Attribute*/
    { value: 'fabric',          placeholder: "Enter Fabric Name",           title: 'Fabric' },
    { value: 'artistName',      placeholder: "Enter Artist Name",           title: 'Artist' },
    { value: 'subject',         placeholder: "Enter Vase Decription",       title: 'Subject' },
    { value: 'publications',    placeholder: "Enter Publication Name",      title: 'Publication Name' },
    { value: 'collectionName',  placeholder: "Enter Collection Name",       title: 'Collection Name' },
    { value: 'provenanceName',  placeholder: "Enter Provenance Name",       title: 'Provenance' },
  ];

  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>
      
      {/*Search Field with Typed Inputs
      <FieldSearch title="Vase Reference"   placeholder="Type Vase Reference"     name="vaseID"/>
      <FieldSearch title="Fabric"           placeholder="Enter Fabric Name"       name="fabric"/>
      <FieldSearch title="Technique"        placeholder="Enter Technique Name"    name="Technique Undefined"/>
      <FieldSearch title="Shape"            placeholder="Enter Shape Name"        name="shape_name"/>
      <FieldSearch title="Provenance"       placeholder="Enter Provenance Name"   name="provenance_name"/>
      <FieldSearch title="Artist"           placeholder="Enter Artist Name"       name="artist_name"/>
      <FieldSearch title="Scholar"          placeholder="Enter Scholar Name"      name="Scholar Undefined"/>
      <FieldSearch title="Collection Name"  placeholder="Enter Collection Name"   name="collection_name"/>
      <FieldSearch title="Publication Name" placeholder="Enter Publication Name"  name="Publication Name Undefined"/>
      */}

      {fields.map((option) => (
        <div>
        <Paper component="form" elevation={0} className={classes.root}>
          <FieldTitle>{option.title}</FieldTitle>
          <Input 
            placeholder={option.placeholder}
            fullWidth  
          />
  
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <Icon name={InfoIcon}/>
          </IconButton>
          </Paper>
          </div>
      ))}
      
      {/*<FieldImages/>*/}
      
      {/*Search Button*/}
      <br/><GoldBtn width='100px' name="Search" link="/search"/> 
    </FormDiv>
  );
}

//Render the Advanced Search Page.
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

