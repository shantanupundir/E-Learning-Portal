'use client'

import React, { useState } from "react"
import { FaArrowLeft, FaArrowRight, FaLinkedin, FaTwitter, FaStar } from "react-icons/fa"

const tutors = [
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },
  {
    name: "Ramakrushna Mohapatra",
    title: "Data Science & Analytics",
    classes: "200 Classes",
    rating: 5,
    img: "/Ram.png",
    subjects: ["Python", "Machine Learning", "Data Visualization"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ramakrushna/",
      twitter: "https://twitter.com/ramakrushna",
    },
  },

]


interface PopularTutorsProps {
  searchTerm: string
}

export default function PopularTutors({ searchTerm }: PopularTutorsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [fade, setFade] = useState("fade-in")
  const [showAll, setShowAll] = useState(false)
  const tutorsPerPage = 3

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastTutor = currentPage * tutorsPerPage
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage
  const currentTutors = filteredTutors.slice(indexOfFirstTutor, indexOfLastTutor)

  const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage)

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "next" && currentPage < totalPages) {
      setFade("fade-out")
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setFade("fade-in")
      }, 500)
    } else if (direction === "prev" && currentPage > 1) {
      setFade("fade-out")
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setFade("fade-in")
      }, 500)
    }
  }

  const handleFindATutorClick = () => {
    setShowAll(!showAll)
    setCurrentPage(1)
  }

  return (
    <div className="p-6 rounded-lg mb-10 mt-20">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <h2 className="text-3xl text-purple-300 font-semibold">Popular Tutors</h2>
        <button
          className="mt-4 md:mt-0 px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
          onClick={handleFindATutorClick}
        >
          {showAll ? "Show Paginated" : "Find a Tutor"}
        </button>
      </div>
      <h3 className="text-2xl text-white mb-6 mt-10 font-semibold">
        Meet Our Popular Tutors
      </h3>
      <div className={`tutor-container ${fade}`}>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? filteredTutors : currentTutors).map((tutor, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-white">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={tutor.img}
                    alt={tutor.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-white">{tutor.name}</h4>
                  <p className="text-gray-200">{tutor.title}</p>
                  <p className="text-gray-400">{tutor.classes}</p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-400">{tutor.rating}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {tutor.subjects.map((subject, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-700 text-white text-sm rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={tutor.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label={`${tutor.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={tutor.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label={`${tutor.name}'s Twitter profile`}
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex justify-between w-full mt-6 space-x-4">
                    <button
                      className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                      onClick={() => alert(`View Profile of ${tutor.name}`)}
                    >
                      View Profile
                    </button>
                    <button
                      className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                      onClick={() => alert(`View Sessions of ${tutor.name}`)}
                    >
                      Book Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showAll && (
        <div className="flex justify-center gap-10 mt-6">
          <button
            className="px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            <FaArrowLeft className="inline mr-2" /> Previous
          </button>
          <button
            className="px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
          >
            Next <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      )}
      {!showAll && (
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 === currentPage ? "bg-purple-300" : "bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}