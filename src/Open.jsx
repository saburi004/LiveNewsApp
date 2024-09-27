import React from "react";
import openbg from "./assets/openbg.avif";
import { Container, Row, Col, Button } from "react-bootstrap";
import timeslogo from "./timeslogo.png";

import "./Open.css";

import png4 from "./assets/png4.png";

import png7 from "./assets/png7.png";
import png10 from "./assets/pngconnected.png";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Open() {
  const navigate = useNavigate();
  return (
    <>
      <Col lg={2}>
        <button onClick={() => navigate("/abc")}>Get Updated</button>
      </Col>
      <Container fluid>
        <img
          src={openbg}
          className="openbg"
          style={{ zIndex: "-1" }}
          width={"100%"}
        ></img>
        <img
          className="rotate "
          src={png10}
          style={{
            position: "absolute",
            top: "180px",
            width: "900px",
            height: "900px",
            left: "280px",
          }}
        ></img>

        <Row style={{ position: "absolute", top: "180px" }}>
          <Col lg={4}> </Col>
          <Col lg={4} style={{ textAlign: "center" }}>
            <img
              src={timeslogo}
              style={{ zIndex: "6" }}
              height={"30%"}
              width={"100%"}
            ></img>
            <img
              className="ouraim png7"
              src={png7}
              height={"180%"}
              width={"60%"}
              style={{
                position: "absolute",
                top: "-250px",
                right: "20px",
                zIndex: "1",
              }}
            ></img>

            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              odio dolores numquam explicabo praesentium enim voluptatum,
              molestias unde voluptas hic?
            </p>
          </Col>

          <img
            className="gifs png7"
            src={png4}
            style={{ position: "absolute", top: "100px", width: "98%" }}
          ></img>
        </Row>
        <Col
          lg={2}
          style={{ top: "400px", position: "absolute", left: "750px" }}
        >
          <button onClick={() => navigate("/abc")}>Get Updated</button>
        </Col>
      </Container>
    </>
  );
}
