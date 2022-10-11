import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import GridLoader from "react-spinners/GridLoader";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("green");

  useEffect(() => {
    fetch("https://afternoon-chamber-10461.herokuapp.com/allproducts")
      .then((response) => response.json())
      .then((pd) => {
        setProducts(pd);
      });
  });
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const override = {
    paddingTop: "350px",
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      {loading ? (
        <GridLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <h5 className="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
            Our trending products
          </h5>
          <p className="w-4/12 mx-auto text-center mb-4">
            we provide the best and trust worthy prouducts to our valuable
            customers
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
            {location.pathname === "/"
              ? products?.slice(0, 4).map((product, index) => {
                  return <Product product={product} key={index}></Product>;
                })
              : products?.map((product, index) => {
                  return <Product product={product} key={index}></Product>;
                })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
