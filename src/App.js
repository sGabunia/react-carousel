import React, { useState } from "react";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <div className="container">
      <Carousel>
        <img
          src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="random javascript image"
        />
        <img
          src="https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt="random javascript image"
        />
        <img
          src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="random javascript image"
        />
        <img
          src="https://images.unsplash.com/photo-1529603992250-a55acb77d146?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt="random javascript image"
        />
        <img
          src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="random javascript image"
        />
      </Carousel>
    </div>
  );
};

export default App;
