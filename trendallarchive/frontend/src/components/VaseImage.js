import React from "react";
import {useEffect,useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import axios from 'axios';
import "./page_elements/VaseGallery.css";
// Component to make the API call to retrieve the plateRef for a given vaseRef,
// then use the plateRef combined with the blob storage URL to retrieve the image
// and print the image to the viewvase page

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 500px;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    padding: 45px;
`




//takes vaseRef parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);
//function to call and consume the API
const VaseImage=()=>{
    
  const [Data,setData]=useState({
      VaseRef:'',
      PlateRef:''

  })
  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${vaseRef}`)//get the selected vase using the vaseRef passed through the URL
          .then(res=>{
              console.log({vaseRef})
              console.log('Response from main API: ',res) //printing the response to the console
              let vaseData=res.data[0]; //add data to vaseData, then assign into each variable
              setData({VaseRef:vaseData.vaseRef,PlateRef:vaseData.plateRef})
          })
          .catch(err=>{
              console.log(err);
          })
  },[])
const plate = Data.PlateRef;
//create a const joining the beginning of URL path (to access blob storage) with the plateRef variable 
const path = "https://trendallplates.blob.core.windows.net/images/P-"+plate+".png";


//return and display the image of the vase 
  return(
      <>

      
      <FormDiv>
          <div className = "vaseDiv">
            <img src= {path} id = "vaseImage"/>
          </div>
        </FormDiv>
        </>
    )
}
export default VaseImage;

