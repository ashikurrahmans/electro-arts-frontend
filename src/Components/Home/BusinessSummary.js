import React from "react";
import voltage from "../../assets/images/voltage.png";

const BusinessSummary = () => {
  return (
    <div>
      <div>
        <div className="bg-white lg:py-12 lg:flex lg:justify-center">
          <div className="py-12 px-6 mt-12 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              Build Your New <span className="text-indigo-600">Idea</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                Start Now
              </a>
            </div>
          </div>
          <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <img src={voltage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
