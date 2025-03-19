import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  delay?: number;
}

export default function SkillCard({ icon, name, level, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-background/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-colors">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-4 text-primary">{icon}</div>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.3 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
