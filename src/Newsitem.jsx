import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

import Slider from "react-slick";

const Newsitem = ({
  title,
  description,
  newsimg,
  newsurl,
  author,
  publishedAt,
}) => {
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={newsimg} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            {author}
            {publishedAt}
          </Card.Text>
          <a href={newsurl} target="_blank">
            <Button>Read More</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};
// Sidenews

// const Sidenews = ({ title }) => {
//   return (
//     <>
//       {/* <div className="col d-flex justify-content-start md-4"> */}

//       <div className="card text-center" style={{ width: "300px" }}>
//         <div className="card-header">Latest</div>
//         <div className="card-body">
//           <p className="card-title">{title}</p>
//         </div>
//         <div className="card-footer text-body-secondary">2 days ago</div>
//       </div>
//     </>
//   );
// };

// slick carousal

const Newsslick = ({ heading }) => {
  return (
    <Container style={{ zIndex: "3" }}>
      <Row>
        <Col lg={12}>
          <h5
            className="fastnews"
            style={{
              backgroundColor: "lightskyblue",
              display: "block",
            }}
          >
            {heading}
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

const Centermode = ({ title, newsimg }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>
            <div className="card" style={{ width: "18rem" }}>
              <img src={newsimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{title}</p>
              </div>
            </div>
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export { Newsitem, Newsslick, Centermode };
