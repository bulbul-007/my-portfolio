import { motion } from 'framer-motion';
import { Target, Code2, Sparkles, BookOpen, Layers } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const interests = [
  { text: "Software development and application design", icon: <Layers size={18} /> },
  { text: "Problem-solving using data structures and algorithms", icon: <Code2 size={18} /> },
  { text: "Object-oriented programming and clean coding practices", icon: <Sparkles size={18} /> },
  { text: "Learning new programming languages and software technologies", icon: <BookOpen size={18} /> },
  { text: "Building real-world software projects", icon: <Target size={18} /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image/Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-5/12 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Decorative blobs */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-500 to-primary-500 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 opacity-50 blur-lg"></div>
              
              <div className="relative glass-card w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 z-10 flex items-center justify-center bg-slate-800">
                <img src={profileImg} alt="Bulbul Ahmed Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-7/12"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Summary
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Computer Science and Engineering student with strong interest in web development and hands-on experience in JavaScript, React, and Next.js fundamentals. Skilled in building responsive web applications, working with APIs, Git, and databases, with a passion for learning modern technologies and contributing to real-world projects.
            </p>
            
            <h4 className="text-xl font-semibold text-white mb-4">Interests & Focus Areas</h4>
            <div className="grid grid-cols-1 gap-4">
              {interests.map((interest, idx) => (
                <div key={idx} className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors duration-300">
                  <div className="p-2 bg-primary-500/20 text-primary-400 rounded-lg">
                    {interest.icon}
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-medium">{interest.text}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
