import React, { useEffect, useState } from "react";
import SingleRelatedProduct from "./SingleRelatedProduct";

const RelatedProduct = ({ id }) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://afternoon-chamber-10461.herokuapp.com/allproducts")
      .then((response) => response.json())
      .then((pd) => setProducts(pd));
  });

  // console.log(product);
  const relatedProducts = products.filter((item) => item.id !== id);
  console.log(relatedProducts);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {relatedProducts.slice(0, 4).map((item) => {
        return (
          <SingleRelatedProduct
            product={item}
            key={item.id}
          ></SingleRelatedProduct>
        );
      })}
    </div>
  );
};

export default RelatedProduct;
