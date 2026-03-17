import { useState } from "react";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const hasMultiplePictures = pictures.length > 1;

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
        className="carousel-image"
      />

      {hasMultiplePictures && (
        <>
          <button className="carousel-boutton prev" onClick={handlePrev}>
            &#10096;
          </button>

          <button className="carousel-boutton next" onClick={handleNext}>
            &#10097;
          </button>

          <p className="carousel-compteur">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
