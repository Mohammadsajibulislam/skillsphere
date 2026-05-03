"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Skills Today",
    subtitle: "Learn from industry experts and build your dream career",
    bg: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    subtitle: "Thousands of courses to help you grow professionally",
    bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Start Learning for Free",
    subtitle: "Join millions of learners and transform your future",
    bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&h=600&fit=crop",
  },
];
export default function HeroSection() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Link
                  href="/courses"
                  className="btn btn-primary btn-lg"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}