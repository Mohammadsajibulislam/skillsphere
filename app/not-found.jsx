import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <h1 className="text-9xl font-bold text-purple-600">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}