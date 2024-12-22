import React from 'react'
import japanNat from "../assets/japan-cta.jpg";
import jlpt from "../assets/jlpt.jpg"
import nat from "../assets/NAT-TEST.jpg"

const Nat = () => {
  return (
      <>
        {/* Header Section */}
        <section>
          <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14">
            <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">NAT</h1>
            <hr className="border-t-2 border-white  w-1/12  mb-6" />
            <p className="text-white text-lg leading-relaxed sm:text-base">
              

This course has been prepared for the experienced Japanese language students for taking test of NAT or JLPT in order to get admission in colleges/universities in Japan. 

            </p>
          </div>
        </section>
    
        {/* NAT Section */}
        <section>
          <div className="flex flex-col md:flex-row px-8 sm:px-16 md:px-32 lg:px-52">
            {/* Left Content */}
            <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 w-full md:w-2/3 text-justify">
              <p>
              The Japanese Language NAT-TEST is an exam that measures the Japanese language skills of
non-native speakers. It has five levels of difficulty and the test evaluates three areas:
Grammar/Vocabulary, Listening, and Reading Comprehension. The format and types of
questions are similar to those in the Japanese Language Proficiency Test (JLPT).
              </p>
              <br />
              <p>
              The NAT-TEST has five levels. Level 5 is the easiest, and Level 1 is the most difficult. Each
              level matches the corresponding level in the JLPT (N5 to N1).
              </p>
              <br />
              <p>
              For Levels 1 and 2, the exam includes sections on Language Knowledge
(reading/vocabulary/grammar) and Listening. For Levels 3, 4, and 5, the exam has three
sections: Language Knowledge (reading/vocabulary), a second Language Knowledge section
(grammar, reading comprehension) and Listening.
              </p>
              <div className="grid grid-cols-2 gap-4 my-8">
                        <div className="h-32 bg-gray-400 rounded-lg flex items-center justify-center">
                          <span>Image 1</span>
                              {/* <img src={jlpt} alt="" /> */}
                            </div>
                            <div className="h-32 bg-gray-400 flex rounded-xl items-center justify-center">
                              <span>Image 2</span>
                              {/* <img src={nat} alt="" /> */}
                            </div>
                          </div>
              <img src={japanNat} alt="Japanese Language NAT Test" className="mt-6" />
            </div>
  
            {/* Right Content */}
            <div className="w-full md:w-1/3 bg-gray-100 p-8 sm:p-2 md:p-5 lg:p-8 rounded-lg shadow-md flex flex-col">
           
              {/* Image Placeholders */}
              <div className="grid grid-row-2 gap-4 mb-8">
                <div className="h-32 flex items-center justify-center">
                  <img src={jlpt} alt="" />
                </div>
                <div className="h-32 flex items-center justify-center">
                  <img src={nat} alt="" />
                </div>
              </div>
  
              <h1 className="text-lg">ENQUIRE NOW</h1>
              {/* Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="subject"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary-dark"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };
export default Nat 