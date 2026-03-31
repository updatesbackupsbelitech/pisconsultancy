import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import projectsHero from "@/assets/projects-hero.jpg";
import Kn from "@/assets/app-microfinance.jpg";
import Golden from "@/assets/app-school.jpg";
import Big from "@/assets/app-pos.jpg";

const allProjects = [
  { title: "KN Nyamekye Enterprise", summary: "A comprehensive microfinance management platform for loan processing, client management, and financial reporting.", category: "Microfinance", image: Kn },
  { title: "Golden Medals School", summary: "Full-featured school management system handling student records, grading, attendance, and administrative tasks.", category: "School Management System", image: Golden },
  { title: "BigFish Restaurant", summary: "Modern POS system with real-time order management, inventory tracking, and sales analytics for the restaurant industry.", category: "POS System", image: Big },
];

const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Projects"
        subtitle="Over 8 years of delivering impactful results across diverse sectors in Ghana and beyond."
        image={projectsHero}
      />

      <SectionWrapper>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionWrapper>

      <CTABanner title="Let's Work Together" subtitle="Every project is an opportunity to deliver exceptional value. Contact us to discuss your needs." />
      <Footer />
    </div>
  );
};

export default Projects;
