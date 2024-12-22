import React, { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminEditStory = () => {
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/onpoint/backend/api";
        const response = await fetch(`${API_URL}/get_stories.php`);
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const result = await response.json();
        if (result.success) {
          setStories(result.data);
        } else {
          setMessage(result.message || "Failed to load stories.");
        }
      } catch (error) {
        setMessage("An error occurred while fetching stories.");
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    if (!photo || !caption || !name) {
      setMessage("Please fill in all fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("testimonial_text", caption);
    formData.append("name", name);
  
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/onpoint/backend/api";
      const response = await fetch(`${API_URL}/upload_story.php`, {
        method: "POST",
        body: formData,
      });
  
      const text = await response.text();
      console.log("Raw Response:", text);
  
      try {
        const result = JSON.parse(text);
        console.log(result);  // Log the parsed result
        if (result.success) {
          setMessage("Photo uploaded successfully!");
          setPhoto(null);
          setCaption("");
          setName("");
          setPhotoPreview(null);
  
          setStories((prevStories) => [
            ...prevStories,
            { id: result.id, name, caption, photo_url: result.photo_url },
          ]);
        } else {
          setMessage(result.message || "Failed to upload photo.");
        }
      } catch (error) {
        console.error("JSON parse error:", error);
        console.error("Raw response:", text);
        setMessage("Error parsing server response.");
      }
    } catch (error) {
      setMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/onpoint/backend/api";
      const response = await fetch(`${API_URL}/delete_story.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the story");
      }

      const result = await response.json();
      if (result.success) {
        setMessage("Story deleted successfully!");
        setStories(stories.filter((story) => story.id !== id));
      } else {
        setMessage(result.message || "Failed to delete story.");
      }
    } catch (error) {
      setMessage("An error occurred while deleting the story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSideBar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Testimonial</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white p-6 rounded-lg shadow-lg"
          encType="multipart/form-data"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
            />
            {photoPreview && <img src={photoPreview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md" />}
          </div>
          <div className="mb-6">
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700">Caption</label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter caption"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {message && <p className="text-red-500 text-sm">{message}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md mt-4"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Story"}
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Uploaded Stories</h2>
          {loading ? (
            <div className="mt-4 text-center">Loading...</div>
          ) : stories.length ? (
            <table className="mt-4 w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200 text-sm text-gray-700">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Photo</th>
                  <th className="py-3 px-4 text-left">Caption</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {stories.map((story) => (
                  <tr key={story.id} className="border-b border-gray-200">
                    <td className="py-3 px-4">{story.name}</td>
                    <td className="py-3 px-4">
                      <img
                        src={story.photo_url}
                        alt={story.name}
                        className="h-16 w-16 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-3 px-4">{story.caption}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(story.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="mt-4">No stories available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEditStory;
