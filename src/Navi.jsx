import React, { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import "./Navi.css";
import logo2 from "./logo2.png";
import Signin from "./Signin";
import "animate.css";

export default function Navi() {
  const [date, setDate] = useState(new Date());

  // Update date every second
  setInterval(() => {
    const currentDate = new Date();
    setDate(currentDate);
  }, 1000);

  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(date);

  return (
    <>
      <div className="container-fluid contain d-flex justify-content-around align-items-center">
        {/* left div */}

        <div className="leftdiv d-flex justify-content-between flex-column">
          <div className="dat">
            <h6 style={{ color: "white" }}>{formattedDate}</h6>
          </div>
          <div className="indiv d-flex align-items-center">
            <input type="text" className=" searchin form-control " />
            <i className=" non fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* image div */}

        <div className="imgdiv">
          <img
            src={logo2}
            className="img-thumbnail logoimg animate__animated animate__bounceInDown"
            style={{ backgroundColor: "rgb(154, 220, 255)" }}
          />
        </div>

        {/* rightdiv */}

        <div className="rightdiv d-flex justify-content-between flex-column">
          <div className="d-flex justify-content-between flex-row align-items-center ">
            <Link to="/Signin">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-user iconusr"
              ></i>{" "}
            </Link>
            <Link to="/Signin">
              <label style={{ color: "white" }}>Sign-in</label>
            </Link>
            <Link to="Services">
              <i
                style={{ color: "white" }}
                className="fa-solid  fa-newspaper iconpaper"
              ></i>
            </Link>
            <Link to="/Services">
              <label style={{ color: "white" }}>Services</label>
            </Link>
            <Link>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-q iconquiz"
              ></i>
            </Link>
            <Link to="/About">
              <label style={{ color: "white" }}>About us</label>
            </Link>
          </div>
          <div className=" freetrial d-flex flex-column">
            <p style={{ color: "white" }} className="non">
              Start your free trial Now!
              <button className="btn btn-primary btn-sm mt-2 non mx-3">
                Start
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* navbar */}

      <Navbar
        expand="lg"
        className="bg-body-tertiary w-100 "
        style={{
          position: "sticky",
          marginTop: "360px",
          zIndex: "3",
          color: "black",
        }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-between w-100">
              <NavLink>
                <Link className="links" to="/sports">
                  Sports
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/science">
                  Science
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/business">
                  Business
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/health">
                  Health
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/health">
                  Cricket
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/health">
                  Lifestyle
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/health">
                  Education
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/health">
                  Astrology
                </Link>
              </NavLink>
              <NavLink>
                <Link className="links" to="/technology">
                  Technology
                </Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
