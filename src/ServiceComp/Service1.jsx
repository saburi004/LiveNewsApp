import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import gif7 from "../assets/gif7.gif";
import gif6 from "../assets/gif6.gif";

export default function Service1() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <div
              clssName="card"
              style={{
                width: "18rem",
                padding: "20px",
                background:
                  "linear-gradient(to bottom, white, rgb(196, 244, 255))",
              }}
            >
              <img
                src={gif6}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">Live News</h5>
                <p clssName="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" clssName="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              clssName="card"
              style={{
                width: "18rem",
                padding: "20px",
                background:
                  "linear-gradient(to bottom, white, rgb(196, 244, 255))",
              }}
            >
              <img
                src={gif7}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">E-Paper</h5>
                <p clssName="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" clssName="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              clssName="card"
              style={{
                width: "18rem",
                padding: "20px",
                background:
                  "linear-gradient(to bottom, white, rgb(196, 244, 255))",
              }}
            >
              <img
                src={gif6}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">Latest Updates</h5>
                <p clssName="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" clssName="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
