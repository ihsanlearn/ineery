"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as const},
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" , delay: 0.4 } as const },
  };

  return (
    <section id='ineery' className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-background text-foreground px-4 md:px-8">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-glow"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Ineery
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Ineery is <strong>more than</strong> just a portfolio — it&apos;s a <strong>reflection of curiosity, growth, and a commitment</strong> to building purposeful digital solutions. Dive into my work and discover how I turn concepts into <strong>clean, modern, and meaningful</strong> experiences
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Link
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform"
            href='#aboutme'
          >
            Let&apos;s go 
          </Link>
        </motion.div>
      </div>
    </section>
  );
}