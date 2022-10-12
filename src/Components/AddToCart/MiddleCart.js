import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MiddleCart = () => {
  const style = {
    width: "30px",
    height: "30px",
    color: "white",
    margin: "5px auto",
  };
  return (
    <>
      <div className="shadow-lg rounded hidden lg:flex flex-col top-[40%] right-4 fixed">
        <span className="w-14 h-22 bg-[#55584D] rounded">
          <div className="items-center justify-center">
            <FaShoppingBag style={style} />
            <span className="text-center text-white text-sm ml-2">1</span>
            <span className="ml-1 text-sm text-white ">ITEM</span>
          </div>
        </span>
        <div className="w-14 h-6 bg-white shadow-xl rounded">
          <span className="flex justify-center text-sm text-black text-center">
            $0
          </span>
        </div>
      </div>
    </>
  );
};

export default MiddleCart;
