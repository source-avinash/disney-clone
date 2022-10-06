import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider

const Carousel = styled(Slider)`
  margin-top: 10px;

  ul li button{
    &:before{
      front-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list{
    overflow: visible;
  }

  button{
    z-index: 1;
  }
`

const Wrap = styled.div`

  cursor: pointer;
  img{
      border: 4px solid transparent;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      box-shadowing: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      trasition-duration: 300ms;

      &:hover{
        border: 4px solid rgb(249, 249, 249, 0.8);
      }
  }

`