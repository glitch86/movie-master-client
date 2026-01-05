import React from "react";
import Marquee from "react-fast-marquee";
import useData from "../../../Hooks/useData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { datas: testimonials, loading } = useData(
    "http://localhost:3000/testimonials"
  );

  // console.log(testimonials)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="heading">Testimonials</h1>

      <div className="flex">
        <Marquee>
          {testimonials.map((testimonial) => {
            return (
              <TestimonialCard testimonial={testimonial}></TestimonialCard>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
