import React from "react";
import { Container, Nav, Navbar, Col } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="">
      <Container
        style={{
          borderTop: "2px solid #f15039",
          maxWidth: "70vw",
          paddingTop: "4px",
        }}
      >
        <Container className="d-flex">
          <Col md={10}>
            <Nav defaultActiveKey="/home">
              <Nav.Item className="nav-item">
                <Nav.Link href="/home" className="nav-links-active">
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-1" className="nav-links">
                  Option 2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-1" className="nav-links">
                  Option 2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-1" className="nav-links">
                  Option 2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey="link-1" className="nav-links">
                  Option 2
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={4}>
            <Button
              circular
              color="facebook"
              icon="facebook"
              className="social-media-icons"
            />
            <Button
              circular
              color="grey"
              icon="twitter"
              className="social-media-icons"
            />
            <Button
              circular
              color="linkedin"
              icon="linkedin"
              compact
              className="social-media-icons"
            />
            <Button
              circular
              color="google plus"
              icon="google plus"
              className="social-media-icons"
            />
          </Col>
        </Container>
      </Container>

      {/* 2. kisim */}
      <Navbar bg="light">
        <Container></Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
