"use client";
import { useState } from "react";
import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { FaUserTie, FaStar, FaClock, FaSearch } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">All Courses</h1>
        <p className="text-gray-500 mt-2">
          Explore all our courses and start learning today
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 text-lg" />
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-purple-300 focus:border-purple-600 focus:outline-none shadow-md transition-all duration-300 text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Courses Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-20">
          No courses found for &quot;{search}&quot;
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <figure>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={800}
                  height={450}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="p-5">
                <div className="badge badge-outline text-purple-600 border-purple-400 mb-2">{course.category}</div>
                <h3 className="font-bold text-lg mb-2 leading-snug">{course.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                  <FaUserTie className="text-purple-500" /> {course.instructor}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                  <FaClock className="text-purple-500" /> {course.duration}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500 font-bold flex items-center gap-1">
                    <FaStar /> {course.rating}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MdOutlineSignalCellularAlt /> {course.level}
                  </span>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}