import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumbs from "../../Shared/BreadCrumbs";
import RelatedProduct from "./RelatedProducts/RelatedProduct";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-chamber-10461.herokuapp.com/allproducts")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  });
  const fatch = products.find((item) => item.id === id);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div>
              <BreadCrumbs></BreadCrumbs>
              <img
                alt="ecommerce"
                className="lg:w-full w-96 lg:h-96 mt-6 shadow-lg rounded-lg max-w-md  bg-gray-900 p-1"
                src={fatch?.img}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {fatch?.category}
              </h2>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {fatch?.name}
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{fatch?.description}</p>
              <div className="my-2">
                <li className="text-sm">Category : {fatch?.category}</li>
                <li className="text-sm ">Stock : {fatch?.stock}</li>
                <li className="text-sm">Min Order : {fatch?.quantity}</li>
              </div>
              <span className="title-font font-medium text-2xl text-red-700">
                Price : ${fatch?.price}
              </span>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>

                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-8"
                >
                  <option selected disabled>
                    Choose Size
                  </option>
                  <option value="sm">SM</option>
                  <option value="extrasm">Extra SM</option>
                  <option value="large">Large</option>
                  <option value="extralarge">Extra Large</option>
                </select>
              </div>

              <div className="flex">
                <button
                  type="button"
                  class="h-12 mr-4 px-6 py-1 font-semibold bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  class="h-12 mr-4 px-6 py-1 font-semibold  bg-black text-white"
                  onClick={() => {
                    navigate(`/product/${id}/checkout`);
                  }}
                >
                  Buy Now
                </button>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-center">
        Related Products
      </h1>
      <RelatedProduct id={id}></RelatedProduct>
    </div>
  );
};

export default SingleProduct;
