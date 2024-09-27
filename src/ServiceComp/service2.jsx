import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import gif9 from "../assets/gif9.gif";
export default function Service2() {
  return (
    <>
      <Container>
        <Row className="ms-3">
          <Col lg={12}>
            <div
              clssName="card"
              style={{
                width: "68rem",
                padding: "20px",
                background:
                  "linear-gradient(to bottom, white, rgb(196, 244, 255))",
              }}
            >
              <img
                src={gif9}
                style={{
                  height: "80%",
                  width: "80%",
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
