import React from "react";
import f1 from "@/images/f1.png";
import f2 from "@/images/f2.png";
import f3 from "@/images/f3.png";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: f1,
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: f2,
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: f3,
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="bg-white py-10 mt-30 pt-80 pb-80">
      {/* Section Header */}
      <div className="text-center mb-8 pt-80">
        <h2 className="text-4xl font-bold text-black pt-40">Featured Posts</h2>
        <p className="text-gray-500 pt-10 ">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img src={post.img.src} alt={post.title} className="w-full h-40 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>

            {/* Post Content */}
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
