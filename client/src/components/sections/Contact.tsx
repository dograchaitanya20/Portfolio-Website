import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/username", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/username", label: "LinkedIn" },
    { icon: <FiTwitter />, url: "https://twitter.com/username", label: "Twitter" },
    { icon: <FiMail />, url: "mailto:contact@example.com", label: "Email" }
  ];

  return (
    <section className="section-padding relative" id="contact">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 glow">
          Let's Connect
        </h2>
        
        <Card className="bg-background/50 backdrop-blur-lg border-primary/20">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of these platforms:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
