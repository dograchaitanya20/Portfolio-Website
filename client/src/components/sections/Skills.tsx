import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { FiCode, FiLayout, FiDatabase, FiGitBranch } from "react-icons/fi";

export default function Skills() {
  const skills = [
    { icon: <FiCode />, name: "Frontend Development", level: 90 },
    { icon: <FiDatabase />, name: "Backend Development", level: 85 },
    { icon: <FiLayout />, name: "UI/UX Design", level: 80 },
    { icon: <FiGitBranch />, name: "Version Control", level: 95 }
  ];

  return (
    <section className="section-padding relative" id="skills">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
