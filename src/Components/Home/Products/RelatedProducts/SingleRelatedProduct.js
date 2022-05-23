import React from "react";
import { useNavigate } from "react-router-dom";

const SingleRelatedProduct = ({ product }) => {
  const navigate = useNavigate();

  const { id, name, category, price, img } = product;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto w-60">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={img}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {name}
            </h2>
            <div className="flex">
              <p className="mt-1 text-red-600 text-xl font-bold">${price}</p>
              <button
                className="ml-16 flex  text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => navigate(`/product/${id}`)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleRelatedProduct;
