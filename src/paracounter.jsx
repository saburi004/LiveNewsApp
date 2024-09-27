import React from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

import { Parallax } from "react-parallax";
// import bluewhite from "./para5.jpg";
import logo2 from "./logo2.png";

export default function Paracounter() {
  return (
    <Container>
      <Row>
        <Parallax
          blur={2}
          // bgImage={bluewhite}
          bgImageAlt="the cat"
          strength={200}
          style={{ borderRadius: "20px" }}
        >
          <Container>
            <Row>
              <Col lg={3} style={{}}>
                <Row>
                  <Col lg={3} className="ms-5" style={{ padding: "40px" }}>
                    <label style={{ fontSize: "40px" }}>+</label>
                    <CountUp
                      end={100}
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    />

                    <Row>
                      <p
                        style={{
                          fontSize: "40px",
                          color: "white",
                          fontWeight: "bolder",
                        }}
                      >
                        Follower
                      </p>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col lg={3} className="ms-5" style={{ padding: "40px" }}>
                    <i
                      class="fa-solid fa-plus"
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    ></i>
                    <CountUp
                      end={100}
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    >
                      Team
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col
                lg={6}
                style={{
                  backdropFilter: "blur(10px)",
                  boxShadow: "1px 1px 5px lack",
                }}
              >
                <Row
                  className="mt-5"
                  style={{ backgroundColor: "rgba(230, 230, 230)" }}
                >
                  <img src={logo2} height={"60px"}></img>
                </Row>
                <Row className="mt-5">
                  <div
                    style={{
                      backgroundColor: "white",
                      zIndex: "3",
                      borderRadius: "30px",
                    }}
                  >
                    Join Hindustan Times Create free account and unlock exciting
                    features like Newsletters, Alerts and Recommendations Get
                    personalised news and exciting deals Bookmark the stories
                    you want to read later REGISTER FOR FREE Already have an
                    account? Sign In SKIP Enjoy unlimited access Subscribe Now!
                    Get features like ad-free-icon Ad lite A Minimal Ad
                    Experience premium-icon-1 HT Premium Articles Expertly
                    crafted articles quick-read-icon-1 Quickreads Segment News
                    brief in summary format epaper-icon-1 HT E-paper Access
                    digital news experience
                  </div>
                  <br />
                  <br />
                </Row>
              </Col>

              <Col lg={3}>
                <Row>
                  <Col lg={3} className="ms-5" style={{ padding: "40px" }}>
                    <i
                      class="fa-solid fa-plus"
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    ></i>
                    <CountUp
                      end={100}
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    >
                      Follower
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={3} className="ms-5" style={{ padding: "40px" }}>
                    <i
                      class="fa-solid fa-plus"
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    ></i>
                    <CountUp
                      end={100}
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "40px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    >
                      Team
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          {/* <Col lg={3} style={{ padding: "100px" }}>
            <i
              class="fa-solid fa-plus"
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            ></i>
            <CountUp
              end={100}
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            />
            <p
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            >
              Viewr
            </p>
          </Col>
          <Col lg={3} style={{ padding: "100px" }}>
            <i
              class="fa-solid fa-plus"
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            ></i>
            <CountUp
              end={100}
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            />
            <p
              style={{ fontSize: "40px", color: "white", fontWeight: "bolder" }}
            >
              Readers
            </p>
          </Col> */}
        </Parallax>
      </Row>
    </Container>
  );
}
