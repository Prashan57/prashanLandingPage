import React from "react";

import HeroSection from "../sections/HeroSection.tsx";
import WorkSection from "../sections/WorkSection.tsx";
import SkillsetSection from "../sections/SkillsetSection.tsx";
import CarouselSection from "../sections/CarouselSection.tsx";
import AboutMeSection from "../sections/AboutMeSection.tsx";
import Footer from "../sections/Footer.tsx";

export default function Layout() {
  return (
    <div className="grid grid-cols-6 gap-4 w-full bg-red-950">
      <div className="col-start-1 col-span-6 bg-green-800 text-center h-screen">
        <HeroSection />
      </div>
      <div className="col-start-2 col-span-4 bg-green-800 h-[50vh]">
        <WorkSection />
      </div>
      <div className="col-start-2 col-span-4 bg-slate-500">
        <SkillsetSection />
      </div>
      <div className="col-start-2 col-end-6 bg-pink-500">
        <CarouselSection />
      </div>
      <div className="col-start-2 col-span-4 bg-yellow-400">
        <AboutMeSection />
      </div>
      <div className="col-start-1 col-end-7 bg-green-700">
        <Footer />
      </div>
    </div>
  );
}
