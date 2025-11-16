'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Rocket, Brain } from "lucide-react"

const mentorshipData = [
  { icon: <Users className="w-5 h-5" />, label: "50+ Project/Products", description: "Successfully launched and mentored" },
  { icon: <CheckCircle className="w-5 h-5" />, label: "100% Success Rate", description: "In project completion and deployment" },
  { icon: <Rocket className="w-5 h-5" />, label: "20+ Startups", description: "Incubated and supported" },
  { icon: <Brain className="w-5 h-5" />, label: "500+ Hours", description: "Of one-on-one mentorship provided" }
]

export default function MentorCard() {
  return (
    <div className="bg-[#09090b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <Badge variant="outline" className="text-sm font-semibold">
            Mentorship Program
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Accelerate Your Tech Career with Expert Guidance
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Our mentorship program offers personalized support, technical expertise, and invaluable industry insights to help you launch your projects and accelerate your career in tech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {mentorshipData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c0c0c] border-gray-800">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <div className="bg-white bg-opacity-10 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{item.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/mentor">
              <Button className="bg-white text-[#09090b] hover:bg-gray-200 transition-colors duration-300">
                Book a Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/program-details" className="text-white hover:text-gray-300 transition-colors duration-300">
              Learn more about our program
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}