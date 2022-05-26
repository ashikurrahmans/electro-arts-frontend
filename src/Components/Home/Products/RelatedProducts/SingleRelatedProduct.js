import React from "react";
import { useNavigate } from "react-router-dom";

const SingleRelatedProduct = ({ product }) => {
  const navigate = useNavigate();

  const { id, name, price, img, category, stock, quantity } = product;
  return (
    <div>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">{name}</h1>
          <h1 className="text-gray-900 text-xl ">Category : {category}</h1>
          <h1 className="text-gray-900 text-xl ">Stock : {stock}</h1>
          <h1 className="text-gray-900 text-xl ">Min Quantity: {quantity}</h1>
          <p className="text-gray-600 text-sm mt-1">{product?.description}</p>
        </div>
        <img
          className="h-56 w-full object-cover mt-2"
          src={img}
          alt="NIKE AIR"
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">${price}</h1>
          <button
            className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
            onClick={() => navigate(`/product/${id}`)}
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedProduct;
