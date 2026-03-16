import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    text: "Nexus transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Product Manager at CreativePulse",
    text: "Working with Nexus was a game-changer for our platform. The performance improvements were immediate and significant.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emma Davis",
    role: "Founder of StartUp Hub",
    text: "The most professional developer I've ever worked with. They delivered ahead of schedule and exceeded all expectations.",
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4"
        >
          Testimonials
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          What Clients <span className="text-gradient">Say</span>
        </motion.h3>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass p-12 rounded-[40px] text-center relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-black shadow-lg shadow-brand-primary/20">
              <Quote size={24} />
            </div>
            
            <p className="text-2xl md:text-3xl font-medium text-white/80 mb-10 leading-relaxed italic">
              "{testimonials[index].text}"
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <img 
                src={testimonials[index].avatar} 
                alt={testimonials[index].name} 
                className="w-16 h-16 rounded-full border-2 border-brand-primary p-1"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xl font-bold">{testimonials[index].name}</p>
                <p className="text-sm text-white/40 uppercase tracking-widest font-medium">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-brand-primary" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
