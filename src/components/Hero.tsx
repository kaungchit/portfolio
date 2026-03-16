import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const rotatingWords = ["Web.", "Apps.", "Design.", "Future."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tagline = "I'm a Full Stack Developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.";

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
  };

  const taglineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.01, 
        delayChildren: 1.2,
      },
    },
  };

  const taglineChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="perspective-1000"
        >
          <motion.div
            variants={taglineChild}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6"
          >
            <div className="overflow-hidden">
              <motion.span variants={child} className="inline-block">Building</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={child} className="inline-block">the</motion.span>
              <motion.span variants={child} className="inline-block text-gradient ml-4">Future</motion.span>
            </div>
            <div className="overflow-hidden flex items-center h-[1.1em]">
              <motion.span variants={child} className="inline-block">of</motion.span>
              <div className="relative ml-4 inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-block text-brand-primary"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.h1>
          
          <motion.p 
            variants={taglineContainer}
            className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed flex flex-wrap"
          >
            {tagline.split("").map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span
                  variants={taglineChild}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.p>

          <motion.div variants={container} custom={25} className="flex flex-wrap gap-4">
            <motion.a
              variants={child}
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-brand-primary transition-colors"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              variants={child}
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 242, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative hidden lg:block perspective-1000"
        >
          <div 
            style={{ transform: "translateZ(50px)" }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-primary/20 preserve-3d"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Developer" 
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(100px)" }}
            className="absolute -top-10 -right-10 glass p-6 rounded-2xl z-20 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                <Download size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Experience</p>
                <p className="text-xl font-bold">5+ Years</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transform: "translateZ(150px)" }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl z-20 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary">
                <ArrowRight size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Projects</p>
                <p className="text-xl font-bold">50+ Done</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
}
