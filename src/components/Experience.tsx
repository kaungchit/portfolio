import { motion } from "motion/react";

const experiences = [
  {
    company: "TechFlow Solutions",
    role: "Senior Full Stack Developer",
    years: "2022 - Present",
    description: "Leading the development of enterprise-level SaaS applications using React and Node.js. Mentoring junior developers and implementing CI/CD pipelines."
  },
  {
    company: "Creative Pulse Agency",
    role: "Full Stack Developer",
    years: "2020 - 2022",
    description: "Developed high-performance web applications for international clients. Specialized in Vue.js and Laravel integrations."
  },
  {
    company: "StartUp Hub",
    role: "Frontend Developer",
    years: "2018 - 2020",
    description: "Built responsive and accessible user interfaces. Collaborated closely with designers to implement pixel-perfect designs."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4"
          >
            Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)] z-10" />

                <div className="w-full md:w-1/2">
                  <div className="glass p-8 rounded-3xl hover:border-brand-primary/30 transition-all">
                    <p className="text-brand-primary font-bold mb-2">{exp.years}</p>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-white/50 font-medium mb-4">{exp.company}</p>
                    <p className="text-white/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
