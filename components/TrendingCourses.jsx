import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";

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
                <div className="badge badge-secondary">{course.category}</div>
                <h3 className="card-title text-lg mt-1">{course.title}</h3>
                <p className="text-sm text-gray-500">👨‍🏫 {course.instructor}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-500 font-bold">⭐ {course.rating}</span>
                  <span className="text-sm text-gray-400">⏱ {course.duration}</span>
                </div>
                <div className="card-actions mt-3">
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn btn-secondary btn-sm w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}