import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-primary font-bold mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h3>
            <p className="text-lg text-white/60 mb-12 max-w-md leading-relaxed">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">hello@nexus.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-xl font-bold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white/50 hover:text-brand-primary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[40px]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
