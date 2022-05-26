import React from "react";
import { Link, Outlet } from "react-router-dom";
import Titles from "../../Hooks/Titles";
import useAdmin from "./../../Hooks/IsAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../Firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <Titles title="Dashboard"></Titles>
      <div className="drawer drawer-mobile  text-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60  bg-black text-white ">
            {/* <!-- Sidebar content here --> */}
            {!admin ? (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Add a review</Link>
                </li>
                <li>
                  <Link to="/dashboard/profile">My Profile</Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
