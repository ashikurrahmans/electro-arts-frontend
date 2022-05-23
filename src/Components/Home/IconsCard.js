import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

const IconsCard = () => {
  return (
    <div>
      <div className="container px-6 mx-auto grid">
        <h5 className="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
          Our Acchivements
        </h5>
        <p className="w-4/12 mx-auto text-center my-4">
          we are succeed to gain our goal,we are eagarly commited to make our
          customer happy.
        </p>

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-700">1840+</p>
              <p className="mb-2 text-lg font-medium text-gray-600">
                Happy Customers
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
              {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg> */}

              <AiFillDollarCircle size={70}></AiFillDollarCircle>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-700">139M</p>
              <p className="mb-2 text-lg font-medium text-gray-600">
                Yearly Revenue
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
              {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg> */}
              <RiContactsLine size={70}></RiContactsLine>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-700">485</p>
              <p className="mb-2 text-lg font-medium text-gray-600">
                Employers
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
              <svg
                className="w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-700">$459 M</p>
              <p className="mb-2 text-lg font-medium text-gray-600">
                Inventory value
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsCard;
