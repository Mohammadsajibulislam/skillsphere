"use client";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="text-gray-500 mt-2">Manage your account information</p>
          </div>

          <div className="flex justify-center mb-6">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={120}
                height={120}
                className="w-28 h-28 rounded-full ring-4 ring-purple-400 ring-offset-2 object-cover"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl font-bold ring-4 ring-purple-400 ring-offset-2">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <FaUser className="text-purple-500 text-xl" />
              <div>
                <p className="text-xs text-gray-400">Full Name</p>
                <p className="font-semibold text-gray-800">{user?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <FaEnvelope className="text-purple-500 text-xl" />
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="font-semibold text-gray-800">{user?.email}</p>
              </div>
            </div>
          </div>

          <Link
            href="/update-profile"
            className="flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <FaEdit /> Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}