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
import ShapeList from "../components/terms_lists/ShapeList";

const TermsDiv = styled(FormDiv)`
    background-color: white;
    margin-top: 50px;
    height: 100%;
    border-radius: 5px;
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

const TermsTitle = styled(AdvancedSearchTitle)`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 0px;
`

const Terms = styled(FieldTitle)`
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
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


const FieldSearch = (props) => {
  const classes = useSearchStyles();

  //A function to take in the name of an imported image and return it as a styled image
  function Icon(props){
    return <img src={props.name} width="auto" height="20px"/>; 
  }

  return (
    <div>
    <Paper component="form" elevation={0} className={classes.root}>
      <FieldTitle>{props.title}</FieldTitle>
      <Input 
        placeholder={props.placeholder}
        name={props.name} 
        value={props.value}
        onChange={props.onChange}
        fullWidth  
      />
      
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Icon name={InfoIcon}/>
      </IconButton>
      </Paper>
      </div>
  )
}

//Advanced Search Form Component. Includes 'Search' Button.
const AdvancedForm = () => {
  const classes = useSearchStyles();

  const [imgOption, setimgOption] = React.useState('any');
  const handleRadioBtn = (event) => {
    setimgOption(event.target.value);
  };

  const [state, setState] = React.useState({
    ref: "",
    shape: "",
    fabric: "",
    artist: "",
    subject: "",
    pub: "",
    col: "",
    prov: ""
  })

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>

      {/*Component that displays each 'Field Line' in the Advanced Search Form. E.g. Vase Number: Enter here (InfoIcon).*/}
      <FieldSearch name= 'ref'     value={state.ref}     onChange={handleChange}  placeholder= "Type Vase Reference No."  title= 'Vase Reference' />
      <FieldSearch name= 'shape'   value={state.shape}   onChange={handleChange}  placeholder= "Enter Shape Name"         title= 'Shape' />
      <FieldSearch name= 'fabric'  value={state.fabric}  onChange={handleChange}  placeholder= "Enter Fabric Name"        title= 'Fabric' />
      <FieldSearch name= 'artist'  value={state.artist}  onChange={handleChange}  placeholder= "Enter Artist Name"        title= 'Artist' />
      <FieldSearch name= 'subject' value={state.subject} onChange={handleChange}  placeholder= "Enter Vase Decription"    title= 'Subject' />
      <FieldSearch name= 'pub'     value={state.pub}     onChange={handleChange}  placeholder= "Enter Publication Name"   title= 'Publication Name' />
      <FieldSearch name= 'col'     value={state.col}     onChange={handleChange}  placeholder= "Enter Collection Name"    title= 'Collection Name' />
      <FieldSearch name= 'prov'    value={state.prov}    onChange={handleChange}  placeholder= "Enter Provenance Name"    title= 'Provenance' />
    


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
      link={`/search/?vaseRef=${state.ref}&shapeName=${state.shape}&fabric=${state.fabric}&artistName=${state.artist}&subject=${state.subject}&fpublications=${state.pub}&collectionName=${state.col}&provenanceName=${state.prov}`}/> 
    </FormDiv>
  );
}

const TermsDictionary = () => {

  return (
    <TermsDiv>
      <TermsTitle fontStyle="bold">Shape Terms</TermsTitle>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms>
      <Terms>Bell-krater</Terms> 
      <Terms>Bell-krater</Terms>
      <ShapeList/>
    </TermsDiv>
  )
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
              <TermsDictionary/>
            </PageContainer>
          <Footer/>
        </div>
      ); 
    }
  }


