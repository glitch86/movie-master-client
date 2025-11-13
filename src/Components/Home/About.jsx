import React from "react";
import { FaFilm, FaStar, FaRegClock, FaUsers } from "react-icons/fa";

const AboutPlatform = () => {
  return (
    <section className="bg-base-100 py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center max-w-5xl">

        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-red-600">MovieMaster</span>
        </h2>
        <p className="text-gray-500 mb-12 leading-relaxed">
          <span className="font-semibold">MovieMaster</span> is your ultimate
          movie discovery and management platform — designed for cinephiles,
          creators, and casual viewers alike. Explore thousands of movies,
          manage your watchlist, and stay updated with the latest trends — all
          in one sleek, fast, and secure platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 border rounded-2xl bg-black/5 backdrop-blur-sm shadow-sm hover:-translate-y-2 transition-all">
            <FaFilm className="text-4xl text-red-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Massive Collection</h3>
            <p className="text-gray-500 text-sm">
              Access thousands of movies across all genres and eras, all neatly
              organized for easy discovery.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-black/5 backdrop-blur-sm shadow-sm hover:-translate-y-2 transition-all">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Ratings & Reviews</h3>
            <p className="text-gray-500 text-sm">
              View authentic ratings and leave your own reviews to share your
              opinion with the community.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-black/5 backdrop-blur-sm shadow-sm hover:-translate-y-2 transition-all">
            <FaRegClock className="text-4xl text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Personal Watchlist</h3>
            <p className="text-gray-500 text-sm">
              Save movies to your watchlist and access them anytime, on any
              device — never miss a film again.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-black/5 backdrop-blur-sm shadow-sm hover:-translate-y-2 transition-all">
            <FaUsers className="text-4xl text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-500 text-sm">
              Join a passionate community of movie lovers, share lists, and
              discover new favorites together.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPlatform;
