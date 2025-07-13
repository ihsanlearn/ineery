"use client";

import { Navbar } from '@/components/big/Navbar';
import { Hero } from '@/components/big/Hero';
import { SectionTitle } from '@/components/big/SectionTitle';
import { ProjectCard } from '@/components/big/ProjectCard';
import { Footer } from '@/components/big/Footer';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Skills from '@/components/big/Skills';
import { SiGithub, SiInstagram, SiLinkedin, SiMaildotru, SiWhatsapp } from 'react-icons/si';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import EducationExperience from '@/components/big/EducationExperience';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Home() {

  const projects = [
    {
      title: 'GemFood — Local E-Commerce for Culinary Products',
      description: 'Built a custom e-commerce platform specifically designed for local food sellers in my village. The app supports dual roles (customer & partner), order tracking, Firebase authentication, and clean UI separation using Next.js app router. The project emphasizes full-stack skills, user experience, and real-world business logic.',
      linkHref: '#',
      delay: 0.2,
      tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      imagePath: '/images/ecommerce.jpg'
    },
    {
      title: 'Cyber Security Notes — GitHub Markdown Archive',
      description: 'A growing collection of personal study notes and summaries on cybersecurity topics, including networking, penetration testing, Wi-Fi exploitation, and ethical hacking. Organized in Markdown format on GitHub to help beginners and track my learning progress in a clean, public archive.',
      linkHref: 'https://github.com/ihsanlearn/cs',
      delay: 0.6,
      tech: ['Cyber Security', 'GitHub', 'Networking'],
      imagePath: '/images/cyber-security.jpg'
    },
    {
      title: 'Daisuke Clinic — Java CLI Patient Management System',
      description: 'A command-line based medical record management system built using Java without external frameworks. It manages patient records, schedules, and visit logs, storing data in structured TXT files. This project demonstrates solid OOP design and hands-on implementation of custom file-based storage.',
      linkHref: 'https://github.com/ihsanlearn/dsa-clinic',
      delay: 0.4,
      tech: ['Java', 'CLI', 'File I/O', 'OOP'],
      imagePath: '/images/clinic.jpg'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen md:max-w-10/12 bg-background text-foreground antialiased">
      <Navbar />
      <main className='py-20'>
        <Hero />

        <Separator className="bg-border" />

        {/* About Me Section */}
        <section id='aboutme' className="bg-color-card-background px-4 md:px-8 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative min-h-[300px] flex items-center justify-center"
            >
              <Image
                src="/images/ihsan.png"
                alt="Strategies Illustration"
                width={600}
                height={400}
                className="w-64 h-auto  rounded-2xl animate-float-bob"
              />
              <div className="absolute inset-0 bg-gradient-radial from-color-primary/10 to-transparent rounded-full blur-2xl opacity-50 z-[-1]"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                variants={itemVariants}
              >
                Ihsan Restu Adi
              </motion.h2>
              <p className="text-lg text-muted-foreground">
                I’m an Informatics student at <strong>Universitas Sebelas Maret (UNS)</strong> with a strong interest in <strong>cybersecurity, IoT, and Networking</strong>. I enjoy learning through <strong>hands-on projects and real-world experiments</strong>.
              </p>
              <Link href='#contact' className="border-color-accent text-primary hover:underline py-2 text-lg rounded-full">
                Interest?
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Educations Section */}
        <section id='experience' className="bg-color-card-background py-20 px-4 md:px-8">
          <EducationExperience />
        </section>

        {/* Skills Section */}
        <section id='skills' className="bg-color-card-background md:py-16 px-4 py-8 md:px-8">
          <Skills />
        </section>

        {/* Latest Project Section */}
        <section id='projects' className="container mx-auto px-4 py-8 md:px-8 md:py-16">
          <SectionTitle
            title="Latest Project"
            subtitle="Take a look at what I’ve been building lately, each one a step forward in my learning path."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imagePath={project.imagePath}
                  tech={project.tech}
                  linkHref={project.linkHref}
                  delay={project.delay}
                />
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-color-primary text-color-primary hover:bg-color-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full">
              View More Projects
            </Button>
          </div>
        </section>

         {/* Contact Section */}
        <section id="contact" className="py-16">
          <SectionTitle 
            title='Contact Info'
            subtitle="Feel free to reach out using the form below or connect through my social channels."
          />
          <motion.div
            className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your Name" type="text" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="email@example.com" type="email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message here.." className="mt-1 min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send
              </Button>
            </form>
            <div className="mt-8 text-center border-t border-border pt-6">
              <p className="text-foreground text-xl font-semibold mb-4">Also Connected With</p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="mailto:iihsannlearn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex flex-col items-center group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiMaildotru className="text-4xl mb-1 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">Email</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ihsan-restu-adi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex flex-col items-center group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiLinkedin className="text-4xl mb-1 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/ihsanlearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex flex-col items-center group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiGithub className="text-4xl mb-1 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com/iihsannr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex flex-col items-center group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiInstagram className="text-4xl mb-1 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">Instagram</span>
                </motion.a>
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Located at Wonosari, Daerah Istimewa Yogyakarta, Indonesia.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}