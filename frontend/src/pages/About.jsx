import React from "react";
import { FaPaw, FaHands } from "react-icons/fa";
import chairperson from '../assets/chairperson.jpg'

const AboutUs = () => {
  return (
     <div className="bg-gray-100">
       {/* Header Section */}
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14 ">
          <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">ABOUT US</h1>
          <hr className="border-t-2 border-white w-1/5 mb-6"/>
      <p className="text-justify text-white ">We are delighted that you have chosen to visit us. It is our immense pleasure to welcome you
to ONPOINT Education Services Pvt. Ltd., a leading education consultancy offering
language courses, test preparation, and university placement services in Japan. ONPOINT
Education Services is a privately incorporated educational institute, registered and approved
by the Government of Nepal. We are licensed by the Ministry of Education, Nepal, to
conduct language courses, test preparation programs and provide study-abroad consultancy
services to aspiring students. We look forward to guiding and supporting you on your journey
to achieving your academic goals.</p>
        </div>
      </section>

     {/* Message from Chairperson Section */}
<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-9 grid grid-cols-1 md:grid-cols-12 gap-5 py-12 bg-white -mt-11">
    <div className="col-span-12 md:col-span-3 border-r border-gray-300 pr-6 mb-6 md:mb-0">
    <img
  src={chairperson}
  alt="Chairperson"
  className="rounded-full shadow-md w-48 h-48 md:w-64 md:h-64 mx-auto object-cover"
/>

      <p className=" pt-4 font-semibold">Mr. Surendra Rai <br /></p>
      <p>Director <br />Onpoint Education Services PVT. LTD</p>
    </div>
    <div className="col-span-12 md:col-span-9 space-y-6">
      <h2 className="text-3xl font-semibold text-primary text-left uppercase">
        MESSAGE FROM Director
      </h2>
      <hr className="border-t-2 border-primary w-[55%] mb-4" />
      <p className="text-sm text-gray-600 leading-relaxed text-justify">
      On behalf of Onpoint Education Services Pvt. Ltd., I extend to you a warm welcome filled
with enthusiasm and dedication towards the journey of education and growth. It has been
incorporated with the vision of being a leader in teaching language and cultural studies of
Japanese language and best place for counselling for further studies in Japan. To initiate this
project and meet our goals, first we started with Japanese language class in 2013 A.D.
</p>
      <p className="text-sm text-gray-600 leading-relaxed text-justify">
      Along with the growth of our business, we started our student placement services for Japan.
      Basically, we found Japan a great place for diligent students studying in government
      scholarship too. The Government in Japan provides a huge range of scholarship to
      international students in various courses in higher education. So after several visits to Japan
      and building good relation with the people in the education sector, we initiated good business
      project to Japan. It makes us proud that our students, though in small number in both self-
      payment and scholarship mode, are doing very well in ranking universities there.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed text-justify">
      Looking back to our achievement, all I can say is this is attributed to our hard work,
dedication and sincerity as a team work. Now, we successfully provide our services for study
abroad only in Japan. There are a great number of successful students and well-wishers that
have always referred us for our services. We are doing our best to cover a larger pie of
success in coming days.We always look forward to providing good services hence to add
values to the life of our students, their guardians and family members.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed text-justify">with warm regards</p>
      <p className="text-sm text-gray-600 leading-relaxed text-justify">Surendra Rai <br /> Director <br />Onpoint Education Services PVT. LTD</p>
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Mission & Vision */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-primary">
              <span className="inline-flex items-center justify-center bg-primary text-white rounded-full p-4">
                <FaPaw className="text-4xl" />
              </span>
              <span className="ml-3">MISSION & VISION</span>
            <hr className="border-t-2 border-primary w-[43%] mb-4 ml-20" />
            </h2>
            <ul className="text-sm text-gray-700 space-y-4  list-disc  pl-5">
              <li>To become a top centre for Japanese language learning and studies</li>
              <li>To provide excellent facilities and a supportive environment for language learning</li>
              <li>To create a platform for cultural research and exchange programs.</li>
              <li>To offer the best career guidance for students planning to study abroad</li>
              <li>To develop a hub for cultural exchange and academic research</li>
              <li>To help outstanding students secure scholarships abroad</li>
            </ul>
          </div>

          {/* Values & Ethics */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-primary">
              <span className="inline-flex bg-primary text-white rounded-full p-4">
                <FaHands className="text-4xl" />
              </span>
              <span className="ml-3">VALUES & ETHICS</span>
            <hr className="border-t-2 border-primary w-[40%] mb-4 ml-20" />
            </h2>
            <div className="space-y-6 text-sm text-gray-700 text-left">
              <div className="flex items-start space-x-4 text-justify">
                <p>
                  <strong>Leadership:</strong> We aim to lead and excel in various fields of further studies. <br />
                  <strong>Professionalism:</strong> We are dedicated to achieving academic excellence in language and cultural
                  studies. <br />
                  <strong>Research:</strong>We value hard work and emphasize research in education. <br />
                  <strong>Language and Culture:</strong> We believe learning new languages and culture broadens our social
                  perspective.<br />
                  <strong>Communication:</strong> We prioritize and value cross-cultural communication.<br />
                  <strong>Honesty:</strong> We maintain ethical and honest relationships with all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
