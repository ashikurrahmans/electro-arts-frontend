import React from "react";
import { Link } from "react-router-dom";

const BlogHome = () => {
  return (
    <>
      <h5 className="text-center text-gray-900 font-bold text-4xl tracking-tight mt-6 capitalize">
        Our Recent Blogs
      </h5>
      <p className="w-4/12 mx-auto text-center mb-4">
        we published blog for helping our valuable customers to better
        understand about our products.
      </p>
      <div className="flex my-4">
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
          <Link to="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                Should You Get Online Education?
              </p>
              <p className="text-gray-800 text-sm font-medium mb-2">
                A comprehensive guide about online education.
              </p>
              <p className="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having
                instant access to information at...
                <Link className="inline-flex text-indigo-500" to="#">
                  Read More
                </Link>
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />

                <div className="pl-3">
                  <div className="font-medium">Jean Marc</div>
                  <div className="text-gray-600 text-sm">CTO of Supercars</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
            <Link to="#" className="w-full block h-full">
              <img
                alt="blog photo"
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white w-full p-4">
                <p className="text-indigo-500 text-2xl font-medium">
                  Should You Get Online Education?
                </p>
                <p className="text-gray-800 text-sm font-medium mb-2">
                  A comprehensive guide about online education.
                </p>
                <p className="text-gray-600 font-light text-md">
                  It is difficult to believe that we have become so used to
                  having instant access to information at...
                  <Link className="inline-flex text-indigo-500" to="#">
                    Read More
                  </Link>
                </p>
                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #online
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #internet
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #education
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  />

                  <div className="pl-3">
                    <div className="font-medium">Jean Marc</div>
                    <div className="text-gray-600 text-sm">
                      CTO of Supercars
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
          <Link to="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                Should You Get Online Education?
              </p>
              <p className="text-gray-800 text-sm font-medium mb-2">
                A comprehensive guide about online education.
              </p>
              <p className="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having
                instant access to information at...
                <a className="inline-flex text-indigo-500" href="#">
                  Read More
                </a>
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />

                <div className="pl-3">
                  <div className="font-medium">Jean Marc</div>
                  <div className="text-gray-600 text-sm">CTO of Supercars</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
          <Link to="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                Should You Get Online Education?
              </p>
              <p className="text-gray-800 text-sm font-medium mb-2">
                A comprehensive guide about online education.
              </p>
              <p className="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having
                instant access to information at...
                <a className="inline-flex text-indigo-500" href="#">
                  Read More
                </a>
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />

                <div className="pl-3">
                  <div className="font-medium">Jean Marc</div>
                  <div className="text-gray-600 text-sm">CTO of Supercars</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
