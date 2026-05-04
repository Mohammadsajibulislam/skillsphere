"use client";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Skill<span className="text-purple-600">Sphere</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium hover:text-purple-600 transition">Home</Link>
          <Link href="/courses" className="font-medium hover:text-purple-600 transition">Courses</Link>
          <Link href="/my-profile" className="font-medium hover:text-purple-600 transition">My Profile</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <Link href="/my-profile">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full ring-2 ring-purple-400 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold ring-2 ring-purple-400">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300">
                Login
              </Link>
              <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 shadow-md">
          <Link href="/" className="font-medium hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/courses" className="font-medium hover:text-purple-600" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/my-profile" className="font-medium hover:text-purple-600" onClick={() => setMenuOpen(false)}>My Profile</Link>
          {session?.user ? (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="border-2 border-purple-600 text-purple-600 font-semibold px-4 py-2 rounded-xl text-center" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link href="/register" className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-xl text-center" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}