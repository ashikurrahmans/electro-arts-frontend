// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import {
//   useSignInWithEmailAndPassword,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import auth from "./../../Firebase.init";

// const LogIn = () => {
//   const navigate = useNavigate();
//   const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
//   const [signInWithEmailAndPassword, euser, eloading, eerror] =
//     useSignInWithEmailAndPassword(auth);

//   const loginHandle = async (e) => {
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     await signInWithEmailAndPassword(email, password);
//   };

//   let location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     if (guser || euser) {
//       navigate(from, { replace: true });
//     }
//   }, [guser, euser, from, navigate]);

//   let handleError;
//   if (eerror) {
//     handleError = <p className="text-red-600">Eror: {eerror?.message}</p>;
//   }

//   console.log(guser);

//   return (
//     <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
//       <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
//         <div className="p-4 py-6 text-black bg-orange-50 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
//           <div className="my-3 text-4xl font-bold tracking-wider text-center">
//             <a href="#">
//               <img src={logo} alt="" className="w-60" />
//             </a>
//           </div>

//           <p className="flex flex-col items-center justify-center mt-10 text-center">
//             <span>Don't have an account?</span>
//             <span
//               className="underline cursor-pointer"
//               onClick={() => navigate("/signup", { state: from })}
//             >
//               Sign up
//             </span>
//           </p>
//         </div>
//         <div className="p-5 bg-white md:flex-1">
//           <h3 className="my-4 text-2xl font-semibold text-gray-700">
//             Account Login
//           </h3>
//           <form className="flex flex-col space-y-5" onSubmit={loginHandle}>
//             <div className="flex flex-col space-y-1">
//               <label
//                 htmlFor="email"
//                 className="text-sm font-semibold text-gray-500"
//               >
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 autoFocus
//                 className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
//               />
//             </div>
//             <div className="flex flex-col space-y-1">
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="text-sm font-semibold text-gray-500"
//                 >
//                   Password
//                 </label>
//                 <a
//                   onClick={() => navigate("/forgetpassword")}
//                   href="#"
//                   className="text-sm text-blue-600 hover:underline focus:text-blue-800"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
//               />
//               <label
//                 htmlFor="remember"
//                 className="text-sm font-semibold text-gray-500"
//               >
//                 Remember me
//               </label>
//             </div>
//             {handleError}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
//               >
//                 Log in
//               </button>
//             </div>
//             <div className="flex flex-col space-y-5">
//               <span className="flex items-center justify-center space-x-2">
//                 <span className="h-px bg-gray-400 w-14"></span>
//                 <span className="font-normal text-gray-500">or login with</span>
//                 <span className="h-px bg-gray-400 w-14"></span>
//               </span>
//               <div className="flex flex-col space-y-4">
//                 <span
//                   onClick={() => signInWithGoogle()}
//                   className="cursor-pointer flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-[#287AE6] focus:outline-none hover:text-white"
//                 >
//                   Google
//                 </span>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "./../../Firebase.init";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // useEffect(() => {
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  // }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Doctors Portal{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
