import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6  pb-4">
        <div className="flex items-center text-black text-sm">
          <Link to="#" className="hover:underline hover:text-gray-600">
            Home
          </Link>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <a href="#" className="hover:underline hover:text-gray-600">
            Electronics
          </a>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>Headphones</span>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbs;
