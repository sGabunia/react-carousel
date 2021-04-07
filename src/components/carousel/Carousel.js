import React from "react";
import Button from "../buttons/Button";
import "./carousel.css";

const Carousel = ({ children }) => {
  const [index, setIndex] = React.useState(3);
  const [length, setLength] = React.useState(children.length);
  const [touchPosition, setTouchPosition] = React.useState(null);

  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  const [show, setShow] = React.useState(windowSize < 768 ? 1 : 3);

  React.useEffect(() => {
    setLength(children.length);
  }, [children]);

  React.useEffect(() => {
    // make carousel responsive - on small screen show 1 item, on large screens -3
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (windowSize < 768) {
        setShow(1);
      }

      if (windowSize > 768) {
        setShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  const handlePrevious = () => {
    index > 0 && setIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    index < length - show && setIndex((prevState) => prevState + 1);
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
            className={`carousel-items show-${show}`}
            style={{
              transform: `translateX(-${index * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {index < length - show ? (
          <Button handleButtonClick={handleNext} direction="next" />
        ) : null}
      </div>
    </>
  );
};

export default Carousel;
