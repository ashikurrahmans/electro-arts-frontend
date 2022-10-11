import React from "react";
import Titles from "../../Hooks/Titles";
import BlogFetch from "./BlogFetch";

const Blog = () => {
  return (
    <div>
      <Titles title="Blog"></Titles>
      <BlogFetch></BlogFetch>
    </div>
  );
};

export default Blog;
