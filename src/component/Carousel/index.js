import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://ryanmedicalequipment.com/wp-content/uploads/2017/03/about-header.png',
    'https://www.newcastle-hospitals.nhs.uk/content/uploads/2022/11/Ward-22-RVI-Team.jpg',
    'https://www.qegateshead.nhs.uk/content/uploads/2022/09/ward-8-2048x1536.jpg',
    'https://th.bing.com/th/id/OIP.7E9r_6FMYlxPZs48hLRn_AHaEK?rs=1&pid=ImgDetMain',
    "https://th.bing.com/th/id/R.c68de17c7b7e44ea4934c2bf17af97e5?rik=OEpIzu0HYi82ew&riu=http%3a%2f%2fgrandecityhospital.com%2fwp-content%2fuploads%2f2017%2f04%2fGeneral-ward-2.jpg&ehk=YG0u0rJq3w1P9X%2bh0SR0LVvo4flWLZIqL54evYLUIvo%3d&risl=&pid=ImgRaw&r=0",
  ];

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [nextSlide]); // Include nextSlide in the dependency array

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
