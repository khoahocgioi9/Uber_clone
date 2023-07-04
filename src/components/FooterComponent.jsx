import { Layout } from "antd";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Footer } = Layout;

function FooterComponent() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <Row>
          <Col md={4}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: 25,
              }}
            >
              UBER
            </Link>
            <p>
              Uber is a ridesharing and food delivery company operating
              worldwide.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: info@uber.com
              <br />
              Phone: +1-123-456-7890
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="https://www.facebook.com/uber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/uber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/uber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 Uber. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default FooterComponent;
