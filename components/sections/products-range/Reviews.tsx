import Title from "@/components/elements/Title";
import React from "react";
import Review from "./Review";
import { ReviewType } from "@/types/products";

const reviews: ReviewType[] = [
  {
    author: "jane doe",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem similique illo corporis rerum libero velit unde, aliquam
    labore hic porro. Explicabo provident ex quisquam sequi nisi, quos
    tempore voluptatem error!`,
    rating: 5,
  },

  {
    author: "zama ngcobo",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem similique illo corporis rerum libero velit unde, aliquam
    labore hic porro. Explicabo provident ex quisquam sequi nisi, quos
    tempore voluptatem error!`,
    rating: 5,
  },
  {
    author: "zama ngcobo",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem similique illo corporis rerum libero velit unde, aliquam
    labore hic porro. Explicabo provident ex quisquam sequi nisi, quos
    tempore voluptatem error!`,
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div>
      <Title
        size="md"
        className="uppercase text-black md:text-3xl font-normal border-black border-b-2 border-b pb-5 border-b-black"
      >
        what other woman <span className="font-bold">have to say</span>
      </Title>
      <div className="grid md:grid-cols-3 mt-6 gap-14">
        {reviews.map((review, idx) => (
          <Review review={review} reviews={reviews} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
