import courses from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaStar, FaClock, FaArrowLeft } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const curriculum = [
  "Introduction & Course Overview",
  "Setting Up Your Development Environment",
  "Core Concepts & Fundamentals",
  "Hands-on Projects & Exercises",
  "Advanced Topics & Best Practices",
  "Real-world Application Development",
  "Testing & Debugging",
  "Deployment & Final Project",
];

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <Link href="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <Link href="/courses" className="btn btn-ghost mb-6 flex items-center gap-2">
        <FaArrowLeft /> Back to Courses
      </Link>

      <div className="card bg-base-100 shadow-xl overflow-hidden">
        <figure>
          <Image
            src={course.image}
            alt={course.title}
            width={1200}
            height={500}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="badge badge-primary">{course.category}</span>
            <span className="badge badge-outline flex items-center gap-1">
              <MdOutlineSignalCellularAlt /> {course.level}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.description}</p>

          <div className="flex flex-wrap gap-6 mt-4">
            <p className="flex items-center gap-2 text-gray-600">
              <FaUserTie className="text-primary" /> {course.instructor}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-primary" /> {course.duration}
            </p>
            <p className="flex items-center gap-2 text-yellow-500 font-bold">
              <FaStar /> {course.rating}
            </p>
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-primary btn-lg w-full md:w-auto">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
        <div className="space-y-3">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-base-100 rounded-xl shadow-sm border border-base-200"
            >
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </span>
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}