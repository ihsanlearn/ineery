import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto" variants={itemVariants}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}