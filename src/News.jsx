// import React, { Component, useState } from "react";
// import { Newsitem, Newsslick } from "./Newsitem";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import Load from "./Load.js";
// import propTypes from "prop-types";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// export default class News extends Component {
//   static settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 4000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   static defaultProps = {
//     category: "general",
//   };

//   static propTypes = {
//     category: propTypes.string,
//   };
//   constructor() {
//     super();
//     this.state = {
//       Articles: [],
//       page: 1,
//       Loading: false, // Initialize page state
//     };
//   }

//   async updateapi() {
//     try {
//       const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
//         this.props.category
//       }&apiKey=9c6ccebb9c4b4f2b9ae76eef932f179d&page=1&pagesize=${12}&page=${
//         this.state.page - 1
//       }`;
//       this.setState({ Loading: true });
//       const data = await fetch(url);
//       const parsedData = await data.json();

//       if (parsedData.articles) {
//         this.setState({
//           Articles: parsedData.articles.slice(0, 25), //Limiting to 30 articles
//           //Update totalResults state
//           Loading: false,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   async componentDidMount() {
//     this.updateapi();
//   }

//   prevclick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateapi();
//   };
//   nextclick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateapi();
//   };
//   render() {
//     return (
//       <>
//         <div style={{ textAlign: "center" }}>
//           <h1 style={{ position: "absolute", top: "270px", left: "600px" }}>
//             Top&nbsp;{this.props.category}&nbsp;Headings
//           </h1>
//         </div>
//         <Container>
//           <Row>
//             <div className="slider-container">
//               <Slider {...News.settings}>
//                 {this.state.Articles.map((e) => (
//                   <div>
//                     <h3>
//                       <Newsslick
//                         heading={e.title ? e.title.slice(0, 40) : ""}
//                       />
//                     </h3>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </Row>
//         </Container>
//         {this.state.Loading && <Load />}
//         <div style={{ textAlign: "center" }}>
//           <Container
//             style={{ position: "absolute", top: "390px", left: "100px" }}
//           >
//             <Row>
//               {!this.state.Loading &&
//                 this.state.Articles.map((e) => {
//                   return (
//                     <>
//                       <Col key={e.url}>
//                         <Newsitem
//                           title={e.title ? e.title.slice(0, 40) : ""}
//                           description={
//                             e.description ? e.description.slice(0, 80) : ""
//                           }
//                           newsimg={
//                             e.urlToImage
//                               ? e.urlToImage
//                               : "https://source.unsplash.com/random/1920x1080/?Cars"
//                           }
//                           newsurl={e.url}
//                           author={e.author ? e.author : "unkown"}
//                           publishedAt={e.publishedAt}
//                         />
//                       </Col>
//                     </>
//                   );
//                 })}
//             </Row>
//           </Container>
//         </div>
//         <Button
//           onClick={this.prevclick}
//           variant="primary"
//           style={{ marginLeft: "0px" }}
//           disabled={this.state.page === 1} //Disable previous button when on the first page
//         >
//           previous
//         </Button>
//         <Button
//           onClick={this.nextclick}
//           variant="primary"
//           style={{ marginRight: "0px" }}
//         >
//           next
//         </Button>
//       </>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import { Newsitem, Newsslick, Centermode } from "./Newsitem";
import { Container, Row, Col } from "react-bootstrap"; // Add Row to the import statement
import Load from "./Load";
import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import animicon from "./hexagonal.gif";
import Foot from "./foot";
import "./News.css";
import Slick from "./Slick";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [page, setPage] = useState(1);

  const getApi = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=9c6ccebb9c4b4f2b9ae76eef932f179d&page=${page}&pagesize=${9}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setLoading(false);
      }
    } catch (error) {
      console.log("error fetching api");
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filterArticles = () => {
    const filtered = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        (a.description &&
          a.description.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
    setFilteredArticles(filtered);
  };

  useEffect(() => {
    getApi();
  }, [page, props.category]);

  useEffect(() => {
    filterArticles();
  }, [searchKeyword, articles]);

  let nextBut = () => {
    setPage(page + 1);
  };

  let prevBut = () => {
    setPage(page - 1);
  };

  const headClick = (url) => {
    console.log("Redirecting to:", url);
    window.open(url, "_blank"); // Open URL in a new tab
  };

  return (
    <>
      {/* news slick */}

      <Container className="ms-sm-5">
        <Row>
          <div className="slider-container">
            <Slider
              infinite={true}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              speed={4000}
              autoplaySpeed={2000}
              cssEase={"linear"}
              responsive={[
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {articles.map((e) => (
                <div
                  className="lg-12 sm-12"
                  // style={{ width: "100%" }}
                  key={e.url}
                >
                  <h4 onClick={() => headClick(e.url)}>
                    <Newsslick heading={e.title ? e.title.slice(0, 38) : ""} />
                  </h4>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>

      {/* main container */}

      <Container
        className="ms-sm-5"
        style={{
          boxShadow: "0.5px 0.5px 5px black",

          // marginleft: "200px",
        }}
      >
        <Row>
          <Col lg={2}>
            <button
              onClick={prevBut}
              style={{ marginLeft: "0px", height: "60px" }}
              disabled={page === 1}
            >
              Previous
            </button>
          </Col>
          <Col lg={8}>
            <Container
              style={{ textAlign: "center" }}
              className=" mt-5 headcontain"
            >
              <Row>
                {/* <Row lg={8}> */}
                <Col lg={2} className="imgcol ms-md-5">
                  <img src={animicon} height={"100px"} width={"100px"}></img>
                </Col>
                {/* </Row> */}
                <Col lg={6}>
                  <h1>Top&nbsp;{props.category}&nbsp;Headings</h1>

                  <input
                    style={{
                      height: "30px",
                      zIndex: "3",
                    }}
                    type="text"
                    placeholder="Search articles"
                    onChange={handleSearch}
                  />
                  <i className="  fa-solid fa-magnifying-glass"></i>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={2}>
            <button
              className="nextbut"
              onClick={nextBut}
              variant="primary"
              style={{ width: "170px", height: "60px" }}
            >
              next
            </button>
          </Col>
        </Row>

        {/* main news */}

        <Row>
          {loading ? (
            <Load />
          ) : (
            filteredArticles.map((e) => (
              <Col md={4} lg={4} key={e.url}>
                <Newsitem
                  title={e.title ? e.title : ""}
                  description={
                    e.description ? e.description.slice(0, 40) : "ooooo"
                  }
                  author={e.author ? e.author : ""}
                  publishedAt={e.publishedAt ? e.publishedAt : "unknown"}
                  newsimg={
                    e.urlToImage
                      ? e.urlToImage
                      : "https://source.unsplash.com/random/1920x1080/?Cars"
                  }
                  newsurl={e.url}
                />
              </Col>
            ))
          )}
          {/* <Container>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {articles.map((article) => (
                  <Row lg={12}>
                    <Col md={12} lg={12}>
                      <h4 onClick={() => headClick(article.url)}>
                        <div key={article.url}>
                          <Slick
                            title={article.title}
                            newsimg={article.image ? article.image : ""}
                          />
                        </div>
                      </h4>
                    </Col>
                  </Row>
                ))}
              </Slider>
            </Container> */}
        </Row>
      </Container>
    </>
  );
};

News.defaultProps = {
  category: "general",
};

News.propTypes = {
  category: propTypes.string,
};
export default News;
