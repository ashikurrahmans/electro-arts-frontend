import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>What is Context API? </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  The Context API is a React structured who gives us permission
                  to share information one component to another. and solving a
                  big issue called prop-drilling. React Context API is a way to
                  share data or information effectively and less code repeating.
                  Context API is a (kind of) new feature added in version 16.3
                  of React that allows one to share state across the entire app
                  (or part of it) lightly and with ease. we have to use this
                  function React.createContext(). and has provider key to share
                  data to own childrens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion w-4/5	mt-10 mx-auto" id="accordionExample mt-5">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>What's are Inline Block Element?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              Inline Block is a feature of html5. Some of them are inline block
              and some of are block element. an inline block element only take
              space where it's stand for.Inline-block elements are similar to
              inline elements, except they can have padding and margins added on
              all four sides. You'll have to declare display: inline-block in
              your CSS code. One common use for using inline-block is for
              creating navigation links horizontally, as shown below.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
