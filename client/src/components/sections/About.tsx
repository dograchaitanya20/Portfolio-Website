import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-padding relative" id="about">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow">
          About Me
        </h2>

        <Card className="bg-background/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-colors">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Profile"
                    className="rounded-lg w-full object-cover aspect-square"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    Background
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 5 years of experience in web development, I specialize in
                    creating innovative and performant applications that deliver exceptional
                    user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    Passion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about combining creative design with technical excellence,
                    always staying at the forefront of web technologies and best practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    Current Focus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently focused on building scalable web applications and exploring
                    the latest in UI/UX design trends and frontend technologies.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}