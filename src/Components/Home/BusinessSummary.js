import React from "react";
import voltage from "../../assets/images/voltage.png";

const BusinessSummary = () => {
  return (
    <div>
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div class="py-12 px-6 mt-12 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 class="text-3xl text-gray-800 font-bold">
              Build Your New <span class="text-indigo-600">Idea</span>
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div class="mt-8">
              <a
                href="#"
                class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                Start Now
              </a>
            </div>
          </div>
          <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <img src={voltage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
