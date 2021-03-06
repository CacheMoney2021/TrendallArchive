import React from "react";
import {useEffect,useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import "./VaseGallery.css";
import BackBtn from '../buttons/BackBtn';
import BannerVaseImage from '../components/images/basicsearchimage.png';
import Images from "./Images.js";

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
class Gallery extends React.Component {
  // state = {
  //   galleryItems: props.images.map((i) => (
  //     <Wrapper>
  //       {i}
  //     </Wrapper>
  //   ))
  // };
  state = {
    galleryItems: 
      <Wrapper>
        <img src={`https://trendallplates.blob.core.windows.net/images/${props.image_plateref}.png`}/>
      </Wrapper>
  };

  responsive = {
    0: { items: 1 },
    1024: { items: 1 }
  };

  onSlideChange(e) {
    console.debug("Item`s position during a change: ", e.item);
    console.debug("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.debug("Item`s position after changes: ", e.item);
    console.debug("Slide`s position after changes: ", e.slide);
  }

  render() {
    return (
        <FormDiv>
          <BackBtn/>
          <div className="img-gallery">
            <AliceCarousel
              items={this.state.galleryItems}
              responsive={this.responsive}
              autoPlayInterval={2000}
              autoPlayDirection="ltr"
              autoPlay={false}
              fadeOutAnimation={true}
              playButtonEnabled={false}
              disableAutoPlayOnAction={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            />
          </div>
        </FormDiv>
    );
  }
}

const VaseImg = (props) => {
  return <img src={props.name} width="500px" height="auto"/>; 
}
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);


const getImg = (vaseRef)=>{
  const [Data,setData]=useState({
      plateRef:''
  })
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/getplate/?vaseRed=${vaseRef}`)//get the selected vase using the vaseID passed through the URL
        .then(res=>{
            console.log('Response from main API: ',res) //printing the response to the console
            let plateData=res.data[0]; //add data to vaseData, then assign into each variable
            console.log("https://trendallplates.blob.core.windows.net/images/" + plateData.plateRef +".png");
            setData({plateRef:plateData.plateRef}) 
        })
        .catch(err=>{
            console.log(err);
        })
  },[])
  return(
    <>
      {Data.plateRef}
      <Gallery image_plateref={this.state.Data.plateRef} />
    </>
  )
}

const images = [
<img src={`https://trendallplates.blob.core.windows.net/images/${getImg.plateRef}.png`}/>//plateRef is returning as undefined
];



export default Gallery;