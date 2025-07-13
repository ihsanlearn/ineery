import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

interface LatestNewsCardProps {
  tech: string[];
  title: string;
  description: string;
  imagePath: string;
  linkHref: string;
  delay?: number;
}

export function ProjectCard({ tech, imagePath, title, description, linkHref, delay = 0 }: LatestNewsCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: delay, ease: "easeOut"} as const},
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link href={linkHref} className="block group">
        <Card className="bg-card border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-accent/10">
          <CardHeader>
            <Image
              src={imagePath}
              width={300}
              height={100}
              alt="Proyek 1"
              className="rounded-t-lg mb-4 object-cover h-48 w-full"
            />
            <CardTitle className="text-xl font-semibold text-secondary">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((tech, index) => {
                return (
                  <span key={index} className="text-sm bg-muted rounded-full px-3 py-1">{tech}</span>
                )
              })}
            </div>
            <Button variant="link" className="text-primary hover:text-accent" onClick={() => window.open('#', '_blank')}>
              Lihat Proyek &rarr;
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}