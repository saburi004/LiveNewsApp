import "./App.css";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./News";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navi from "./Navi";
import Foot from "./foot";
import Signin from "./Signin";
import Cara from "./Cara";
import Paracounter from "./paracounter";
import About from "./About";
import Services from "./Services";
import Open from "./Open";

function App() {
  function OpeningPage() {
    return (
      <>
        <Open />
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<OpeningPageLayout />} />
          <Route
            exact
            path="/abc"
            element={<NewsLayout category="science" />}
          />
          <Route path="/health" element={<NewsLayout category="health" />} />
          <Route
            path="/technology"
            element={<NewsLayout category="Technology" />}
          />
          <Route path="/sports" element={<NewsLayout category="sports" />} />
          <Route
            path="/entertainment"
            element={<NewsLayout category="entertainment" />}
          />
          <Route path="/Signin" element={<Navfun1 />} />
          <Route path="/Services" element={<Navfun2 />} />
          <Route path="/About" element={<Navfun3 />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Cara />
        <Navi />

        <Routes>
          <Route
            exact
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="general" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="entertainment" />}
          />
          <Route
            exact
            path="/Health"
            element={<News key="Health" category="Health" />}
          />
          <Route
            exact
            path="/Technology"
            element={<News key="Technology" category="Technology" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="sports" />}
          />

          <Route
            path="/entertainmen"
            element={<News key="Buisness" category="Buisness" />}
          />
          <Route path="/" element={<OpeningPage />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/sports" element={<Paracounter />} />
        </Routes>

        <Foot />
      </BrowserRouter> */}
    </>
  );
}
function OpeningPageLayout() {
  return (
    <>
      <Open />
    </>
  );
}
function Navfun1() {
  return (
    <>
      <Cara />
      <Navi />
      <Signin />
      <Foot />
    </>
  );
}
function Navfun2() {
  return (
    <>
      <Cara />
      <Navi />
      <Services />
      <Foot />
    </>
  );
}
function Navfun3() {
  return (
    <>
      <Cara />
      <Navi />
      <About />
      <Foot />
    </>
  );
}
function NewsLayout({ category }) {
  return (
    <>
      <Cara />
      <Navi />
      <News key={category} category={category} />
      <Foot />
    </>
  );
}

export default App;
