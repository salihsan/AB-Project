import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import logo from "../images/logoabsonBig.png";
import {} from "./TopNavbar2.css";

const TopNavbar2 = () => {
  return (
    <div className="nav-main-top">
      <Container fluid className="nav-main-bottom">
        <Container
          style={{
            borderTop: "3px solid #f15039",
            // maxWidth: "70vw",
            paddingTop: "2px",
          }}
        >
          <Row>
            <Col xs={4} md={12} className="d-none d-md-block">
              <FirstMenu />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="pt-4 pb-1 d-flex justify-content-md-center text-center text-md-start">
          <Col md={4} className="">
            <img
              src={logo}
              alt="logo"
              style={{ height: "90px", width: "200px" }}
            />
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-grid align-content-md-center align-content-lg-center"
          >
            <SecondMenu />
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <Container className="">
          <Row>
            <Col>
              <ThirdMenu />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

const FirstMenu = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/" className="first-menu-icons">
        <Nav.Item className="d-flex flex-row">
          <Icon name="phone"> </Icon>
          0850 255 44 66
        </Nav.Item>
        <Nav.Item className="d-flex flex-row">
          <Icon name="facebook f"></Icon>
          <Nav.Link>facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex flex-row">
          <Icon name="twitter"></Icon>
          <Nav.Link>Twitter</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex flex-row">
          <Icon name="instagram"> </Icon>
          <Nav.Link>Instagram</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const SecondMenu = () => {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="justify-content-center justify-content-md-end"
      >
        {/* <Nav.Item className="nav-links">
          <Nav.Link href="/home">
            <Icon name="conversation"> </Icon>
            About Us
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="university"> </Icon>
            Advantage
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="mobile"> </Icon>
            Mobile Bank
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link eventKey="link-1">
            <Icon name="user alternate"> </Icon>
            Sign in
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-links">
          <Nav.Link to="/Register"  eventKey="link-1">
            <Icon name="envelope"> </Icon>
            Register
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const ThirdMenu = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="light"
        // variant="light"
        style={{ marginBottom: "-5px" }}
      >
        <Container className="p-0">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="text-center bg-primary"
          />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav a">
                About Us
              </Nav.Link>
              <Nav.Link href="/">Product</Nav.Link>
              <Nav.Link href="/">Package</Nav.Link>
              <Nav.Link href="/">Location</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar2;
