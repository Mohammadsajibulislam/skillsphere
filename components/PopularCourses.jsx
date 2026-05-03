import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";

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
          <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
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
              <h3 className="card-title text-lg">{course.title}</h3>
              <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-yellow-500 font-bold">⭐ {course.rating}</span>
                <span className="badge badge-outline badge-sm">{course.level}</span>
              </div>
              <div className="card-actions mt-3">
                <Link
                  href={`/courses/${course.id}`}
                  className="btn btn-primary btn-sm w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}