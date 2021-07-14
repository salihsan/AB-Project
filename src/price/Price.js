import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import "./Price.css";
import price1 from "../images/price/_01money.webp";
import price2 from "../images/price/_02graph.webp";
import price3 from "../images/price/_03finance.webp";

const priceData = [
  {
    title: "Basic",
    subtitle: "For everybody ",
    image: price1,
    monthlyPrice: "5.50% ",
    packages: [
      "10 user included",
      "2GB storage",
      "Help center acces",
      "Email support",
    ],
  },
  {
    title: "Premium",
    subtitle: "Most Populer",
    image: price2,
    monthlyPrice: "7.50% ",
    packages: [
      "20 user included",
      "10GB storage",
      "Help center acces",
      "Priority email support",
    ],
  },
  {
    title: "Advance",
    subtitle: "Most interprising",
    image: price3,
    monthlyPrice: "9.50% ",
    packages: [
      "50 user included",
      "30GB storage",
      "Help center acces",
      "Phone & email support",
    ],
  },
];

const Price = () => {
  return (
    <Container className="mt-1">
      <Row>
        <p className="h2 fw-bold text-center my-xs-3 my-md-5">Price</p>
        <p className="h3 text-center my-xs-3 my-md-5 text-black-50">
          The right banking package for you.Get the privilege of choose between
          our many banking Packages 'and enjory services that will reward you
          and fit your lifestyle.
        </p>
      </Row>
      <Row className="d-flex justify-content-center ">
        {priceData.map((item) => {
          const { title, subtitle, image, monthlyPrice, packages } = item;
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center  rounded p-3"
            >
              <Card
                className="card-stil bg-dark-sa"
                style={{ width: "22rem", marginBottom: "25px" }}
              >
                <Card.Title className="fw-bolder text-center ">
                  <h1 className="fw-bolder text-center text-secondary text-title-h1">
                    {title}
                  </h1>
                </Card.Title>
                <Card.Title className="p-3  text-center text-title-h1">
                  {subtitle}
                </Card.Title>
                <Card.Img src={image} className="product-image" />
                <Card.Title className="p-3 bg-monthlyPrice">
                  <h2 className="fw-bolder text-center ">{monthlyPrice}/mo</h2>
                </Card.Title>
                <ListGroup>
                  {packages.map((Package) => {
                    return (
                      <ListGroupItem className="py-1 card-properies-list d-flex justify-content-center package-list-items">
                        <Card.Link href="#" className="product-card-link">
                          <p className="package-list-items">
                            <h5>{Package}</h5>
                          </p>
                        </Card.Link>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
                <Card.Body className="bg-booknow">
                  <Card.Link className="product-details d-flex align-items-center justify-content-center text-light fw-bold ">
                    <p className="d-flex  justify-content-start align-items-center">
                      <Icon name="save" className="icon-card icon-save "></Icon>
                      <span className="px-1 fw-bold text-center text-dark">
                        <h3 className="text-light fw-bold text-center">
                          BOOK NOW
                        </h3>
                      </span>
                    </p>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Price;
