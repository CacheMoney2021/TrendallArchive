import React from 'react';
import styled from 'styled-components';
import GoldBtn from './buttons/GoldBtn';
import './styling.css';
import Building from "../components/images/center.jpeg";

const Container = styled.div`
   justify-content: center;
   align-items: center;
   margin-bottom: 5%;
   z-index: -1;
`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const EvenFold = styled.div`
    background-color: #F6E7CB;
    padding: 5%;
`
const OddFold = styled.div`
    padding: 4%;
` 

//Display 'Contact' information
const ContactInfo=()=>{
    

    return(
        <>
        <div className= "contactInfo">
        <Container>
        <OddFold>
        <div className = "headingOdd">CONTACT US</div>
        <Wrap>
            <div>
        <h3>A.D. Trendall Research Centre</h3>
        <p> Menzies College <br/>
            La Trobe University<br/>
            Victoria 3086<br/>
            AUSTRALIA 
        </p>
        <p> T: +61 3 9479 2845<br/>
            F: +61 3 9479 1827<br/>
            E: trendall@latrobe.edu.au<br/>
            Open by appointment only.<br/>
        </p></div>
        <img src ={Building} id = "imageClass"/>
        </Wrap>
        </OddFold>
        </Container>
        </div>
        </>

    )
}
export default ContactInfo;