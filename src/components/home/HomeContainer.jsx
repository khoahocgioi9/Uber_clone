import { Container } from "@mui/material";
import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import backgroundimg from "../../assets/none.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";

function HomeContainer() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          minWidth: "100% ",
        }}
      >
        <Row>
          <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "10vh" }}>
            <img
              src="https://autopro8.mediacdn.vn/2018/su-that-uber-2-1515939230424.jpg"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Col>
          <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "10vh" }}>
            <h1>Uber Rentals</h1>
            <p>
              Book Rentals to save time with one car and driver for your
              muulti-stop trips
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "10vh" }}>
            <h1>Uber Intercity</h1>
            <p>
              Book Intercity to head outstation everytime in convenient and
              afffordable cars
            </p>
          </Col>
          <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "10vh" }}>
            <img
              src="https://cdnimg.vietnamplus.vn/uploaded/bojoka/2020_09_09/ubergreen.jpg"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 1 }} style={{ marginTop: "10vh" }}>
            <h1>Focused on safety, wherever you go</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "6vh" }}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Col>
          <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "6vh" }}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "1vh" }}>
            <h4 style={{ marginTop: "5vh" }}>Our commitment to your safety</h4>
            <p>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
          </Col>
          <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "1vh" }}>
            <h4 style={{ marginTop: "5vh" }}>
              Setting 10,000+ cities in motion
            </h4>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 1 }} style={{ marginTop: "5vh" }}>
            <PeopleAltIcon />
            <h5>About us</h5>
            <p>
              Find out how we started, what drives us, and how we’re reimagining
              how the world moves.
            </p>
          </Col>
          <Col
            md={{ span: 3, offset: 0 }}
            style={{ marginTop: "5vh", marginLeft: 70 }}
          >
            <ArticleIcon />
            <h5>Newsroom</h5>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
          </Col>
          <Col
            md={{ span: 3, offset: 0 }}
            style={{ marginTop: "5vh", marginLeft: 70 }}
          >
            <HomeIcon />
            <h5>Global citizenship</h5>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
          </Col>
        </Row>
        <Col style={{ background: "#f0f0f0" }}>
          <Row>
            <Col md={{ span: 8, offset: 1 }} style={{ marginTop: "10vh" }}>
              <h1>There’s more to love in the apps</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "5vh" }}>
              <Card>
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png"
                  style={{ width: "25%", height: "25%", margin: 20 }}
                ></img>
              </Card>
            </Col>
            <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "5vh", marginBottom:"5vh"}}>
              <Card >
                  <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png"
                    style={{ width: "25%", height: "25%", margin: 20 }}
                  ></img>
             
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default HomeContainer;
