import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { FaUserTie, FaStar } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

export default function PopularCourses() {
  const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Popular Courses</h2>
        <p className="text-gray-500 mt-2">Top rated courses by our students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popular.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
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
              <h3 className="font-bold text-lg mb-2 leading-snug">{course.title}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                <FaUserTie className="text-purple-500" /> {course.instructor}
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
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}