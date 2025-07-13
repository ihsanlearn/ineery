"use client"

import { motion } from 'framer-motion';

import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiShadcnui, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiDocker } from 'react-icons/si';
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaUserSecret } from 'react-icons/fa';
import { SectionTitle } from './SectionTitle';

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Shadcn/ui", icon: SiShadcnui },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Cyber Security", icon: FaUserSecret },
    { name: "RESTful APIs", icon: FaDatabase }, 
    { name: "UI/UX Design", icon: FaLaptopCode },
    { name: "Responsive Web Design", icon: FaMobileAlt },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="md:py-16 rounded-lg shadow-lg mb-16 px-6">
      <SectionTitle
        title="My Skills"
        subtitle="These are the tools and technologies I've learned and applied in real-world projects."
      />
      <motion.div
        className="flex flex-wrap justify-center md:gap-4 gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.span
              key={index}
              className="bg-secondary text-secondary-foreground md:text-lg text-sm px-3 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center gap-2" // Menambahkan flex dan gap untuk tata letak ikon dan teks
              variants={itemVariants}
            >
              {IconComponent && <IconComponent className="md:text-2xl text-xl" />}
              {skill.name}
            </motion.span>
          );
        })}
      </motion.div>
    </section>
  )
}