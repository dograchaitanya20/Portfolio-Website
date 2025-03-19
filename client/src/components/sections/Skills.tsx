import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, 
         SiMongodb, SiPostgresql, SiDocker, SiGit,
         SiNextdotjs, SiVuedotjs, SiPython, SiJavascript } from "react-icons/si";

export default function Skills() {
  const technologies = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiVuedotjs, name: "Vue.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGit, name: "Git" }
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
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <tech.icon className="w-12 h-12 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <p className="text-sm font-medium">{tech.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}