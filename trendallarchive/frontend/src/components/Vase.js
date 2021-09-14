import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VaseTitle = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 40px;
font-weight: 400;
line-height:2.5em;
color: #3F342C;
`

const AttributeTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #3F342C;
`
const Attribute = styled(AttributeTitle)`
    font-size: 14px;
    width: 60%;
    margin-bottom: 0px;
`


const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding: 35px;
    display: absolute;
    margin-top: 70px;
`
//takes vaseID parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseID = urlParams.get('vaseID');
console.log(vaseID);

//function to call and consume the API
const Vase=()=>{
    
    const [Data,setData]=useState({
        VaseID:'',
        Fabric:'',
        Technique:'',
        Subject:'',
        Height:'',
        ArtistName:'',
        Collection:'',
        Shape:'',
        Provenance:''
    })
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/viewvase/?vaseID=${vaseID}`)//get the selected vase using the vaseID passed through the URL
            .then(res=>{
                console.log('Response from main API: ',res) //printing the response to the console
                let vaseData=res.data[0]; //add data to vaseData, then assign into each variable
                setData({VaseID:vaseData.vaseID,Fabric:vaseData.fabric,Technique:vaseData.technique,Subject:vaseData.subject, Height:vaseData.height, ArtistName:vaseData.artist_name,Collection:vaseData.collection_name,Shape:vaseData.shape_name,Provenance:vaseData.provenance_name}) //vaseData is never assigned so these variables areundefined
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

//return the vase into that was retrieved in the function
    return(
        <>

        
        <FormDiv>
           <VaseTitle>{Data.VaseID}, {Data.Fabric}</VaseTitle> 
           <Attribute><p>VASE NUMBER: {Data.VaseID}</p></Attribute> 
           <Attribute><p>Fabric: {Data.Fabric}</p></Attribute>
            <Attribute><p>Technique: {Data.Technique}</p></Attribute>
            <Attribute><p>Subject: {Data.Subject}</p></Attribute>
            <Attribute><p>Artist: {Data.ArtistName}</p></Attribute>
            <Attribute><p>Collection: {Data.Collection}</p></Attribute>
            <Attribute><p>Shape: {Data.Shape}</p></Attribute>
            <Attribute><p>Provenance: {Data.Provenance}</p></Attribute>
            <Attribute><p>Height: {Data.Height} cm</p></Attribute>
        </FormDiv>
        </>
    )
}
export default Vase;