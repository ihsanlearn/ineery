import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { SectionTitle } from './SectionTitle';

const EducationExperienceSection = () => {
  const educationData = [
    { year: '2012 - 2018', institution: 'Mulo Baru Elementary School', location: ['Gunungkidul, Special Region of Yogyakarta, Indonesia'] },
    { year: '2018 - 2021', institution: 'Wonosari 3 Junior High School', location: ['Gunungkidul, Special Region of Yogyakarta, Indonesia'] },
    { year: '2021 - 2024', institution: 'Wonosari 2 Senior High School', location: ['Gunungkidul, Special Region of Yogyakarta, Indonesia'] },
    { year: '2024 - Present', institution: 'Sebelas Maret University', location: ['Informatics ( undergraduate )', 'Surakarta, Indonesia'] },
  ];

  const workExperienceData = [
    {
      year: '2023',
      title: 'Private Math Tutor',
      organization: 'AHE',
      description: [
        'Provided personalized math tutoring for students across various levels.',
        'Developed customized learning plans to improve student comprehension and scores.',
      ],
    },
    {
      year: '2024 - Present',
      title: 'National Science Olympiad (OSN) Informatics/Computer Mentor',
      organization: 'Wonosari 2 Senior High School',
      description: [
        'Mentored students for the National Science Olympiad in Informatics/Computer Science.',
        'Focused on problem-solving, algorithms, and data structures.',
        'Helped students develop critical thinking and competitive programming skills.'
      ],
    },
  ];

  const organizationData = [
    {
      year: '2025',
      title: 'P!ngfest 2025',
      role: 'Technology Division',
      description: [
        'Contributed to the planning and execution of technology-related aspects for P!ngfest 2025.',
        'Assisted in developing event registration platform and providing technical support.',
      ],
    },
  ];

  const achievementData = [
    {
      year: '2023',
      title: '1st Place - National Science Olympiad (OSN)',
      level: 'District Level - Informatics/Computer Science',
      description: [
        'Achieved top rank in the highly competitive National Science Olympiad at the district level.',
        'Demonstrated strong problem-solving and algorithmic skills under pressure.',
        'Represented Wonosari 2 Senior High School in the competition.',
      ],
    },
  ];

  return (
    <section className="relative md:py-20 py-13 px-4 md:px-8 bg-card text-foreground overflow-hidden">
      <div className="container mx-auto max-w-4xl space-y-16">

        {/* Section Title */}
        <SectionTitle title='My Journey & Expertise' subtitle='Lets explore my journey and expertise.'/>

        {/* Education History with Timeline Progress */}
        <div className="space-y-8">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-accent ps-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Education
          </motion.h3>

          <div className="relative border-l-2 border-border pl-6 ml-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-8 last:mb-0 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Dot/Indicator for each step */}
                <div className="absolute -left-[2.6rem] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-background text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                {/* Education Card/Content */}
                <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                  <p className="text-muted-foreground text-sm">{edu.year}</p>
                  <h4 className="font-semibold text-lg text-foreground mt-2">{edu.institution}</h4>
                  <p className="text-sm text-foreground">{edu.location[0]}</p>
                  {edu.location[1] && <p className="text-sm text-foreground">{edu.location[1]}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Work Experience */}
        <div className="space-y-8">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-accent ps-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Work Experience
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-2">
            {workExperienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-muted-foreground text-sm">{exp.year}</p>
                <h4 className="font-semibold text-lg text-foreground mt-2">{exp.title}</h4>
                <p className="text-sm text-foreground">{exp.organization}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Organizations & Events */}
        <div className="space-y-8">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-accent ps-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Organizations & Events
          </motion.h3>
          <div className="grid gap-6">
            {organizationData.map((org, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-muted-foreground text-sm">{org.year}</p>
                <h4 className="font-semibold text-lg text-foreground mt-2">{org.title}</h4>
                <p className="text-sm text-foreground">{org.role}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  {org.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Achievements */}
        <div className="space-y-8">
          <motion.h3
            className="text-3xl font-bold text-accent"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Achievements
          </motion.h3>
          <div className="grid gap-6">
            {achievementData.map((ach, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-muted-foreground text-sm">{ach.year}</p>
                <h4 className="font-semibold text-lg text-foreground mt-2">{ach.title}</h4>
                <p className="text-sm text-foreground">{ach.level}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  {ach.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationExperienceSection;