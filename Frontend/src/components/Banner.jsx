import React from "react";
import book1 from "../../public/assets/book1.jpg";

const Banner = ({ scrollToTarget }) => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 sm:px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-30">
          <div className="space-y-14">
            <h1 className="text-4xl font-bold mt-2">
              Hello,welcome here to learn something{" "}
              <span className="text-pink-500">new everyday</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora at suscipit quaerat laboriosam eaque vel
              blanditiis quia a quasi ad architecto quae, unde adipisci officia,
              sunt atque maiores delectus.
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="text" placeholder="Enter Mail" required />
            </label>
            <div className="validator-hint hidden">Enter email address</div>
          </div>
          <button className="btn btn-secondary" onClick={scrollToTarget}>
            Free Books
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-17  md:mt-17 mb-5">
          <img
            src="https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-school-materials-clip-art-cartoon-open-book-png-png-image_10147973.png"
            className="w-80 md:w-100"
            alt="book"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
