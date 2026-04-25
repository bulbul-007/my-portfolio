import { motion } from 'framer-motion';
import { Lightbulb, Brain, Users, Zap, Clock, Box, Network, Braces } from 'lucide-react';

const techSkills = [
  { 
    category: 'Programming Languages', 
    color: 'text-blue-400', 
    bg: 'bg-blue-400/10',
    items: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ]
  },
  { 
    category: 'Core Concepts', 
    color: 'text-purple-400', 
    bg: 'bg-purple-400/10',
    items: [
      { name: 'Object-Oriented Programming (OOP)', customIcon: <Box size={20} className="text-purple-400" /> },
      { name: 'Data Structures', customIcon: <Network size={20} className="text-purple-400" /> },
      { name: 'Algorithms (Basic)', customIcon: <Braces size={20} className="text-purple-400" /> },
    ]
  },
  { 
    category: 'Databases', 
    color: 'text-emerald-400', 
    bg: 'bg-emerald-400/10',
    items: [
      { name: 'MySQL (Basic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ]
  },
  { 
    category: 'Tools', 
    color: 'text-orange-400', 
    bg: 'bg-orange-400/10',
    items: [
      { name: 'Git (Basic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    ]
  },
  { 
    category: 'Operating Systems', 
    color: 'text-cyan-400', 
    bg: 'bg-cyan-400/10',
    items: [
      { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg' },
      { name: 'Linux (Basic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ]
  },
];

const softSkills = [
  { name: 'Problem solving', icon: <Lightbulb size={24} className="text-yellow-400" /> },
  { name: 'Analytical thinking', icon: <Brain size={24} className="text-pink-400" /> },
  { name: 'Team collaboration', icon: <Users size={24} className="text-blue-400" /> },
  { name: 'Quick learner', icon: <Zap size={24} className="text-amber-400" /> },
  { name: 'Time management', icon: <Clock size={24} className="text-emerald-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Technical Skills</h3>
            <div className="space-y-6">
              {techSkills.map((skillGroup, index) => (
                <div key={index} className="glass p-5 rounded-xl border border-white/5">
                  <h4 className={`text-lg font-medium ${skillGroup.color} mb-4`}>{skillGroup.category}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skillGroup.items.map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${skillGroup.bg} border border-white/5 hover:bg-white/10 transition-colors duration-300`}>
                        {item.icon ? (
                          <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                        ) : (
                          item.customIcon
                        )}
                        <span className="text-sm text-slate-200 font-medium">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="glass p-5 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 gap-3">
                  <div className="p-3 bg-slate-800 rounded-full border border-white/10 shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            
            {/* Abstract visual graphic for the skills section */}
            <div className="mt-12 relative flex justify-center items-center h-64 overflow-hidden rounded-2xl glass-card hidden lg:flex">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
               <div className="w-40 h-40 border border-primary-500/40 rounded-full animate-spin-slow absolute"></div>
               <div className="w-32 h-32 border border-secondary-500/40 rounded-full animate-reverse-spin absolute"></div>
               <div className="w-20 h-20 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-[10px] opacity-80 flex items-center justify-center">
                  <span className="text-white font-bold text-xl drop-shadow-md">&lt;/&gt;</span>
               </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
