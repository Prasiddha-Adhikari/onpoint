import { FaUniversity, FaBook, FaHandHoldingUsd, FaUsers } from 'react-icons/fa';

const BookAppointment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row max-w-7xl w-full h-full bg-gray-600">
        {/* Left Side (Statistics) */}
        <div className="p-8 bg-transparent flex-1 flex flex-col justify-between self-start h-full mt-44">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex items-center space-x-4">
              <span className='bg-primary rounded-full p-3'>
                <FaUniversity className="text-4xl text-white" />
              </span>
              <div>
                <p className="text-3xl text-white font-medium">100+</p>
                <p className="text-xl text-white">Universities/Colleges</p>
              </div>
            </div>
            <div className="flex items-center  space-x-4">
              <FaHandHoldingUsd className="text-5xl text-primary" />
              <div>
                <p className="text-3xl text-white font-medium">800+</p>
                <p className="text-xl text-white">Visas Granted</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaBook className="text-5xl text-primary" />
              <div>
                <p className="text-3xl text-white font-medium">100+</p>
                <p className="text-xl text-white">Courses</p>
              </div>
            </div>
           
            <div className="flex items-center space-x-4">
              <FaUsers className="text-5xl text-primary" />
              <div>
                <p className="text-3xl font-medium text-white">50+</p>
                <p className="text-xl text-white ">Team Members & Associates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 bg-transparent flex-1 flex flex-col justify-between h-full">
          <div className='h-full p-8 bg-gray-500'>
            <h2 className="text-2xl font-semibold text-white items-center text-center mb-6">Book an Appointment</h2>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 mt-2 border-b-2 bg-transparent border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 mt-2 border-b-2 bg-transparent border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-4 mt-2 border-b-2 bg-transparent border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  className="w-full p-4 mt-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
