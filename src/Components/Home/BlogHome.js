import React from "react";
import BlogFetch from "./../Blog/BlogFetch";

const BlogHome = () => {
  return (
    <>
      <h5 className="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
        Our Recent Blogs
      </h5>
      <p className="w-4/12 mx-auto text-center mb-4">
        we published blog for helping our valuable customers to better
        understand about our products.
      </p>
      <BlogFetch></BlogFetch>
    </>
  );
};

export default BlogHome;
