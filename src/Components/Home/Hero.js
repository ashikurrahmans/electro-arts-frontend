import React from "react";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Your favorite tool always near you..
              </h1>

              <p className="mt-8 text-gray-700 lg:w-10/12">
                Providing the best electorics is our passion and make our
                customer happy to secure lifes. we are stublished 1992 and have
                500+ positive customers all over the world.
              </p>
            </div>
            <div className="ml-auto lg:w-6/12">
              <img
                src={hero}
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="500"
                height="2500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
