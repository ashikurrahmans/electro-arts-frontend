import React from "react";
import useReviews from "./../UseReview/useReviews";
import Review from "./../Review/Review";
import { useLocation } from "react-router-dom";

const Reviews = () => {
  const location = useLocation();
  const [reviews] = useReviews();
  return (
    <>
      <h5 className="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
        Customers Feedback
      </h5>
      <p className="w-4/12 mx-auto text-center my-4">
        we are succeed to gain our goal,we are eagarly commited to make our
        customer happy.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-4 mb-5 ml-10 mr-10 ">
        {location.pathname === "/"
          ? reviews
              .slice(0, 4)
              .map((review) => (
                <Review review={review} key={review.id}></Review>
              ))
          : reviews.map((review) => (
              <Review review={review} key={review.id}></Review>
            ))}
      </div>
    </>
  );
};

export default Reviews;
