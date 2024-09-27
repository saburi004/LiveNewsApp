import React from "react";
import load from "./Fading circles.gif";

export default function Load() {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "100px",
      }}
    >
      <img src={load} style={{ width: "60px", height: "20px" }}></img>
    </div>
  );
}
