import React from "react";

const Product = ({ product }) => {
  const { name, category, price, stock, img, quantity } = product;
  return (
    <div>
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div className="bg-white rounded-lg mt-5">
          <img src={img} className="h-40 w-72 rounded-md" alt="" />
        </div>
        <div className="bg-orange-50 shadow-lg rounded-lg -mt-4 w-64">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-lg">{name}</span>
            <div className="flex items-center justify-between font-bold">
              <div className="text-sm text-gray-600  font-semibold">
                Category :
              </div>
              <div className="text-sm text-gray-600 ">{category}</div>
            </div>

            <div className="flex items-center justify-between font-bold my-2">
              <div className="text-sm text-gray-600  font-semibold">
                Available Quantity :
              </div>
              <div className="text-sm text-gray-600 ">{stock}</div>
            </div>

            <div className="flex items-center justify-between font-bold my-2">
              <div className="text-sm text-gray-600  font-semibold">
                Min Order Quantity :
              </div>
              <div className="text-sm text-gray-600 ">{quantity}</div>
            </div>

            <div className="flex items-center justify-between font-bold my-4">
              <div className="text-sm text-gray-600  font-semibold">
                Short Description
              </div>
            </div>

            <div className="flex items-center justify-between font-bold my-2">
              <div className=" text-red-600 font-bold text-2xl">${price}</div>
              <div className="btn  btn-sm">Purchase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
