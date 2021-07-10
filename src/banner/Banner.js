import React from "react";
import "./Banner.css";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";
import Banner4 from "../images/carousel/4.jpg";
import { Carousel } from "react-bootstrap";
const images = [
  {
    image: Banner1,
    btnLabel: "Find out more",
    topic: "First slide label",
    description: "Internet banking for banking transactions wherever you are",
  },
  {
    image: Banner2,
    btnLabel: "Find out more",
    topic: "First slide label",
    description: "To Add value for your money",
  },
  {
    image: Banner3,
    btnLabel: "Find out more",
    topic: "First slide label",
    description: "Summer is  new places",
  },
  {
    image: Banner4,
    btnLabel: "Find out more",
    topic: "First slide label",
    description: "Summer is here vacation loan to see new places",
  },
];
const Banner = () => {
  return (
    <div>
      <Carousel nextLabel="" prevLabel="">
        {images.map((item) => {
          const { image, btnLabel, description } = item;
          return (
            <Carousel.Item interval={20000}>
              <img className="d-block w-100 " src={image} alt="slide" />
              <Carousel.Caption>
                <div className="w-50 ms-5 text-center">
                  <div>
                    <button className="btn btn-danger text-end">
                      {btnLabel}
                    </button>
                  </div>
                  <p className=" text-dark mt-3 carousel-desc-text ">
                    {description}
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Banner;
