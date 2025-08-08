import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  delay = 0
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden bg-background/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-colors h-full">
        <div className="relative w-full aspect-video"> {/* Changed to aspect-video for consistent ratio */}
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain bg-black/10" // Changed to object-contain and added subtle background
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
              Image not available
            </div>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex gap-4">
            {liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="mr-2" />
                  Source
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
