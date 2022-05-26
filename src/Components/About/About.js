import React from "react";
import Titles from "../../Hooks/Titles";

const About = () => {
  return (
    <div>
      <Titles title="About"></Titles>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                How Electronic Arts works
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Electronic Arts is an online retailer providing competitive prices
              on our Trampolines. We aim to provide a memorable experience when
              you shop on our online store by offering quality products with
              top-rated customer service. We are based in United Kingdom. We
              distribute nationally via Parcel Force, Tuffnells and DPD. We have
              been operating since 2019 and we have managed to build up a
              reputable establishment online. We have a great team and aim to
              grow our business more and more, offering our customers the best
              Trampolines available. If you have any questions about our
              products, or if you would like to check the availability of an
              item, please use the “Contact Us” page to get in touch.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/61rTlPqRcgL._AC_SX466_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  latest trend to capture
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  10 minutes of trampolining
                </h2>
                <p className="leading-relaxed text-base">
                  Forget running, ballet and even hot yoga. Can you guess what
                  the latest trend to capture the fitness world is?
                  Trampolining. That’s right. You gu...
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/61lyhJ-rdTL._AC_SX466_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  encompassing rundown
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  TP Toys Infinity Octagonal
                </h2>
                <p className="leading-relaxed text-base">
                  Introduction In this blog post, we’ll provide an
                  all-encompassing rundown review of the TP Toys Infinity
                  Octagonal Trampoline, including: an explan...
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/61m-Z9QFZgL._AC_SX466_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  trampoline range
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Telstar Elite Trampoline
                </h2>
                <p className="leading-relaxed text-base">
                  Today we will be reviewing in more detail the Telstar Elite
                  trampoline range as many people are drawn towards the Telstar
                  Elite but are unsure so...
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://m.media-amazon.com/images/I/619JdCraoEL._AC_SX466_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
