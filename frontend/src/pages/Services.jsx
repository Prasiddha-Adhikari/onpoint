import japanNat from "../assets/japan-cta.jpg";
import jlpt from "../assets/jlpt.jpg"
import nat from "../assets/NAT-TEST.jpg"

const Services = () => {
  return (
    <>
      {/* Header Section */}
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14">
          <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">JPLT</h1>
          <hr className="border-t-2 border-white w-1/12 mb-6" />
          <p className="text-white text-lg leading-relaxed sm:text-base">
           

This course has been prepared for the experienced Japanese language students for taking test of NAT or JLPT in order to get admission in colleges/universities in Japan. 

          </p>
        </div>
      </section>
  
      {/* JPLT Section */}
      <section>
        <div className="flex flex-col md:flex-row px-8 sm:px-16 md:px-32 lg:px-52">
          {/* Left Content */}
          <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 w-full md:w-2/3 text-justify">
            <p>
            The Japanese Language Proficiency Test (JLPT) is an important exam for measuring and
certifying Japanese language skills. While there is no specific word count requirement, it's
generally believed that knowing 1,000 to 2,000 words is necessary to pass the N5 level, the
lowest level of the JLPT. This number increases for higher levels, with N1 requiring
knowledge of around 10,000 words.
            </p>
            <br />
            <p>
             For each JLPT level, candidates should understand and use vocabulary and grammar suitable
for that level. N5 requires basic greetings and simple sentences, while higher levels require
more complex language. The test also measures reading and listening skills, so candidates
need to understand passages and conversations related to daily life and work.
            </p>
            <br />
            <p>
            To reach a target of 300 words for the JLPT, focus on building your vocabulary step by step.
Start with common words and phrases, then gradually add more specialized and advanced
vocabulary. Practice using these words through reading, listening, and speaking.
            </p>
            <br />
            <p>
            Besides vocabulary, it's important to study grammar and sentence structures to form
meaningful sentences in Japanese. Taking practice exams and mock tests can also help you
get used to the test format and difficulty, so you'll be better prepared on exam day.
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

export default Services;
