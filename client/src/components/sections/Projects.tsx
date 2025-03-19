import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project Management Dashboard",
    description: "A comprehensive project management solution with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    liveUrl: "https://project1.demo",
    githubUrl: "https://github.com/username/project1"
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    liveUrl: "https://project2.demo",
    githubUrl: "https://github.com/username/project2"
  },
  {
    title: "Social Media Analytics",
    description: "An analytics dashboard for social media metrics with advanced visualization and reporting.",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/username/project3"
  },
  {
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI-powered features for enhanced communication.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    liveUrl: "https://project4.demo",
    githubUrl: "https://github.com/username/project4"
  }
];

export default function Projects() {
  return (
    <section className="section-padding relative" id="projects">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
