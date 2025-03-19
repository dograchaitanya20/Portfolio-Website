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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center glow">
          About Me
        </h2>
        
        <Card className="bg-background/50 backdrop-blur-lg border-primary/20">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Background
                </h3>
                <p className="text-muted-foreground">
                  With over 5 years of experience in web development, I specialize in
                  creating innovative and performant applications that deliver exceptional
                  user experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Passion
                </h3>
                <p className="text-muted-foreground">
                  I'm passionate about combining creative design with technical excellence,
                  always staying at the forefront of web technologies and best practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
