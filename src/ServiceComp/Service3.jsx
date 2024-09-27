import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import gif2 from "../assets/gif2.gif";

export default function Service3() {
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
                src={gif2}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">Card title</h5>
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
                src={gif2}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">Card title</h5>
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
                src={gif2}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "17px",
                }}
                clssName="card-img-top"
              />
              <div clssName="card-body">
                <h5 clssName="card-title">Card title</h5>
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
