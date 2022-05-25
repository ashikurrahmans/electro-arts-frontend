import React from "react";
import Titles from "../../Hooks/Titles";

const Blog = () => {
  return (
    <div>
      <Titles title="Blog"></Titles>
      <div className="w-4/5	mt-10 mx-auto mb-10">
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
                <strong>
                  How will you improve the performance of a React Application?
                </strong>
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
                  Understanding how React updates its UI When we create a
                  rendered component, React creates a virtual DOM for its
                  element tree in the component. Now, whenever the state of the
                  component changes, React recreates the virtual DOM tree and
                  compares the result with the previous render. Profiling the
                  React app to understand where bottlenecks are.The profiler
                  records how long it takes a component to render, why a
                  component is rendering, and more. From there, we can
                  investigate the affected component and provide the necessary
                  optimization.
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
              <strong>
                What are the different ways to manage a state in a React
                application?
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              The Four Kinds of React State to Manage When we talk about state
              in our applications, it’s important to be clear about what types
              of state actually matter. There are four main types of state you
              need to properly manage in your React apps: Local state Global
              state Server state URL state
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
              <strong>How does prototypical inheritance work?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the of an object, we use
              Object.getPrototypeOf and Object.
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
              <strong>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              When would I use a Hook? If you write a function component and
              realize you need to add some state to it, previously you had to
              convert it to a class. Now you can use a Hook inside the existing
              function component. We’re going to do that right now!
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
              <strong>
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              By serching product using filter method and use a condition to
              check is email exist to the products or not. if this email address
              exist then show the product if not then do something else to
              perform the rule.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
