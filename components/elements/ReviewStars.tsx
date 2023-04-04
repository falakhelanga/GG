import Image from "next/image";
import Link from "next/link";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMemo } from "react";
import { useRouter } from "next/router";
import { ReviewType } from "@/types/products";

const pinkStar = "#E9608A";
const whiteStar = "#E5E5E5";

const ReviewStars = ({ reviews }: { reviews: ReviewType[] }) => {
  const avgRating: number = useMemo(() => {
    if (reviews.length === 0) {
      return 0;
    }
    const numReviews = reviews.length;
    const totalRatings = reviews.reduce((acc, item) => acc + item.rating, 0);
    const average = totalRatings / numReviews;
    return average;
  }, [reviews]);

  const router = useRouter();

  return (
    <div className="flex items-center w-full  gap-2">
      <div className="flex gap-1 items-baseline">
        {avgRating >= 1 ? (
          <FontAwesomeIcon icon={faStar} color={pinkStar} />
        ) : avgRating >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalf} color={pinkStar} />
        ) : (
          <FontAwesomeIcon icon={faStar} color={whiteStar} />
        )}
        {avgRating >= 2 ? (
          <FontAwesomeIcon icon={faStar} color={pinkStar} />
        ) : avgRating >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalf} color={pinkStar} />
        ) : (
          <FontAwesomeIcon icon={faStar} color={whiteStar} />
        )}
        {avgRating >= 3 ? (
          <FontAwesomeIcon icon={faStar} color={pinkStar} />
        ) : avgRating >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalf} color={pinkStar} />
        ) : (
          <FontAwesomeIcon icon={faStar} color={whiteStar} />
        )}
        {avgRating >= 4 ? (
          <FontAwesomeIcon icon={faStar} color={pinkStar} />
        ) : avgRating >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalf} color={pinkStar} />
        ) : (
          <FontAwesomeIcon icon={faStar} color={whiteStar} />
        )}
        {avgRating >= 5 ? (
          <FontAwesomeIcon icon={faStar} color={pinkStar} />
        ) : avgRating >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalf} color={pinkStar} />
        ) : (
          <FontAwesomeIcon icon={faStar} color={whiteStar} />
        )}
      </div>
    </div>
  );
};

export default ReviewStars;
