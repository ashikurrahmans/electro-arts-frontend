import React from "react";
import voltage from "../../assets/images/voltage.png";
import { useNavigate } from "react-router-dom";

const BusinessSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="bg-white lg:py-12 lg:flex lg:justify-center">
          <div className="py-12 px-6 mt-12 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              Safe your home using{" "}
              <span className="text-indigo-600">Tools</span>
            </h2>
            <p className="mt-4 text-gray-600">
              It will send out multiple alarms through sound and light. When the
              voltage is detected, the tip will send out red light and beep.
              When the higher the sensed voltage is, or the closer it is to the
              voltage source, it beeps at a higher frequency. At the same time,
              the light will be red or yellow, red means high voltage and live
              wire are detected, yellow means low voltage and null wire are
              detected.
            </p>
            <div className="mt-8">
              <span
                onClick={() => navigate("/products")}
                href="#"
                className=" cursor-pointer bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                Buy Now
              </span>
            </div>
          </div>
          <div className=" lg:mx-8 lg:flex lg:max-w-5xl">
            <img src={voltage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
