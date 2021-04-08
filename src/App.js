import React from "react";
import images from "./data";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <>
      <h1>React Carousel</h1>
      <div className="container">
        <Carousel images={images} />
      </div>
    </>
  );
};

export default App;
