import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vector1 from "./assets/servicebg.webp";
import Service1 from "./ServiceComp/Service1";
import Service2 from "./ServiceComp/service2";
import Service3 from "./ServiceComp/Service3";
import serviceimg from "./serviceimg.gif";

export default function Services() {
  const [service, setService] = useState("service1");
  const [underline, setUnderline] = useState(false);

  const click = (ser) => {
    setService(ser);
  };

  return (
    <>
      <Col lg={12}>
        <img src={vector1} width={"100%"} height={"300px"}></img>
      </Col>

      {/* what we propvide */}

      <Container style={{ textAlign: "center" }} className="ms-md-5">
        <Row className="mt-5">
          <Col lg={12}>
            <p style={{ fontSize: "30px", color: "black", fontWeight: "800" }}>
              What we provide{" "}
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore atque illo amet fuga ad blanditiis. Libero veniam quidem
              delectus officia? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Itaque eligendi quasi laudantium ex tempora esse
              eum aliquam tenetur facere pariatur.
            </p>
            <Row>
              <Col lg={4}>
                <p
                  onClick={() => click("service1")}
                  style={{
                    borderBottom:
                      service === "service1"
                        ? "3px solid rgb(22, 178, 242) "
                        : "none",
                    cursor: "pointer",
                    padding: "20px",
                  }}
                >
                  E-Papers
                </p>
              </Col>
              <Col lg={4}>
                <p
                  onClick={() => click("service2")}
                  style={{
                    borderBottom:
                      service === "service2"
                        ? "3px solid rgb(22, 178, 242)"
                        : "none",
                    cursor: "pointer",
                    padding: "20px",
                  }}
                >
                  E-News
                </p>
              </Col>
              <Col lg={4}>
                <p
                  onClick={() => click("service3")}
                  style={{
                    borderBottom:
                      service === "service3"
                        ? "3px solid rgb(22, 178, 242)"
                        : "none",
                    cursor: "pointer",
                    padding: "20px",
                  }}
                >
                  HardPapers
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ position: "relative", zIndex: "1" }} className="mt-5">
          <Col
            style={{
              backgroundColor: "rgb(175, 228, 250)",
              height: "170px",
              width: "100%",
            }}
            lg={12}
          ></Col>
        </Row>
        <Row
          className="ms-5"
          style={{
            position: "relative",
            top: "-70px",
            zIndex: "2",
            width: "100%",
          }}
        >
          {service === "service1" ? <Service1 /> : ""}
          {service === "service2" && <Service2 />}
          {service === "service3" && <Service3 />}
        </Row>
      </Container>
      <Container>
        <Row className="ms-md-5">
          <Col lg={6}>
            <img
              src={serviceimg}
              height={"90%"}
              width={"100%"}
              style={{ borderRadius: "17px" }}
            ></img>
          </Col>
          <Col lg={6}>
            {/* <img src={servicetexture} height={"440px"} width={"100%"}></img> */}
            <p
              style={{
                fontSize: "30px",
                color: "black",
                fontWeight: "800",
                position: "relative",
                top: "50px",
              }}
            >
              Our Editors Work
            </p>
            <p style={{ position: "relative", top: "90px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur illo nihil accusamus. Consequatur deserunt impedit
              officiis praesentium hic? Alias minus distinctio explicabo
              provident reiciendis dolores impedit aut quasi repellat et?
            </p>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ position: "relative", top: "120px" }}
            >
              Primary button
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
