import React, { useEffect, useState } from "react";
import Product from "./../Components/Home/Products/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-chamber-10461.herokuapp.com/allproducts")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  });
  return (
    <div>
      <>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mx-4">
          {products.map((product, index) => {
            return <Product product={product} key={index}></Product>;
          })}
        </div>
      </>
    </div>
  );
};

export default Products;
