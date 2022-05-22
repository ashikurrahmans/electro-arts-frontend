import React from "react";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "./../../Firebase.init";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const forgetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await updatePassword(email);
  };

  return (
    <div>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-20 text-black  bg-orange-50 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">
                <img src="" alt="" className="w-60" />
              </a>
            </div>

            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <a
                href="#"
                className="underline"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </a>
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already Have an Account?</span>
              <a
                href="#"
                className="underline"
                onClick={() => navigate("/login")}
              >
                LogIn
              </a>
            </p>
          </div>
          <div className="py-20 px-10 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Forget your password?
            </h3>
            <form className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  onClick={forgetPassword}
                >
                  Send Password Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
