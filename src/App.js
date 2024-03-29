import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import LogIn from "./Components/Authentication/LogIn";
import Signup from "./Components/Authentication/Signup";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import RequiredAuth from "./Components/Authentication/RequiredAuth";
import ForgetPassword from "./Components/Authentication/ForgetPassword";
import SingleProduct from "./Components/Home/Products/SingleProduct";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Checkout from "./Components/Checkout/Checkout";
import MyOrders from "./Components/Dashboard/MyOrders";
import AddReview from "./Components/Dashboard/AddReview";
import MyProfile from "./Components/Dashboard/MyProfile";
import Products from "./Products/Products";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import MiddleCart from "./Components/AddToCart/MiddleCart";

const override = {
  paddingTop: "350px",
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("green");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
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
        <Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/blog" element={<Blog></Blog>} />
            <Route
              path="/dashboard"
              element={
                <RequiredAuth>
                  <Dashboard />
                </RequiredAuth>
              }
            >
              <Route path="/dashboard" element={<MyOrders />} />
              <Route path="review" element={<AddReview />} />
              <Route path="profile" element={<MyProfile />} />
            </Route>

            <Route
              path="product/:id/checkout"
              element={
                <RequiredAuth>
                  <Checkout />
                </RequiredAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
          <MiddleCart></MiddleCart>
        </Menu>
      )}
    </div>
  );
}

export default App;
