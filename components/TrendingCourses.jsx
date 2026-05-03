import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { FaUserTie, FaStar, FaClock } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

export default function TrendingCourses() {
  const trending = courses.slice(0, 3);

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Trending Courses</h2>
          <p className="text-gray-500 mt-2">
            Most popular courses students are enrolling in right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trending.map((course) => (
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
                <div className="badge badge-outline text-purple-600 border-purple-400 mb-2">
                  {course.category}
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                  <FaUserTie className="text-purple-500" /> {course.instructor}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500 font-bold flex items-center gap-1">
                    <FaStar /> {course.rating}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <FaClock className="text-purple-500" /> {course.duration}
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
      </div>
    </section>
  );
}