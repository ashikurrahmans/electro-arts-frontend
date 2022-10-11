import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useLocation } from "react-router-dom";
import Titles from "../../Hooks/Titles";

const BlogFetch = () => {
  const location = useLocation();
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/portfolio-json/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      }, []);
  });

  return (
    <>
      {location.pathname === "/" && <Titles title="My Blogs"></Titles>}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 md:gap-8 pb-12 my-12">
        {location.pathname === "/"
          ? blogs
              ?.slice(0, 4)
              .map((blog) => <BlogCard blog={blog} key={blog.id}></BlogCard>)
          : blogs?.map((blog) => (
              <BlogCard blog={blog} key={blog.id}></BlogCard>
            ))}
      </div>
    </>
  );
};

export default BlogFetch;
