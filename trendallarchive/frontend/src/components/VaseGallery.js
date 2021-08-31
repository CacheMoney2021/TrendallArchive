import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import "./VaseGallery.css";

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
    padding: 45px;
`

const VaseImg = (props) => {
  return <img src={props.name} width="350px" height="auto"/>; 
}

const images = [
  "1",
  "2",
  "3",
];

/*

const items = [
  <div className="item" data-value="1"><VaseImg name={VaseOne}/></div>,
  <div className="item" data-value="2"><VaseImg name={VaseTwo}/></div>,
  <div className="item" data-value="3"><img src={BannerVaseImage}/></div>,
  <div className="item" data-value="4"><img src={BannerVaseImage}/></div>,
  <div className="item" data-value="5"><img src={BannerVaseImage}/></div>,
];


*/

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
