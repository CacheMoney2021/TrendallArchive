import React, { Component } from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchPageHeader from "../components/header/SearchPageHeader";
import Footer from '../components/page_elements/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
} from '@material-ui/core';
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

const PrintDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 45px;
    margin-left: 50%;
    display: absolute;
`

const VaseTitle = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 30px;
font-weight: 100;
line-height:3em;
color: #3F342C;
`

const FieldTitle = styled(VaseTitle)`
font-size: 16px;
display: flex;
width: 36%;
margin-bottom: 0px;
line-height: 2em;
`


//hard coded content as a placeholder
const HardCoded = () => {
  return (
    <PrintDiv>
    <VaseTitle> Vase Heading</VaseTitle> 
    <FieldTitle> Vase Number:</FieldTitle>
    <FieldTitle> Fabric:</FieldTitle>
    <FieldTitle> Technique:</FieldTitle>
    <FieldTitle> Shape:</FieldTitle>
    <FieldTitle> Provenance:</FieldTitle>
    <FieldTitle> Inscription:</FieldTitle>
    <FieldTitle> Artist:</FieldTitle>
    <FieldTitle> Collection:</FieldTitle>
    </PrintDiv>
  );
}


// function to fetch VaseApiDetails. Fetch() requires URL of API, 
// but we only have local host URL though, so not sure if this is a valid URL?
// not yet functioning or doing anything. This has public IP URL
function VaseApiDetails(){
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch("http://118.210.204.237/viewvaseapi/")
    .then(resp => resp.json())
    .then(setData)
    .catch(console.error);
  },[])

  if (data){
    return <div> JSON.stringify(data)</div>;
  }
  return "hello";
}

//how to call this? 
//Local host URL
// function componentDidMount(){
//   fetch('http://127.0.0.1:8000/viewvaseapi/')
//       .then(res=> res.json())
//       .then(({ data }) => {
//           this.setState({
//               isLoaded: true,
//               items: data,
//           })
//       });
// }
// const VaseListing = data.map((elem) => {
//   return {
//     id: elem.id,
//     shape: elem.shape,
//     fabric: elem.fabric
//   }
// })



export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
            <SearchPageHeader/>
            <HardCoded/>
            <Footer/>

        </div>
      ); 
    }
}