import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  useAuthState,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./../../Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, verror] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  const signupHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password);
    // toast("Please verfiy your email address..");
    // sendEmailVerification();
  };

  let location = useLocation();
  let from = location.state || "/";
  console.log(location);

  useEffect(() => {
    if (guser || user) {
      navigate(from, { replace: true });
    }
  }, [guser, user, from, navigate]);

  // Handeling Errors

  let handleError;
  if (gerror || error) {
    handleError = <p className="text-red-600">Eror: {error?.message}</p>;
  }

  return (
    <div>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-black bg-orange-50 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">
                <img src={logo} alt="" className="w-60" />
              </a>
            </div>
            <ToastContainer></ToastContainer>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already have an account?</span>
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                LogIn
              </span>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Sign up
            </h3>
            <form
              action="#"
              className="flex flex-col space-y-5"
              onSubmit={signupHandle}
            >
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500 pt-3"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {handleError}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <span
                  onClick={() => signInWithGoogle()}
                  className="cursor-pointer flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-[#287AE6] focus:outline-none hover:text-white"
                >
                  Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
