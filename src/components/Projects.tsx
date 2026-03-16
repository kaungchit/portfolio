import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "EcoSphere Dashboard",
    description: "A real-time environmental monitoring dashboard with complex data visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "D3.js", "Node.js"],
    live: "#",
    github: "#"
  },
  {
    title: "Nova E-Commerce",
    description: "A premium fashion e-commerce platform with seamless transitions and high performance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vue.js", "Laravel", "Stripe"],
    live: "#",
    github: "#"
  },
  {
    title: "Nexus AI Chat",
    description: "An AI-powered chat application featuring real-time responses and multimodal support.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Gemini API", "Socket.io"],
    live: "#",
    github: "#"
  },
  {
    title: "CryptoPulse Tracker",
    description: "Advanced cryptocurrency tracking app with real-time price alerts and portfolio management.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Web3"],
    live: "#",
    github: "#"
  }
];

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-6 shadow-2xl preserve-3d"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a href={project.live} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
            <ExternalLink size={20} />
          </a>
          <a href={project.github} className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-white/50">
            {tag}
          </span>
        ))}
      </div>
      
      <h4 style={{ transform: "translateZ(40px)" }} className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h4>
      <p style={{ transform: "translateZ(20px)" }} className="text-white/60 leading-relaxed">{project.description}</p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h3>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/50 max-w-md"
        >
          A selection of my recent works where I combine design thinking with technical excellence.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <div key={project.title}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
