import React, { useState } from 'react';
import { 
  LocationMarkerIcon, 
  PhoneIcon, 
  MailIcon, 
  PaperAirplaneIcon, 
  MailOpenIcon 
} from '@heroicons/react/solid';

const Contact = () => {
  // Set up state to manage form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const API_URL = import.meta.env.VITE_API_URL;

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the data to the server using POST request
    const response = await fetch(`${API_URL}/blog.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send form data as JSON
    });

    const data = await response.json();
    if (data.status === 'success') {
      alert('Message sent successfully!');
      // Optionally reset the form after successful submission
      setFormData({
        fullname: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <>
      {/* Header Section */}
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14 ">
            <h1 className="text-4xl sm:text-5xl text-white font-bold uppercase mb-4">Contact US</h1>
            <hr className="border-t-2 border-white w-[27%] mb-6"/>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">

          {/* Location Section */}
          <section className="py-6">
            <div className="flex items-start space-x-4"> 
              <LocationMarkerIcon className="h-20 w-20 text-white bg-primary p-4 rounded-full" />
              <div>
                <p className="text-lg font-semibold">LOCATED AT</p>
                <p className="mt-2 text-gray-600">Chabhail, Saraswatinagar, Kathmandu</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="flex justify-center mt-6">
              <div className="w-full max-w-lg h-64 md:h-80">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.822156956966!2d85.34690247523048!3d27.7227767761737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19774bde9903%3A0x2929785e146e4736!2sOn%20Point%20Education%20Service!5e0!3m2!1sen!2snp!4v1734335224968!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Contact Details Section */}
          <section className="py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Call Us */}
              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-20 w-20 text-white bg-primary p-4 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">CALL US ON</p>
                  <p className="mt-2 text-gray-600">+977-9851089017, 01-4822261</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex items-start space-x-4">
                <PaperAirplaneIcon className="h-20 w-20 text-white bg-primary p-4 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">FOLLOW US ON FACEBOOK</p>
                  <p className="mt-2 text-gray-600 hover:text-blue-600 sm:hover:text-blue-600">
                    <a href="https://www.facebook.com/onpointedu/" target="_blank" rel="noopener noreferrer">
                      Visit Page
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start space-x-4">
                <MailIcon className="h-20 w-20 text-white bg-primary p-4 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">EMAIL US</p>
                  <p className="mt-2 text-gray-600">surain977@gmail.com</p>
                </div>
              </div>

              {/* Send a Message */}
              <div className="flex items-start space-x-4">
                <MailOpenIcon className="h-20 w-20 text-white bg-primary p-4 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">SEND A MESSAGE</p>
                  <p className="mt-2 text-gray-600">
                    Fill up the form below to contact quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {/* Subject */}
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
