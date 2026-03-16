import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded rotate-12" />
          <span className="font-bold tracking-tighter">NEXUS</span>
        </div>
        
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Nexus Portfolio. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-white/30 hover:text-brand-primary transition-colors">Privacy</a>
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-white/30 hover:text-brand-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
