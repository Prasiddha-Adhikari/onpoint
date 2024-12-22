import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch testimonials data from PHP backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_URL}/get_stories.php`); // Update with your PHP file URL
        const data = await response.json();
        
        if (data.success) {
          setTestimonials(data.data); // Set the testimonials data
        } else {
          console.error("Failed to fetch testimonials:", data.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <>
      {/* Header Section */}
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14 ">
          <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">TESTIMONIALS</h1>
          <hr className="border-t-2 border-white w-[30%] mb-6" />
        </div>
      </section>
      {/* Testimonial Section */}
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 md:px-8 -mt-8 sm:-mt-11">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg shadow-md p-6 sm:p-8 lg:p-14 space-y-6 sm:space-y-0 sm:space-x-6"
          >
            {/* Image Section */}
            <div className="flex justify-center sm:justify-start">
              <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={testimonial.photo_url} // Use the base64 URL from the backend
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div> 

            {/* Text Section */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold mb-2 text-primary">{testimonial.name}</p>
              <p className="text-gray-700">{testimonial.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
