import React from "react";
import { FaStar } from "react-icons/fa";

const Review = (props) => {
  const { name, ReviewDetials, image } = props.review;

  return (
    <div>
      <div className=" max-w-sm my-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 w-96 h-100 pr-16">
          <div className="mt-4 space-x-3 lg:mt-6 w-60">{ReviewDetials}</div>
          <div className="flex mt-5">
            <img
              className="mb-3 w-18 h-16 rounded-full shadow-lg mr-6"
              src={image}
              alt="Bonnie image"
            />

            <div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {name}
              </h5>

              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
