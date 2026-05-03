import Image from "next/image";
import { FaUsers } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    subject: "Web Development",
    students: "12,500",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    subject: "UI/UX Design",
    students: "9,800",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    subject: "Data Science",
    students: "8,200",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "David Lee",
    subject: "React & Next.js",
    students: "15,000",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function TopInstructors() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Top Instructors</h2>
        <p className="text-gray-500 mt-2">Learn from the best in the industry</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center p-6"
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-purple-400 ring-offset-2">
                <Image
                  src={instructor.avatar}
                  alt={instructor.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg">{instructor.name}</h3>
            <p className="text-sm text-purple-600 font-medium">{instructor.subject}</p>
            <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
              <FaUsers className="text-purple-500" /> {instructor.students} students
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}