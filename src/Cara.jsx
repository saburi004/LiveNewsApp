import React from "react";
import hori5 from "./horiimg5.gif";

import hori4 from "./horiimg4.webp";

export default function Cara() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ position: "absolute", top: "0px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={hori5}
              className="d-block w-100"
              alt="..."
              style={{ height: "180px", maxWidth: "100%" }}
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src={hori2}
              className="d-block w-100"
              alt="..."
              style={{ height: "180px", maxWidth: "100%" }}
            />
          </div> */}
          {/* <div className="carousel-item">
            <img
              src={hori3}
              className="d-block w-100"
              alt="..."
              style={{ height: "180px", maxWidth: "100%" }}
            />
          </div> */}
          <div className="carousel-item">
            <img
              src={hori4}
              className="d-block w-100"
              alt="..."
              style={{ height: "180px", maxWidth: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
