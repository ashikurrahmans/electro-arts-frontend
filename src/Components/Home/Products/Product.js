import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, category, price, stock, img, quantity } = product;
  const navigate = useNavigate();
  return (
    <div>
      {/* <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
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
      </div> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
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
                  // onClick={() => navigate(`/product/${id}`)}
                  onClick={() => {
                    console.log("object");
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
