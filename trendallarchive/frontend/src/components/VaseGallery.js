import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import "./VaseGallery.css";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import VaseOne from '../components/samplevase/P11.png';
import VaseTwo from '../components/samplevase/P12.png';
import VaseThree from '../components/samplevase/P13.png';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 300px;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    margin-left: 100px;
    margin-bottom:15px;
    padding: 45px;
`

const VaseImg = (props) => {
  return <img src={props.name} width="350px" height="auto"/>; 
}

/*
const images = [
  "https://64.media.tumblr.com/1f3258f9604b1892882525d94b55933c/7555c2e0ca73d111-66/s400x600/b4b94ed7b1b326690d37f92df769a312a0ad6d26.jpg",
  "https://64.media.tumblr.com/f3ff4c69ff6c5b0138a4ef61a5b1a858/7555c2e0ca73d111-6a/s500x750/0dc9f5b25196d538148bde737671dbf3f9a25d9c.jpg",
  "https://64.media.tumblr.com/3c75c429c95a679b1ea4a69c3a7364bf/682f25c1296a1892-50/s540x810/95e4d5ed43d88a797f2cf006657a6a12598f582e.jpg",
];
*/


const images = [
  <div className="item" data-value="1"><VaseImg name={VaseOne}/></div>,
  <div className="item" data-value="2"><VaseImg name={VaseTwo}/></div>,
  <div className="item" data-value="3"><img src={BannerVaseImage}/></div>,
  <div className="item" data-value="4"><img src={BannerVaseImage}/></div>,
  <div className="item" data-value="5"><img src={BannerVaseImage}/></div>,
];


class Gallery extends React.Component {
  state = {
    galleryItems: images.map((i) => (
      <Wrapper>
        {i}
      </Wrapper>
    ))
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
      </FormDiv>
    );
  }
}

export default Gallery;
