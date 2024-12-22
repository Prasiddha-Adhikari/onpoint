import { useState, useEffect } from "react";
import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const TestimonialSlider = () => {
  const [currentSlideLeft, setCurrentSlideLeft] = useState(0);
  const [currentSlideRight, setCurrentSlideRight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slides, setSlides] = useState([]);

  const slidesLeft = slides.slice(0, Math.ceil(slides.length / 2));
  const slidesRight = slides.slice(Math.ceil(slides.length / 2));

  const prevSlideLeft = () => setCurrentSlideLeft((prev) => (prev === 0 ? slidesLeft.length - 1 : prev - 1));
  const nextSlideLeft = () => setCurrentSlideLeft((prev) => (prev === slidesLeft.length - 1 ? 0 : prev + 1));
  const prevSlideRight = () => setCurrentSlideRight((prev) => (prev === 0 ? slidesRight.length - 1 : prev - 1));
  const nextSlideRight = () => setCurrentSlideRight((prev) => (prev === slidesRight.length - 1 ? 0 : prev + 1));
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch testimonials data from the PHP backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/get_stories.php`); // Update with your correct PHP file URL
        const data = await response.json();

        if (data.success) {
          setSlides(data.data); // Set the fetched data
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const autoSlide = setInterval(() => {
      nextSlideLeft();
      nextSlideRight();
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [currentSlideLeft, currentSlideRight, isPaused]);

  return (
    <div
      className="w-full mx-auto relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <p className="text-2xl sm:text-3xl text-primary font-semibold underline text-center pb-5">
        TESTIMONIALS
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-10 bg-primary mx-auto max-w-screen-lg">
        {/* Left Slide */}
        <div className="w-full sm:w-1/2 h-72 sm:h-80 overflow-hidden relative">
          {slidesLeft.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
                index === currentSlideLeft ? "translate-x-0" : "translate-x-full"
              }`}
            >
             <div className="w-full h-full bg-primary flex items-center gap-4 p-4">
             <img
  src={slide.photo_url} // Use the fetched image URL
  alt={slide.name}
  className="w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover aspect-square"
/>

                <div>
                  <h3 className="text-sm sm:text-lg font-bold">{slide.name}</h3>
                  <p className="text-xs sm:text-sm text-justify">{slide.caption}</p> 
                </div>
              </div>
            </div>
          ))}
          <button
            className="hidden group-hover:block absolute top-[50%] left-2 sm:left-4 transform -translate-y-1/2 text-xl sm:text-2xl rounded-full p-1 bg-black/20 text-white"
            onClick={prevSlideLeft}
          >
            <BsChevronCompactLeft />
          </button>
          <button
            className="hidden group-hover:block absolute top-[50%] right-2 sm:right-4 transform -translate-y-1/2 text-xl sm:text-2xl rounded-full p-1 bg-black/20 text-white"
            onClick={nextSlideLeft}
          >
            <BsChevronCompactRight />
          </button>
        </div>

        {/* Right Slide */}
        <div className="w-full sm:w-1/2 h-72 sm:h-80 overflow-hidden relative">
          {slidesRight.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
                index === currentSlideRight ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="w-full h-full bg-primary flex items-center gap-4 p-4">
              <img
  src={slide.photo_url} // Use the fetched image URL
  alt={slide.name}
  className="w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover aspect-square"
/>

                <div>
                  <h3 className="text-sm sm:text-lg font-bold">{slide.name}</h3>
                  <p className="text-xs sm:text-sm text-justify">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            className="hidden group-hover:block absolute top-[50%] left-2 sm:left-4 transform -translate-y-1/2 text-xl sm:text-2xl rounded-full p-1 bg-black/20 text-white"
            onClick={prevSlideRight}
          >
            <BsChevronCompactLeft />
          </button>
          <button
            className="hidden group-hover:block absolute top-[50%] right-2 sm:right-4 transform -translate-y-1/2 text-xl sm:text-2xl rounded-full p-1 bg-black/20 text-white"
            onClick={nextSlideRight}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
