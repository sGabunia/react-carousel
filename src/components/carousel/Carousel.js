import React from "react";
import Button from "../buttons/Button";
import BulletList from "../bullets/BulletList";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [index, setIndex] = React.useState(4);
  const [touchPosition, setTouchPosition] = React.useState(null);
  const [imageList, setImageList] = React.useState(images);

  React.useEffect(() => {
    // active image's bullet is highlited
    const activeImage = images.find((image) => image.id === index);
    const newImage = { ...activeImage, active: true };
    const newImageList = imageList.map((image) =>
      image.id !== index ? { ...image, active: false } : newImage
    );
    setImageList(newImageList);
  }, [index]);

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    }
    index > 0 && setIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    }
    index < images.length - 1 && setIndex((prevState) => prevState + 1);
  };

  // bullet click handler
  const handleBulletClick = (id) => {
    setIndex(id);
  };

  // swipe handlers
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
        <Button handleButtonClick={handlePrevious} direction="previous" />

        <div
          className="carousel-items-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-items`}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((image) => {
              return (
                <div key={image.id} style={{ padding: 6 }}>
                  <img src={image.src} alt="random javascript image" />
                </div>
              );
            })}
          </div>
        </div>

        <Button handleButtonClick={handleNext} direction="next" />
      </div>
      <BulletList
        images={imageList}
        index={index}
        handleBulletClick={handleBulletClick}
      />
    </>
  );
};

export default Carousel;
