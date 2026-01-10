import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Movie Master
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Where stories, cinema, and passion come together.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Movie Master</span> is
              a movie discovery and streaming platform crafted for people who
              truly love cinema. From iconic classics to modern blockbusters, we
              help you explore movies that match your taste.
            </p>

            <p>
              Our goal is to remove the hassle of endless scrolling and give you
              a smooth, curated movie experience. With powerful search,
              personalized recommendations, and premium features, Movie Master
              puts you in control.
            </p>

            <p>
              Movies are emotions, memories, and moments shared across cultures.
              We built Movie Master to celebrate that connection—one film at a
              time.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Curated Content",
                desc: "Handpicked movies you'll love",
              },
              { title: "Premium Access", desc: "Ad-free & exclusive features" },
              { title: "Smart Discovery", desc: "Find movies faster" },
              { title: "Community Driven", desc: "Built for movie lovers" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-base-200 p-6 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400">
            To build a global platform where movie lovers discover, experience,
            and celebrate cinema without limits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
