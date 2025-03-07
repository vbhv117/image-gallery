import React from "react";
import IMAGE_DATA from "./constants/imagedata";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h2 className="section-heading">Communities We Manage</h2>
        <ImageGrid images={IMAGE_DATA} />
        <div className="section-gap"></div>
        <h2 className="section-heading">Our Services</h2>
        <ImageCarousel images={IMAGE_DATA} />
      </div>
    </div>
  );
};

export default App;
