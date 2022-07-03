import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Slider from 'react-slick';

const Carousel = styled(Slider)`

  margin-top: 20px;

  ul li button{
    &:before{
      font-size: 10px;
      color: rgb(180, 158, 171);
    }
  }
  li.slick-active button::before{
    color: white;
  }

  .slick-list {
  
    overflow: visible;
    
  }
  
`
const Wrap = styled.div`
img{

  border-radius: 4px;

}

`
function Imageslider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/slider-badag.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/slider-badag.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/slider-badag.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/slider-badag.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Web-Ui/main/slider-badag.jpg'></img>
      </Wrap>

    </Carousel>
  )
}

export default Imageslider