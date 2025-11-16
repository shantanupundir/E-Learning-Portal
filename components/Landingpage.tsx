import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import person3 from './../public/Person3.png'; // Ensure this image path is correct

export default function LandingPage() {
  const words = ["Learn", "Grow", "Build Products", "Get Placed"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change the word every second
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="bg-gradient-to-balck from-white to-gray-200">
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto py-12 lg:py-24">
        {/* Left Section - Text */}
        <div className="text-center lg:text-left w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Commit to yourself to {" "}
            <span className="text-yellow-400 transition-opacity duration-1000 ease-in-out">
              {words[currentWordIndex]}
            </span>
            .
          </h1>
          <p className="text-[15px] lg:text-xl text-gray-400 mt-5">
            Learn from expert professionals & join the largest online community for creatives projects/products building.
          </p>

          <button className="bg-yellow-400 text-[#000319] font-semibold px-6 py-3 rounded-lg transition hover:bg-yellow-500 mt-5">
            Explore For More
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="max-w-sm lg:max-w-md w-full">
            <Image src={person3} alt="Person holding a laptop" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] mx-auto text-white text-center">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-lg">Instructors</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">10K</p>
            <p className="text-lg">Students</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">900hrs+</p>
            <p className="text-lg">Live Sessions</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-lg">Companies</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">8LPA</p>
            <p className="text-lg">Average Salary</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">24*7</p>
            <p className="text-lg">Query Helps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
