import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundimg from "../../assets/footerBN.webp";
import { Card } from "antd";
function FooterBanner() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        position: "relative",
        minWidth: "600px",
      }}
    >
      <Row>
        <Col md={{ span: 7, offset: 1 }} style={{ marginTop: "10vh" }}>
          <Card style={{ background: "none", border: "none" }}>
            <figure >
              <blockquote class="blockquote">
                <p>
                  "Help people move
                  <cite title="Source Title" className="fw-bold">
                    {" "}
                    safety
                  </cite>{" "}
                  and{" "}
                  <cite title="Source Title" className="fw-bold">
                    conveniently
                  </cite>
                  ."
                </p>
                <p>
                  "Maintain{" "}
                  <cite title="Source Title" className="fw-bold">
                    {" "}
                    safety
                  </cite>{" "}
                  and comply with traffic regulations."
                </p>
                <p>
                  "Always provide{" "}
                  <cite title="Source Title" className="fw-bold">
                    {" "}
                    quality
                  </cite>{" "}
                  and{" "}
                  <cite title="Source Title" className="fw-bold">
                    reliable
                  </cite>{" "}
                  services."."
                </p>
              </blockquote>
              <figcaption class="blockquote-footer" >
                Uber's business <cite title="Source Title">philosophy</cite>
              </figcaption>
            </figure>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterBanner;
