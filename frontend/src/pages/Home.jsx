// pages/Home.jsx
import React from "react";
import { FaComments, FaGlobe, FaUser,FaPaw, FaHands } from "react-icons/fa"; // Importing icons from react-icons
import Slideshow from "../components/Slide";
import china from "../assets/china.jpg";
import sydney from "../assets/sydney.jpg";
import finland from "../assets/finland.jpg";
import japan from "../assets/japan.jpg";
import Korea from "../assets/Korea.jpg";
import usa from "../assets/USA.jpg";
import uk from "../assets/UK.jpg";
import Testimonial from "../components/Testimonial";
import BookAppointment from "../components/Appointment";
// import NewsAndEvents from "../components/News";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen relative">
      <div className="relative z-10">
        <Slideshow />
      </div>

      {/* Team Section */}
      <section className="relative z-20 -mt-16">
        {" "}
        {/* Adjusted negative margin for smaller overlap */}
        <div className="max-w-6xl mx-auto px-6 bg-primary">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col p-4">
              <FaUser className="h-10 w-10 text-white mb-4 " />
            
              {/* Icon at the top */}
              <h3 className="text-xl font-semibold text-white mb-2">
                TEAM OF EXPERTS
              </h3>
              <p className="text-sm text-white text-justify">
              Years of experience in abroad study placement, expertise in language teaching and test preparation,
              supported by a team of highly skilled academic and managerial professionals.
              </p>
            </div>

            <div className="flex flex-col  p-4">
              <FaComments className="h-10 w-10 text-white mb-4" />{" "}
              {/* Icon at the top */}
              <h3 className="text-xl font-semibold text-white mb-2">
                GENUINE COUNSELING
              </h3>
              <p className="text-sm text-white text-justify">
              Providing accurate information about courses, institutions, rules and regulations along with
career guidance helping students to make the right choices based on their interests and
affordability.
              </p>
            </div>

            <div className="flex flex-col  p-4">
              <FaGlobe className="h-10 w-10 text-white mb-4" />{" "}
              {/* Icon at the top */}
              <h3 className="text-xl font-semibold text-white mb-2">
                MANY DESTINATIONS
              </h3>
              <p className="text-sm text-white text-justify">
              Japan, a popular destination for international students as recommended by Nepal's Ministry
              of Education, we offer a wide range of options for your chosen courses.
              </p>
            </div>

            </div>
        </div>
      </section>

      {/* Destination Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
          <h2 className="text-3xl font-semibold text-center text-primary">DESTINANTIONS</h2>
          <hr className="border-t-2 border-primary w-1/4 mb-6 ml-[26rem]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* First Row */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sydney}
                alt="Australia"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Tokyo</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={china}
                alt="Canada"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Osaka</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={uk} alt="uk" className="w-full h-40 object-cover" />
              <div className="p-4 justify-center">
                <h3 className="text-lg font-bold mb-2 ">Hiroshima</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={usa} alt="USA" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Sapporo</h3>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Korea}
                alt="korea"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Kyoto</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={japan}
                alt="japan"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Nagoya</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={finland}
                alt="finland"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Fukuoka</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
       <Testimonial />

      {/* appointment */}
       <BookAppointment />

      {/* news adn event */}
       {/* <NewsAndEvents /> */}
    </div>
  );
};

export default Home;
