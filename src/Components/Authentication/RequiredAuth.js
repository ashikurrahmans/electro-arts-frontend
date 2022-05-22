import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./../../Firebase.init";
// import { useSendEmailVerification } from "react-firebase-hooks/auth";
// import { toast } from "react-toastify";

function RequiredAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  // const [sendEmailVerification, sending, verror] =
  //   useSendEmailVerification(auth);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!user?.emailVerified) {
  //   return (
  //     <>
  //       <div className="bg-orange-50 h-screen text-center ">
  //         <h1 className="text-3xl text-center pt-48 pb-12">
  //           Your email address is not verified!,please verify your email
  //           address..
  //         </h1>
  //         <button
  //           className="btn btn-secondary"
  //           onClick={async () => {
  //             toast("Sent email");
  //             await sendEmailVerification();
  //           }}
  //         >
  //           Send Email
  //         </button>
  //       </div>
  //     </>
  //   );
  // }

  return children;
}
export default RequiredAuth;
