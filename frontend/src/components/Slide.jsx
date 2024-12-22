import { useState, useEffect } from "react";
import canada from "../assets/canada.jpg";
import china from "../assets/china.jpg";
import finland from "../assets/finland.jpg";
import japan from "../assets/japan.jpg";
import Korea from "../assets/Korea.jpg";
import sydney from "../assets/sydney.jpg";
import UK from "../assets/UK.jpg";
import USA from "../assets/USA.jpg";
import { BsArrowRight, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? 7 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === 7;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const autoSlide = setInterval(() => {
      prevSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, [currentSlide, isPaused]);

  return (
    <div 
      className="w-full m-auto relative group" 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Container */}
      <div className="relative w-full h-[550px] overflow-hidden">
        {/* Slide 1 */}
        <div
          className={`absolute  inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 0 ? "translate-x-0" : currentSlide < 0 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={canada}
            alt="Canada"
            className="w-full object-cover h-full"
          />
          {/* <div className="absolute sm:top-1/2  left-1/2 transform sm:bg-transparent bg-slate-600 -translate-x-1/2 -translate-y-1/2 w-full  p-6 text-white sm:w-4/5 ">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute  inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 1 ? "translate-x-0" : currentSlide < 1 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={china}
            alt="China"
            className="w-full  object-cover h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform  sm:bg-transparent bg-slate-600 -translate-x-1/2 -translate-y-1/2 w-full p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 3 */}
        <div
          className={`absolute  inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 2 ? "translate-x-0" : currentSlide < 2 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={finland}
            alt="Finland"
            className="w-full  object-cover  h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:bg-transparent bg-slate-600 w-full p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 4 */}
        <div
          className={`absolute  inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 3 ? "translate-x-0" : currentSlide < 3 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={japan}
            alt="Japan"
            className="w-full object-cover h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  sm:bg-transparent bg-slate-600 -translate-y-1/2 w-full p-6 text-white sm:w-4/5">
            <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 5 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 4 ? "translate-x-0" : currentSlide < 4 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={Korea}
            alt="Korea"
            className="w-full  object-cover h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform  sm:bg-transparent bg-slate-600 -translate-x-1/2 -translate-y-1/2 w-full p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 6 */}
        <div
          className={`absolute inset-0  transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 5 ? "translate-x-0" : currentSlide < 5 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={UK}
            alt="UK"
            className="w-full object-cover h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform  sm:bg-transparent bg-slate-600 -translate-x-1/2 -translate-y-1/2 w-full p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 7 */}
        <div
          className={`absolute inset-0  transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 6 ? "translate-x-0" : currentSlide < 6 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={USA}
            alt="USA"
            className="w-full object-cover h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform  sm:bg-transparent bg-slate-600 -translate-x-1/2 -translate-y-1/2 w-full  p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Slide 8 */}
        <div
          className={`absolute inset-0  transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 7 ? "translate-x-0" : currentSlide < 7 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={sydney}
            alt="Sydney"
            className="w-full h-full object-cover "
          />
          {/* <div className="absolute top-1/2 left-1/2  sm:bg-transparent bg-slate-600 transform -translate-x-1/2 -translate-y-1/2 w-full p-6 text-white sm:w-4/5">
          <h1 className="text-xl sm:text-2xl font-bold text-center">Japan</h1>
            <p className="text-center mt-2 text-sm sm:text-base">
            Japan's education system had been playing a central part in the country's recovery and rapid economic growth in the decades. Japan having a very vast and strong educational background has greatly improved the likelihood of finding a job and earning enough money to support oneself making much easier to live life.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-3xl hover:bg-green-600 mx-auto flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <BsArrowRight size={20} />
            </button>
          </div> */}
        </div>

      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer sm:block"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer sm:block"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default Slideshow;
