import React from "react";
import Hero from "./Hero";
import IconsCard from "./IconsCard";
import Reviews from "./AllReviews/Reviews/Reviews";
import Footer from "../Footer/Footer";
import AllProducts from "./Products/AllProducts";
import BusinessSummary from "./BusinessSummary";
import Heros from "./Heros";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Heros></Heros>
      {/* <BusinessSummary2></BusinessSummary2> */}
      <div className="container mx-auto">
        <AllProducts></AllProducts>
        <BusinessSummary></BusinessSummary>
        <IconsCard></IconsCard>
        <Blog></Blog>
        <Reviews></Reviews>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
