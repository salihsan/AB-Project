import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.css";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      width: true,
      speed: 300,
      slickNext: true,
      slickPrev: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: true,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={banner1} alt=" " />
          </div>
          <div>
            <img src={banner2} alt=" " />
          </div>
          <div>
            <img src={banner3} alt=" " />
          </div>
        </Slider>
      </div>
    );
  }
}
