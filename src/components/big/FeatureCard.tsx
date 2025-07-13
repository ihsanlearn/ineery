import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ElementType } from 'react';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: delay, ease: "easeOut"} as const },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Card className="bg-card border-border p-6 flex flex-col items-center text-center group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
        <CardHeader className="p-0 mb-4">
          <div className="mb-3 rounded-full p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="w-8 h-8" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-foreground/70 text-sm">
          {description}
        </CardContent>
      </Card>
    </motion.div>
  );
}