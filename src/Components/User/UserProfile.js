import React from "react";
import auth from "./../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const UserProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <div className="min-h-screen flex text-black">
        <div className="bg-indigo-50 flex-grow py-12 px-10">
          <div className="flex justify-between  mb-16">
            <div>
              <h1 className="text-2xl text-center font-bold text-indigo-900 ">
                Welcome to Electronic Arts!
              </h1>
            </div>
          </div>

          <div class="card w-3/6 bg-base-100 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
              <img src={user.photoURL} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h4 className="text-2xl font-bold text-indigo-600">
                Hi, {user.displayName}
              </h4>
              <h4 className="text-lg font-bold text-black">
                Your Email : {user.email}
              </h4>
            </div>
          </div>

          <div>
            <div className="flex space-x-4">
              <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    Spent this month
                  </span>
                  <h1 className="text-2xl font-bold text-black">$682.5</h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    Spent this month
                  </span>
                  <h1 className="text-2xl font-bold text-black">$682.5</h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    Spent this month
                  </span>
                  <h1 className="text-2xl font-bold text-black">$682.5</h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    Spent this month
                  </span>
                  <h1 className="text-2xl font-bold text-black">$682.5</h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
