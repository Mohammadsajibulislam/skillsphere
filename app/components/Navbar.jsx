"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Skill<span className="text-secondary">Sphere</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium hover:text-primary transition">Home</Link>
          <Link href="/courses" className="font-medium hover:text-primary transition">Courses</Link>
          <Link href="/my-profile" className="font-medium hover:text-primary transition">My Profile</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn btn-outline btn-primary btn-sm">Login</Link>
          <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 px-4 pb-4 flex flex-col gap-3">
          <Link href="/" className="font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/courses" className="font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/my-profile" className="font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>My Profile</Link>
          <Link href="/login" className="btn btn-outline btn-primary btn-sm w-full">Login</Link>
          <Link href="/register" className="btn btn-primary btn-sm w-full">Register</Link>
        </div>
      )}
    </nav>
  );
}