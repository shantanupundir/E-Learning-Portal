"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Clock } from "lucide-react";

interface CourseCardProps {
  type: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  courses?: number;
  certificate?: boolean;
  isCareerPath?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  type,
  title,
  description,
  level,
  duration,
  courses,
  certificate,
  isCareerPath = false,
}) => (
  <Card
    className={`${
      isCareerPath ? "bg-primary text-primary-foreground" : "bg-secondary"
    } h-full bg-[#0c0c0c] border-none`}
  >
    <CardHeader>
      <div
        className={`text-xs font-semibold mb-2 ${
          isCareerPath ? "text-primary-foreground" : "text-green-500"
        }`}
      >
        {type}
      </div>
      <CardTitle className="text-lg font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-4">{description}</p>
      {courses && <p className="text-sm mb-2">Includes {courses} Courses</p>}
      {certificate && (
        <p className="text-sm mb-2 flex items-center">
          <BarChart2 className="w-4 h-4 mr-1" /> With Certificate
        </p>
      )}
    </CardContent>
    <CardFooter className="text-xs flex justify-between items-center">
      <div className="flex items-center">
        <BarChart2 className="w-4 h-4 mr-1" />
        <span>{level} Friendly</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        <span>{duration}</span>
      </div>
    </CardFooter>
  </Card>
);

export default function CourseCatalog() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "AI",
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths",
  ];
  const courses = [
    {
      type: "Free course",
      title: "Intro to Generative AI",
      description:
        "Dive into the many forms of generative AI and learn how we can best use these new technologies!",
      level: "Beginner",
      duration: "< 1 hour",
      category: "AI",
    },
    {
      type: "Free course",
      title: "Learn How to Use ChatGPT",
      description:
        "Ready to dive into the world of Generative AI? Learn how ChatGPT works, how to use ChatGPT in your daily life, and much more!",
      level: "Beginner",
      duration: "1 hour",
      category: "AI",
    },
    {
      type: "Free course",
      title: "Learn How to Use AI for Coding",
      description:
        "Ready to learn how to use AI for coding? Learn how to use generative AI tools like ChatGPT to help you write better code, faster.",
      level: "Beginner",
      duration: "1 hour",
      category: "AI",
    },
    {
      type: "Career path",
      title: "Machine Learning/AI Engineer",
      description:
        "Machine Learning/AI Engineers build end-to-end ML applications and power many of the apps we use daily.",
      level: "Intermediate",
      duration: "50 hours",
      courses: 7,
      certificate: true,
      isCareerPath: true,
      category: "Career paths",
    },
  ];

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <div className="bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 ">
          <TabsList className="w-full justify-start overflow-x-auto ">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`text-sm font-medium ${
                  activeTab === category ? "bg-white text-black" : ""
                }`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center">
          <Button className="bg-white text-black hover:bg-gray-200">
            Explore Full Catalog
          </Button>
        </div>
      </div>
    </div>
  );
}
