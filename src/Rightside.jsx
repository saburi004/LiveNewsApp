import React from "react";
import img1 from "./img1.jpeg";
import img2 from "./img2.avif";

export default function Rightside() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          right: "100px",
          top: "480px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img src={img2} alt="" style={{ height: "240px", width: "300px" }} />
        <img src={img1} style={{ height: "200px", width: "300px" }}></img>
      </div>
    </>
  );
}
