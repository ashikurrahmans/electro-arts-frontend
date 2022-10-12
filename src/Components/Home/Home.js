import IconsCard from "./IconsCard";
import Reviews from "./AllReviews/Reviews/Reviews";
import AllProducts from "./Products/AllProducts";
import BusinessSummary from "./BusinessSummary";
import Heros from "./Heros";
import Titles from "../../Hooks/Titles";
import BlogFetch from "../Blog/BlogFetch";

const Home = () => {
  return (
    <div>
      <Titles title="Choose Your Best Electronic Devices | Home "></Titles>
      <Heros></Heros>
      <div className="container mx-auto">
        <AllProducts></AllProducts>
        <BusinessSummary></BusinessSummary>
        <IconsCard></IconsCard>
        <BlogFetch></BlogFetch>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
