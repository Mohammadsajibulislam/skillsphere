"use client";
import { useState } from "react";
import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Courses</h1>
        <p className="text-gray-500 mt-2">
          Explore all our courses and start learning today
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses by title..."
          className="input input-bordered w-full max-w-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
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
              <div className="card-body">
                <div className="badge badge-outline">{course.category}</div>
                <h3 className="card-title text-lg mt-1">{course.title}</h3>
                <p className="text-sm text-gray-500">
                  Instructor: {course.instructor}
                </p>
                <p className="text-sm text-gray-500">
                  Duration: {course.duration}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500 font-bold">
                    ⭐ {course.rating}
                  </span>
                  <span className="badge badge-sm">{course.level}</span>
                </div>
                <div className="card-actions mt-3">
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn btn-primary btn-sm w-full"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}