import { useState, useEffect } from "react";
import hero1 from "../assets/hero.png";
import hero2 from "../assets/map1.png";
import hero3 from "../assets/map2.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        className="w-full object-cover transition-opacity duration-1000 ease-in-out" // Thay đổi duration và ease
        alt="Carousel"
      />
    </div>
  );
};

export default Hero;
