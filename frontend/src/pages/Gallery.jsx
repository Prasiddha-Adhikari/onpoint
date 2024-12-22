import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch data from the PHP server
    fetch(`${API_URL}/get_Images.php`) // Adjust the path to your PHP script
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Decode base64 images and set them in state
          const decodedImages = data.images.map((image) => ({
            ...image,
            image: `data:image/jpeg;base64,${image.image}`, // Adjust based on your image type
          }));
          setImages(decodedImages);
        } else {
          console.error("Error fetching images:", data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" ">
      <section>
        <div className="bg-primary flex flex-col px-8 sm:px-16 md:px-32 lg:px-52 pb-20 pt-14 ">
          <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4 uppercase">Gallery</h1>
          <hr className="border-t-2 border-white w-[18%] mb-6" />
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-12">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.image} // Display the base64-encoded image
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
