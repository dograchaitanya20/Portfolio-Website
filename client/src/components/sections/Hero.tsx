import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="min-h-screen relative flex items-center justify-center section-padding overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464802686167-b939a6910659')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px)`,
          filter: "brightness(0.3)"
        }}
      />

      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">Chaitanya Dogra</span>
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl text-primary/80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting digital experiences that push the boundaries of web technology
        </motion.p>
      </div>
    </section>
  );
}