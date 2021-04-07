import React from "react";
import Button from "../buttons/Button";
import "./carousel.css";

const Carousel = ({ children }) => {
  const [index, setIndex] = React.useState(2);
  const [length, setLength] = React.useState(children.length);

  React.useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handlePrevious = () => {
    index > 0 && setIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    index < length - 1 && setIndex((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="carousel">
        {index > 0 ? (
          <Button handleButtonClick={handlePrevious} direction="previous" />
        ) : null}

        <div className="carousel-items-container">
          <div
            className="carousel-items"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {index < length - 1 ? (
          <Button handleButtonClick={handleNext} direction="next" />
        ) : null}
      </div>
    </>
  );
};

export default Carousel;
