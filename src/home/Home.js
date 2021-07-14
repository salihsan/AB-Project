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
      <Container fluid>
        <Product />
      </Container>
      <Container fluid>
        <Price />
      </Container>
    </div>
  );
};

export default Home;
