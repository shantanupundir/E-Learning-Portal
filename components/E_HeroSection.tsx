'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function E_HeroSection() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            e-Building
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Build products, not just certificates
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5 mb-12 lg:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">About e-Building</h2>
            <p className="text-gray-300 mb-6">
              e-Building focuses on practical product development rather than mere certification. 
              We encourage students to apply their knowledge to live projects, fostering a 
              project-based learning environment. Our dedicated product-building team evaluates 
              ideas, offering support from concept to launch for promising projects.
            </p>
            <p className="text-gray-300">
              Even if your idea isn't selected, we connect you with like-minded individuals 
              and provide networking opportunities to help you start working on your concepts. 
              At e-Building, you're not just a student; you're an innovator and potential entrepreneur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/5"
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">One-Time Registration Fee</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "No courses provided - focus on practical learning",
                  "Build real projects or products",
                  "One-time expert consultation for idea clarification",
                  "Networking assistance",
                  "Potential funding for promising ideas",
                  "24/7 email support"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/mentor" className="block w-full">
                  <button className="w-full bg-white text-[#0c0c0c] py-3 px-6 rounded-xl font-semibold flex items-center justify-center transition-colors duration-300 hover:bg-gray-200">
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}