import ReviewStars from "@/components/elements/ReviewStars";
import Title from "@/components/elements/Title";
import { ReviewType } from "@/types/products";
import React from "react";

interface ReviewPropType {
  review: ReviewType;
  reviews: ReviewType[];
}

const Review = ({ review, reviews }: ReviewPropType) => {
  return (
    <div>
      <div className="italic text-black">&quot;{review.content}&quot;</div>
      <Title className="text-green capitalize my-6" size="md">
        {review.author}
      </Title>
      <ReviewStars reviews={reviews} />
    </div>
  );
};

export default Review;
