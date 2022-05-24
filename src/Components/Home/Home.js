import React from "react";
import IconsCard from "./IconsCard";
import Reviews from "./AllReviews/Reviews/Reviews";
import AllProducts from "./Products/AllProducts";
import BusinessSummary from "./BusinessSummary";
import Heros from "./Heros";
import BlogHome from "./BlogHome";
import Titles from "../../Hooks/Titles";

const Home = () => {
  return (
    <div>
      <Titles title="Home"></Titles>
      <Heros></Heros>
      <div className="container mx-auto">
        <AllProducts></AllProducts>
        <BusinessSummary></BusinessSummary>
        <IconsCard></IconsCard>
        <BlogHome></BlogHome>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
