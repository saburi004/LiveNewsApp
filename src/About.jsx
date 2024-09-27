import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Parallax } from "react-parallax";
import paraabout from "./para1.jpeg";

import gif1 from "./assets/gif1.gif";
import gif2 from "./assets/gif2.gif";
import gif5 from "./assets/gif5.gif";

import Popup from "./Popup";
import aboutimg from "./assets/bluewhite.jpg";
import "./About.css"; // Importing the CSS file

export default function About() {
  const [popup, setPopup] = useState(false);

  const subscribe = () => {
    setPopup(true);
  };
  const [paravisible, setParavisible] = useState(false);
  useEffect(() => {
    setParavisible(true);
  }, []);

  return (
    <>
      <Row className="gifs">
        <Col lg={12} style={{ height: "300px" }}>
          <img src={aboutimg} className="about-img"></img>

          <div className="about-content">
            <p className="about-title" style={{ color: "black" }}>
              About Us
            </p>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              asperiores ut expedita quibusdam. Fugiat maxime, qui dolore
              blanditiis possimus in ducimus vel culpa sunt ut similique quia
              iste, nostrum omnis!
            </p>
          </div>
        </Col>
      </Row>

      <Container className="about-container ms-md-5 mt-5">
        <Row>
          <Col lg={6}>
            <Container className="gifs">
              <Row>
                <Col lg={6}>
                  <img src={gif1} className="gif-img"></img>
                </Col>
                <Col lg={6}>
                  <img src={gif5} className="gif-img"></img>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <img src={gif2} className="gif-img" />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={6}>
            <p className="me-5  ouraim">
              <p className="about-title ouraim">Our Aim</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quia veritatis maxime quod sed fugit saepe quaerat
              architecto accusamus nisi unde ratione iste qui veniam magni quam,
              nemo delectus. Optio omnis impedit minima sit voluptatibus
              quisquam alias beatae fuga itaque! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Debitis aperiam sint consectetur
              nam consequatur! Non minima asperiores, at, sit explicabo expedita
              porro aliquam et voluptate delectus sint voluptas tenetur enim
              dolorem est soluta quia facilis distinctio, corporis aut
              repellendus iusto reprehenderit inventore!
            </p>
          </Col>
        </Row>
      </Container>
      <Parallax
        blur={2}
        bgImage={paraabout}
        bgImageAlt="the cat"
        strength={200}
        className="ms-md-5"
      >
        <Container fluid>
          <Row>
            <Col lg={8}>
              <p className="about-title">Join the Moment</p>
              <p className="about-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                corporis quos commodi optio porro voluptatibus ex reiciendis
                repellendus voluptatem facilis.
              </p>
              <p>Subscribe our Newsletter</p>
              <p>12/08/2023</p>
            </Col>
            <Col lg={4}>
              <button
                onClick={subscribe}
                className="ms-md-3 mt-md-5 subscribe-btn"
              >
                Subscribe
              </button>
            </Col>
          </Row>
        </Container>
      </Parallax>
      {popup && (
        <div className="popup-container">
          <i
            onClick={() => setPopup(false)}
            className="fa-solid fa-xmark close-btn"
          ></i>
        </div>
      )}

      {popup && <Popup />}
    </>
  );
}
