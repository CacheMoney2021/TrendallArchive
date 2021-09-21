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

  const FieldSearch = (props) => {
    const classes = useSearchStyles();

    return (
      <div>
      <Paper component="form" elevation={0} className={classes.root}>
        <FieldTitle>{props.title}</FieldTitle>
        <Input 
          placeholder={props.placeholder}
          name={props.name} 
          value={props.value}
          onChange={props.onChange}
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

  const [imgOption, setimgOption] = React.useState('any');
  const handleRadioBtn = (event) => {
    setimgOption(event.target.value);
  };

  /*Handles the Change in the Input Fields*/
  const [ref, setRef] = React.useState('');
  const [shape, setShape] = React.useState('');
  const [fabric, setFabric] = React.useState('');
  const [artist, setArtist] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [pub, setPub] = React.useState('');
  const [col, setCol] = React.useState('');
  const [prov, setProv] = React.useState('');

  const handleRef = (event) => {
    setRef(event.target.value);               
  };

  const handleShape = (event) => {
    setShape(event.target.value);               
  };

  const handleFabric = (event) => {
    setFabric(event.target.value);               
  };

  const handleArtist = (event) => {
    setArtist(event.target.value);               
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);               
  };

  const handlePub = (event) => {
    setPub(event.target.value);               
  };

  const handleCol = (event) => {
    setCol(event.target.value);               
  };

  const handleProv = (event) => {
    setProv(event.target.value);               
  };

  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>

      {/*Component that displays each 'Field Line' in the Advanced Search Form. E.g. Vase Number: Enter here (InfoIcon).*/}
      <FieldSearch name= 'vaseRef'         value={ref}       onChange={handleRef}      placeholder= "Type Vase Reference No."  title= 'Vase Reference' />
      <FieldSearch name= 'shapeName'       value={shape}     onChange={handleRef}    placeholder= "Enter Shape Name"         title= 'Shape' />
      <FieldSearch name= 'fabric'          value={fabric}    onChange={handleRef}   placeholder= "Enter Fabric Name"        title= 'Fabric' />
      <FieldSearch name= 'artistName'      value={artist}    onChange={handleRef}   placeholder= "Enter Artist Name"        title= 'Artist' />
      <FieldSearch name= 'subject'         value={subject}   onChange={handleRef}  placeholder= "Enter Vase Decription"    title= 'Subject' />
      <FieldSearch name= 'publications'    value={pub}       onChange={handleRef}      placeholder= "Enter Publication Name"   title= 'Publication Name' />
      <FieldSearch name= 'collectionName'  value={col}       onChange={handleRef}      placeholder= "Enter Collection Name"    title= 'Collection Name' />
      <FieldSearch name= 'provenanceName'  value={prov}      onChange={handleRef}     placeholder= "Enter Provenance Name"    title= 'Provenance' />
      
      {/*Component that gives user the option: 'Has Images? Any/Y/N'.*/}
      {/* 
      <Paper component="form" elevation={0} className={classes.root}>
        <FieldTitleImages>Has Images?</FieldTitleImages>
        <RadioGroup className={classes.radioGroup} row aria-label="imagequery" name="imagequery" value={value} onChange={handleRadioBtn}>
          <FormControlLabel value="any" control={<GreenRadioBtn />} label="Any" />
          <FormControlLabel value="yes" control={<GreenRadioBtn />} label="Yes" />
          <FormControlLabel value="no" control={<GreenRadioBtn />} label="No" />
        </RadioGroup>
      </Paper>
      */}

      {/*Search Button*/}
      <br/><GoldBtn width='100px' name="Search" 
      link={`/search/?vaseRef=${ref}&shapeName=${shape}&fabric=${fabric}&artistName=${artist}&subject=${subject}&fpublications=${pub}&collectionName=${col}&provenanceName=${prov}`}/> 
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
