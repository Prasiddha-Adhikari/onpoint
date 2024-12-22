import React from "react";
import { FaGraduationCap, FaGlobe, FaUniversity, FaChalkboardTeacher, FaLanguage, FaTools, FaUsers } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "Academic Counselling",
      description:
        "We provide personalized guidance to students to help them set educational goals, choose courses, plan their careers, and explore academic pathways.",
      icon: <FaGraduationCap className="text-primary text-3xl" />,
    },
    {
      title: "Study Abroad Programs",
      description:
        "We assist students in finding study abroad opportunities by guiding them on available programs, admission requirements, and application procedures in different countries.",
      icon: <FaGlobe className="text-primary text-3xl" />,
    },
    {
      title: "University Placement Services",
      description:
        "We help students secure admissions to reputable universities worldwide by assisting with applications, essays, and interview preparation.",
      icon: <FaUniversity className="text-primary text-3xl" />,
    },
    {
      title: "Test Preparation",
      description:
        "We offer Japanese language test preparation services for exams like JLPT, NAT, JLCT, and J-TEST, including practice tests, study materials, and coaching to improve scores.",
      icon: <FaChalkboardTeacher className="text-primary text-3xl" />,
    },
    {
      title: "Language Training",
      description:
        "We provide courses to improve proficiency in Japanese languages, focusing on grammar, vocabulary, pronunciation, speaking, listening, reading, and writing.",
      icon: <FaLanguage className="text-primary text-3xl" />,
    },
    {
      title: "Professional Development",
      description:
        "We organize training programs for educators and professionals on topics like teaching methods, curriculum design, leadership, and instructional technology.",
      icon: <FaTools className="text-primary text-3xl" />,
    },
    {
      title: "Workshops and Seminars",
      description:
        "We host workshops, seminars, and conferences on education, career growth, and personal development to provide learning and networking opportunities.",
      icon: <FaUsers className="text-primary text-3xl" />,
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14">
          <h1 className="text-4xl sm:text-5xl text-white font-bold uppercase mb-4">Services</h1>
          <hr className="border-t-2 border-white w-1/5 mb-6" />
          <p className="text-justify text-white">
            Onpoint Education Services Pvt. Ltd. provides a wide range of services to support
            students, educational institutions, and organizations in education and professional
            development. Here’s a summary of what we offer:
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 sm:px-16 md:px-32 lg:px-52 py-10">
        <div className="p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-semibold text-primary mb-4 text-center">Our Services</h2>
        <hr className="border-t-2 border-primary w-[25%] mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-justify">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
