import React from "react";

const newsData = [
  {
    title: "React 18 Released",
    description: "React 18 is now available with new features like Suspense for data fetching.",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Node.js 16 LTS",
    description: "Node.js 16 is now in Long Term Support, offering new security updates.",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Tailwind CSS Updates",
    description: "Tailwind CSS has released version 3.0 with new utilities and improvements.",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "React Native Update",
    description: "The latest React Native update brings improved performance and new features.",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "GraphQL Explained",
    description: "Learn the basics of GraphQL and how to implement it in your applications.",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
];

const eventData = [
  {
    title: "React Conf 2024",
    date: "March 5, 2024",
    location: "San Francisco, CA",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "JSWorld Conference",
    date: "April 10, 2024",
    location: "Online",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Tailwind CSS Meetup",
    date: "May 15, 2024",
    location: "New York, NY",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Node.js Summit",
    date: "June 20, 2024",
    location: "London, UK",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Vue.js Conference",
    date: "July 10, 2024",
    location: "Berlin, DE",
    link: "#",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
];

const NewsAndEvents = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Title Section */}
        <div className="col-span-full text-center mb-6">
          <h3 className="text-3xl font-bold underline text-green-500">NEWS & EVENTS</h3>
        </div>

        {/* News Section */}
        {newsData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
            <a href={item.link} className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        ))}

        {/* Event Section */}
        {eventData.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-700">
              {event.date} | {event.location}
            </p>
            <a href={event.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
