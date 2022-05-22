import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  });
  return (
    <>
      <h5 class="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
        Our trending products
      </h5>
      <p className="w-4/12 mx-auto text-center mb-4">
        we provide the best and trust worthy prouducts to our valuable customers
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {products.slice(0, 8).map((product) => {
          return <Product product={product} key={product.id}></Product>;
        })}
      </div>
    </>
  );
};

export default AllProducts;