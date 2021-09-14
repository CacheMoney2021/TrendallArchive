import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  InputBase,
  IconButton,
  TextField,
  MenuItem, 
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

<<<<<<< HEAD
//Style for the Basic Search Bar Components.
=======
const fields = [
    {
        value: 'VaseID',
        label: 'vaseID',
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

const useDropdownStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        display: 'flex',
        marginTop: '0px',
        textIndent: 15,
        height: 55,
        width: '20ch',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: '10px 0px 0px 10px',
        backgroundColor: '#F6E7CB',
        '&:hover': {
          backgroundColor: '#EBD3A5',
        },
      },
    },
}));
  
const MultilineTextFields = () => {
    const classes = useDropdownStyles();
    const [field, setField] = React.useState('VaseID');
  
    const handleChange = (event) => {
      setField(event.target.value);
    };
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-field"
            select
            value={field}
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
          >
            {fields.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </div>
      </form>
    );
}

>>>>>>> 09cb7cb02642198260ba6a6fc15948514cce0760
const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
    height: 55,
    borderRadius: '10px 10px 10px 10px',
    elevation: 0,
    alignItems: 'center',
    '& .MuiTextField-root': {
      display: 'flex',
      marginTop: '0px',
      textIndent: 15,
      height: 55,
      width: '20ch',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: '10px 0px 0px 10px',
      backgroundColor: '#F6E7CB',
      '&:hover': {
        backgroundColor: '#EBD3A5',
      },
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginRight: 10,
  },  
}));
  
//Renders Dropdown Menu with all Criteria Fields, Renders Basic Search Bar
const SearchWithDropdown = () => {
  const classes = useSearchStyles();

  /*States for the Dropdown Field and for Input Field*/
  const [field, setField] = React.useState('vaseID');
  const [input, setInput] = React.useState('');

  /*Handles the Change in the Dropdown Field*/
  const handleField = (event) => {
    setField(event.target.value);
  };

  /*Handles the Change in the Input Field*/
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  /* TO-DO: Redirect search page by pressing the 'Enter' keyboard btn 
  const keyPressInput = (event) => {
    if(event.keyCode === 13){
      return <Link to={`/search/?${field}=${input}`}/>
    }
  }
  */

  /*Dropdown Field Menu Items*/
  const fields = [
      { value: 'vaseID',      label: 'Vase Number' },
      { value: 'shape_name',  label: 'Shape' },
      /*{ value: 'Technique',   label: 'Technique' }, API View 'FilterVases' is missing Technique Attribute*/
      { value: 'fabric',      label: 'Fabric' },
      { value: 'artist_name', label: 'Artist' },
      { value: 'inscription', label: 'Inscription' }, 
      /*{ value: 'Subject',     label: 'Subject' }, API View 'FilterVases' is missing Subject */
      /*{ value: 'Publication', label: 'Publication' }, API View 'FilterVases' is missing Publication */
      { value: 'collection_name',  label: 'Collection' },
      { value: 'provenance_name',  label: 'Provenance' },
  ];

  return (
    <Paper component="form" elevation={0} className={classes.root}>

        {/* Dropdown Fields*/}
        <TextField id="outlined-select-field" select value={field} onChange={handleField} InputProps={{ disableUnderline: true }} >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Basic Search Input Bar */}
        <InputBase
          className={classes.input}
          value={input}
          onChange={handleInput}
          placeholder="Search the Trendall Archive in the selected field..."
        />

        {/* Basic Search Button */}
        <IconButton type="submit" className={classes.iconButton} aria-label="search" href ={`http://127.0.0.1:8000/search/?${field}=${input}`}>
          <SearchIcon/>
        </IconButton> 

    </Paper>
  )
}

export default SearchWithDropdown