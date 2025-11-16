"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="w-[90%] md:w-[95%] xl:w-[85%] mx-auto text-white mb-20 mt-10">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-5 max-w-lg text-center mx-auto space-y-5"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          People who supports you deserve some penny
        </h1>
        <p className="text-[15px] leading-loose">
          The mentors and industry experts gonna take these money. They will
          help in if you registered to build a product under us.
        </p>
      </div>

      <div className="mt-16 flex flex-col space-y-5 md:flex-row md:justify-evenly md:space-y-0 ">
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full md:w-2/6 rounded-xl p-5 bg-[linear-gradient(103.4deg,#04071D_16.66%,#0C0E23_81.61%)] border border-slate-400/10"
        >
          <div className="text-white">
            <p className="font-semibold text-sm">Enterprise</p>
            <p className="font-semibold text-[25px]">Contact</p>

            <ul className="text-slate-200 mt-4">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Idea Validations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Technical helps</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Weekly updates</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>24*7 mail services</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Product launching</span>
              </li>
            </ul>

            <div className="text-center mt-10">
              <button className="mt-6 text-[16px] md:text-[20px] lg:text-[22px] hover:bg-slate-600/20 font-semibold rounded-xl bg-gradient-to-r from-slate-500/20 to-slate-900/20 px-4 py-2 border border-slate-400/10 ">
                <a href="https://calendly.com/selvanithish2014/30min">
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="w-full md:w-2/6 rounded-xl p-5 bg-[#451f8d]/20 border border-slate-400/10"
        >
          <div className="text-white">
            <p className="font-semibold text-sm">Enterprise</p>
            <p className="font-semibold text-[25px]">$48/mo</p>

            <ul className="text-slate-400 mt-4">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Idea Validations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Technical helps</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span className="text-white">Weekly updates</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>24*7 mail services</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 md:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Product launching</span>
              </li>
            </ul>
            <div className="text-center mt-10">
              <button className="mt-6 text-[16px] md:text-[20px] lg:text-[22px] hover:bg-slate-600/20 font-semibold rounded-xl bg-gradient-to-r from-slate-500/20 to-slate-900/20 px-4 py-2 border border-slate-400/10 ">
                <a href="https://calendly.com/selvanithish2014/30min">
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}