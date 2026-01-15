import React from "react";

const PremiumSection = () => {
  return (
    <section className="my-9 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          🎬 Go Premium with Movie Master
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Unlock the ultimate movie experience — ad-free streaming, early access
          to new releases, and exclusive premium content.
        </p>

        {/* features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            "🚫 Ad-Free Experience",
            "⚡ Early Movie Access",
            "⭐ Exclusive Premium Content",
            "🎥 HD & 4K Streaming",
            "💾 Unlimited Watchlist",
            "📥 Offline Downloads",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-base-200 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <p className="font-semibold">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full btn btn-primary font-semibold transition">
            Get Premium
          </button>
          <button className="px-8 py-2 rounded-xl border border-gray-400 hover:bg-white hover:text-black font-semibold transition">
            View Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
