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
    font-size: 16px;
    display: flex;
    width: 36%;
    margin-bottom: 0px;
`
const AttributeHeading = styled(AttributeTitle)`
    font-size: 17px;
    font-weight: 300;
    display: flex;
    width: 36%;
    margin-bottom: 0px;
`
const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding: 45px;
    display: absolute;
`

const Vase=()=>{
    
    const [Data,setData]=useState({
        VaseID:'',
        Fabric:'',
        Technique:'',
        Subject:'',
        Height:''
    })
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/viewvaseapi/')
            .then(res=>{
                console.log('Response from main API: ',res) //printing the response to the console
                console.log('Home Data: ',res.data) //this returns undefined to the console. this is where the issue is. 
                let vaseData=res.data[0]; //add data tovaseData, then assign into each variable
                setData({VaseID:vaseData.vaseID,Fabric:vaseData.fabric,Technique:vaseData.technique,Subject:vaseData.subject, Height:vaseData.height}) //vaseData is never assigned so these variables areundefined
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
        <FormDiv>
           <VaseTitle>{Data.VaseID}, {Data.Fabric}</VaseTitle> 
           <Attribute><p>VASE NUMBER: {Data.VaseID}</p></Attribute> 
           <Attribute><p>Fabric: {Data.Fabric}</p></Attribute>
            <Attribute><p>Technique: {Data.Technique}</p></Attribute>
            <Attribute><p>Subject: {Data.Subject}</p></Attribute>
            <Attribute><p>Height: {Data.Height} cm</p></Attribute>
        </FormDiv>
        </>
    )
}
export default Vase;