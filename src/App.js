import React from "react";
import images from "./data";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <div className="container">
      <Carousel>
        {images.map((image) => {
          return (
            <div key={image.id} style={{ padding: 6 }}>
              <img src={image.src} alt="random javascript image" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default App;
