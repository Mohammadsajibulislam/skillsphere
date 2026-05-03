import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Skill<span className="text-primary opacity-100">Sphere</span>
          </h2>
          <p className="text-sm opacity-110">
            Your gateway to modern skills. Learn from industry experts and level up your career.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm opacity-75 flex items-center gap-2 mb-2">
            <FaEnvelope className="text-primary" /> support@skillsphere.com
          </p>
          <p className="text-sm opacity-100 flex items-center gap-2 mb-2">
            <FaPhone className="text-primary" /> +880 1234-567890
          </p>
          <p className="text-sm opacity-100 flex items-center gap-2 mb-4">
            <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xl hover:text-primary transition opacity-100 "><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-primary transition opacity-100 "><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-primary transition opacity-100 "><FaYoutube /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm hover:text-purple-300 transition">Home</Link>
            <Link href="/courses" className="text-sm opacity-75 hover:opacity-100 transition">Courses</Link>
            <Link href="#" className="text-sm opacity-75 hover:opacity-100 transition">Terms & Conditions</Link>
            <Link href="#" className="text-sm opacity-75 hover:opacity-100 transition">Privacy Policy</Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-700 text-center py-4 text-sm opacity-60">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}