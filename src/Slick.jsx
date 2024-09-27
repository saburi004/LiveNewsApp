import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Photo({ title, newsimg }) {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/photos?_limit=20")
  //       .then((res) => setData(res.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        <h3>
          {/* <div>{newsimg}</div> */}
          <div>{title}</div>
        </h3>
      </Slider>
    </div>
  );
}
