import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}