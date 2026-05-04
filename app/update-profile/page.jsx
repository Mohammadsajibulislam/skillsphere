"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUser, FaImage } from "react-icons/fa";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const name = session?.user?.name || "";
  const image = session?.user?.image || "";

  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.updateUser({
      name: formName || name,
      image: formImage || image,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Update failed!");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Update Profile</h1>
            <p className="text-gray-500 mt-2">Update your name and profile picture</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                placeholder={name || "Full Name"}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="url"
                placeholder="Photo URL"
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition"
                value={formImage}
                onChange={(e) => setFormImage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}