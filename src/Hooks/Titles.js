import React from "react";
import { Helmet } from "react-helmet-async";

const Titles = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title> {title} - Elector Arts Management Store</title>
      </Helmet>
    </div>
  );
};

export default Titles;
