import { motion } from "motion/react";
import { 
  Database, 
  Layers, 
  Code2, 
  Cpu, 
  Globe, 
  Box,
  Terminal,
  Zap
} from "lucide-react";

const technologies = [
  { name: "Laravel", icon: <Terminal />, color: "from-red-500 to-orange-500" },
  { name: "Vue.js", icon: <Globe />, color: "from-emerald-400 to-cyan-400" },
  { name: "React", icon: <Zap />, color: "from-blue-400 to-indigo-500" },
  { name: "Node.js", icon: <Code2 />, color: "from-green-500 to-emerald-600" },
  { name: "Docker", icon: <Box />, color: "from-blue-500 to-blue-700" },
  { name: "MySQL", icon: <Database />, color: "from-blue-600 to-indigo-700" },
  { name: "TypeScript", icon: <Cpu />, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind", icon: <Layers />, color: "from-cyan-400 to-blue-500" },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4"
        >
          Tech Stack
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          My Digital <span className="text-gradient">Arsenal</span>
        </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur-xl -z-10" />
            <div className="glass p-8 rounded-3xl flex flex-col items-center gap-4 group-hover:border-brand-primary/30 transition-all preserve-3d group-hover:[transform:rotateX(10deg)_rotateY(10deg)]">
              <div 
                style={{ transform: "translateZ(30px)" }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-4 text-white shadow-lg group-hover:scale-110 transition-transform preserve-3d`}
              >
                {tech.icon}
              </div>
              <p style={{ transform: "translateZ(20px)" }} className="font-bold text-lg">{tech.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
