"use client";
import {
  FaBook,
  FaPlane,
  FaUtensils,
  FaPaintBrush,
} from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    {
      name: "Reading",
      icon: <FaBook />,
      details: ["Fiction", "Tech blogs", "Psychology articles", "Non-fiction"],
    },
    {
      name: "Exploring New Places",
      icon: <FaPlane />,
      details: ["Beaches", "Mountains", "Historical Sites", "Local Markets"],
    },
    {
      name: "Exploring New Food",
      icon: <FaUtensils />,
      details: ["Street Food", "Asian Cuisine", "Indian Fusion", "Desserts"],
    },
    {
      name: "Painting",
      icon: <FaPaintBrush />,
      details: ["Acrylic", "Abstract", "Landscapes", "Watercolor"],
    },
  ];

  // Automatically generate image names from 1.jpg to 12.jpg
  const hobbyImages = Array.from({ length: 12 }, (_, i) => `${i + 1}.jpg`);

  return (
    <section className="py-16 px-4 bg-[#f9fafb] dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Hobbies</h2>

        {/* Grid of hobbies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111827] rounded-xl p-6 shadow hover:shadow-md hover:-translate-y-4 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500 text-2xl">{hobby.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {hobby.name}
                </h3>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-2">
                {hobby.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🎞️ Sliding Image Strip */}
        <div className="mt-16 overflow-hidden w-full relative">
          <div
            className="flex gap-6 marquee whitespace-nowrap min-w-max"
            style={{ animationDuration: "40s" }}
          >
            {hobbyImages.concat(hobbyImages).map((img, index) => (
              <img
                key={index}
                src={`/images/hobbies/${img}`}
                alt={`Hobby ${index + 1}`}
                className="h-36 w-56 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}