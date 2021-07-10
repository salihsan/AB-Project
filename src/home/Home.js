import React from "react";
import Banner from "../banner/Banner";
import Product from "../product/Product";
import { Container } from "react-bootstrap";
import "./Home.css";
import Price from "../price/Price";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container fluid className="card-col-bg">
        <Product />
      </Container>
      <Container fluid className="card-col-bg">
        <Price />
      </Container>
    </div>
  );
};

export default Home;
