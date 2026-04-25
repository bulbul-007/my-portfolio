import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh z-0"></div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-[100px] z-0"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-[120px] z-0"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl text-accent-400 font-medium mb-4 tracking-wide uppercase">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-white mb-6 leading-tight">
              BULBUL <span className="text-gradient">AHMED</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium uppercase tracking-wide">
              Computer Science & Engineering (CSE) Graduate | Software Engineer (Fresher) | App Development with Flutter & AI | Fullstack Web Development
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#projects" className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full text-white font-semibold text-lg overflow-hidden flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300">
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>

              <a href="/cv.pdf" download="Bulbul_Ahmed_CV.pdf" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-72 h-72 md:w-96 md:h-96 group"
          >
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-primary-500/30 rounded-full animate-reverse-spin"></div>
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800/50 shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-shadow duration-500 z-10">
              <img src={profileImg} alt="Bulbul Ahmed Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Glowing background blob */}
            <div className="absolute inset-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-[30px] opacity-40 z-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-slate-400 mb-2 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
