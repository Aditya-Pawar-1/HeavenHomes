import React from "react";

const TestimonialCard = ({ element, index }) => {
  const { image, description, name } = element;
  return (
    <div className="min-w-[20vw] max-w-[20vw] min-h-[60vh] bg-primary text-secondary relative rounded-lg">
      <img
        className="absolute h-20 w-20 object-top object-cover origin-center  -left-10 -top-10  rounded-full"
        src={image}
        alt="Testimonial Profile Picture"
      />
      <p className=" w-[80%] mx-auto pt-20 mb-1">{description}</p>
      <h5 className="absolute bottom-5 right-5 w-[80%] mx-auto text-end">
        {name}
      </h5>
    </div>
  );
};

export default TestimonialCard;
