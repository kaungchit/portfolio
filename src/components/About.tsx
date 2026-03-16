import { motion } from "motion/react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Happy Clients", value: "20+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Crafting digital experiences with <span className="italic serif">precision</span> and <span className="text-gradient">passion</span>.
            </h3>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with over 5 years of experience in building 
                scalable web applications. My journey started with a curiosity for how things work 
                on the internet, and it has evolved into a career dedicated to creating meaningful 
                digital solutions.
              </p>
              <p>
                I believe in the power of clean code and intuitive design. Every project I undertake 
                is an opportunity to push the boundaries of what's possible on the web, ensuring 
                high performance and exceptional user experience.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-brand-primary/50 transition-all"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm text-white/40 uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
