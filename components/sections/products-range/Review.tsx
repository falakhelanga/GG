import ReviewStars from "@/components/elements/ReviewStars";
import Title from "@/components/elements/Title";
import { ReviewType } from "@/types/products";
import React from "react";

interface ReviewPropType {
  review: ReviewType;
}

const Review = ({ review }: ReviewPropType) => {
  return (
    <div className="h-full  flex-col flex">
      <div
        className="italic text-black flex-1
      "
      >
        &quot;{review.content}&quot;
      </div>
      <Title className="text-green capitalize my-6" size="md">
        {review.author}
      </Title>
      <ReviewStars avgRating={review.rating} />
    </div>
  );
};

export default Review;
