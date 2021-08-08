import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  InputBase,
  IconButton,
  TextField,
  MenuItem, 
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const fields = [
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

const useSearchStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '50%',
      height: 55,
      borderRadius: '10px 10px 10px 10px',
      elevation: 0,
      alignItems: 'center',
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

  return (
    <Paper component="form" elevation={0} className={classes.root}>
        <MultilineTextFields/>

        <InputBase
          className={classes.input}
          placeholder="Search the Trendall Archive in the selected field..."
          inputProps={{ 'aria-label': 'search trendall archive' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        
    </Paper>
  )
}

export default SearchWithDropdown