import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiC,
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiC size={40} />, name: "C" },
    { icon: <SiCplusplus size={40} />, name: "C++" },
    { icon: <SiOpenjdk size={40} />, name: "Java" },
    { icon: <SiPython size={40} />, name: "Python" },
    { icon: <SiCss3 size={40} />, name: "CSS" },
    { icon: <SiHtml5 size={40} />, name: "HTML" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <SiNodedotjs size={40} />, name: "Node.js" },
    { icon: <SiReact size={40} />, name: "React" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
  ];

  return (
    <section className="section-padding relative" id="skills">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow">
          Skills & Technologies
        </h2>

        <Card className="bg-background/50 backdrop-blur-lg border-primary/20">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}