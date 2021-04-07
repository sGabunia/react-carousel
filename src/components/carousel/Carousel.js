import React from "react";
import Button from "../buttons/Button";
import "./carousel.css";

const Carousel = ({ children }) => {
  const [index, setIndex] = React.useState(2);
  const [length, setLength] = React.useState(children.length);
  const [touchPosition, setTouchPosition] = React.useState(null);

  React.useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handlePrevious = () => {
    index > 0 && setIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    index < length - 1 && setIndex((prevState) => prevState + 1);
  };

  const handleTouchStart = (e) => {
    const touchCoordinates = e.touches[0].clientX;
    setTouchPosition(touchCoordinates);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const currentTouch = e.touches[0].clientX;
    const difference = touchPosition - currentTouch;

    if (difference > 5) {
      handleNext();
    }

    if (difference < -5) {
      handlePrevious();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div className="carousel">
        {index > 0 ? (
          <Button handleButtonClick={handlePrevious} direction="previous" />
        ) : null}

        <div
          className="carousel-items-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
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
