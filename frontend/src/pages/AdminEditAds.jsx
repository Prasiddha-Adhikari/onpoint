import React, { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminEditAds = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [images, setImages] = useState([]); // State to store uploaded images
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Fetch images from the backend when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Function to fetch images from the backend
  const fetchImages = async () => {
    setIsLoading(true); // Set loading state
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/get_Images.php`);
      const data = await response.json();
      if (data.status === "success") {
        setImages(data.images); // Update state with fetched images
      } else {
        setUploadStatus("Failed to load images.");
      }
    } catch (error) {
      setUploadStatus("There was an error fetching the images.");
      console.error(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle image file change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission (upload image)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = event.target.querySelector('input[type="file"]');
    if (!fileInput.files[0]) {
      setUploadStatus("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    setUploadStatus("Uploading...");
    setIsLoading(true); // Set loading state during upload

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload.php`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.status === "success") {
        setUploadStatus("Image uploaded successfully!");
        fetchImages(); // Refresh the image list after upload
      } else {
        setUploadStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setUploadStatus("There was an error uploading the image. File Size Must not be higher that 900Kb");
      console.error(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle delete image
  const handleDelete = async (imageId) => {
    if (isLoading) return; // Prevent deletion while loading
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/delete_image.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: imageId }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setUploadStatus("Image deleted successfully.");
        fetchImages(); // Refresh the image list after deletion
      } else {
        setUploadStatus("Failed to delete image.");
      }
    } catch (error) {
      setUploadStatus("There was an error deleting the image.");
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSideBar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Gallery</h1>

        {/* Image upload form */}
        <form className="mt-6 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-gray-700 border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleImageChange}
            disabled={isLoading} // Disable input while loading
          />
          {selectedImage && (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">Preview:</p>
              <img
                src={selectedImage}
                alt="Selected Preview"
                className="h-48 w-auto rounded shadow-md"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Uploading..." : "Submit"}
          </button>
          {uploadStatus && (
            <p className="mt-4 text-gray-700 font-semibold">{uploadStatus}</p>
          )}
        </form>

        {/* Display images in a table */}
        <div className="mt-8 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Images</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Image Preview</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="2" className="px-4 py-2 text-center text-gray-700">
                    Loading images...
                  </td>
                </tr>
              ) : images.length > 0 ? (
                images.map((image) => (
                  <tr key={image.id}>
                    <td className="px-4 py-2">
                      <img
                        src={`data:image/jpeg;base64,${image.image}`}
                        alt={`Image ${image.id}`}
                        className="h-20 w-auto rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        disabled={isLoading}
                      >
                        {isLoading ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-4 py-2 text-center text-gray-700">
                    No images found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminEditAds;
