import { motion } from 'framer-motion';
import { Lightbulb, Brain, Users, Zap, Clock, Box, Network, Terminal } from 'lucide-react';

const techSkills = [
  { 
    category: 'Frontend', 
    span: 'md:col-span-2 lg:col-span-2',
    color: 'from-blue-500/20 to-blue-600/5', 
    borderColor: 'group-hover:border-blue-500/50',
    titleColor: 'text-blue-400',
    items: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'XML', customIcon: <Box size={28} className="text-blue-400" /> },
    ]
  },
  { 
    category: 'Backend', 
    span: 'md:col-span-1 lg:col-span-2',
    color: 'from-purple-500/20 to-purple-600/5',
    borderColor: 'group-hover:border-purple-500/50',
    titleColor: 'text-purple-400',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
      { name: 'REST API', customIcon: <Network size={28} className="text-purple-400" /> },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    ]
  },
  { 
    category: 'Languages', 
    span: 'md:col-span-2 lg:col-span-2',
    color: 'from-yellow-500/20 to-yellow-600/5',
    borderColor: 'group-hover:border-yellow-500/50',
    titleColor: 'text-yellow-400',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    ]
  },
  { 
    category: 'Tools & VCS', 
    span: 'md:col-span-1 lg:col-span-1',
    color: 'from-orange-500/20 to-orange-600/5',
    borderColor: 'group-hover:border-orange-500/50',
    titleColor: 'text-orange-400',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Workflow', customIcon: <Users size={28} className="text-orange-400" /> },
    ]
  },
  { 
    category: 'Databases', 
    span: 'md:col-span-1 lg:col-span-1',
    color: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'group-hover:border-emerald-500/50',
    titleColor: 'text-emerald-400',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ]
  },
  { 
    category: 'Core Concepts', 
    span: 'md:col-span-2 lg:col-span-2',
    color: 'from-indigo-500/20 to-indigo-600/5',
    borderColor: 'group-hover:border-indigo-500/50',
    titleColor: 'text-indigo-400',
    items: [
      { name: 'OOP', customIcon: <Box size={28} className="text-indigo-400" /> },
      { name: 'Algorithms', customIcon: <Network size={28} className="text-indigo-400" /> },
      { name: 'AI Dev', customIcon: <Brain size={28} className="text-indigo-400" /> },
    ]
  },
  { 
    category: 'OS', 
    span: 'md:col-span-1 lg:col-span-2',
    color: 'from-cyan-500/20 to-cyan-600/5',
    borderColor: 'group-hover:border-cyan-500/50',
    titleColor: 'text-cyan-400',
    items: [
      { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ]
  },
];

const softSkills = [
  { name: 'Problem solving', icon: <Lightbulb size={20} className="text-yellow-400" /> },
  { name: 'Analytical thinking', icon: <Brain size={20} className="text-pink-400" /> },
  { name: 'Team collaboration', icon: <Users size={20} className="text-blue-400" /> },
  { name: 'Quick learner', icon: <Zap size={20} className="text-amber-400" /> },
  { name: 'Time management', icon: <Clock size={20} className="text-emerald-400" /> },
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {techSkills.map((group, idx) => (
            <motion.div 
              key={idx}
              className={`group relative glass-card p-6 md:p-8 rounded-3xl border border-white/5 transition-all duration-500 overflow-hidden ${group.span} ${group.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className={`text-2xl font-bold mb-6 ${group.titleColor} tracking-wide group-hover:scale-[1.02] transition-transform origin-left`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-auto">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 w-[84px] h-[84px] rounded-2xl bg-slate-800/80 border border-white/5 hover:bg-slate-700/80 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
                       {item.icon ? (
                         <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain drop-shadow-md" />
                       ) : (
                         item.customIcon
                       )}
                       <span className="text-[11px] text-slate-300 font-medium text-center leading-tight px-1">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Soft Skills Bento Box */}
          <motion.div
            className="group relative glass-card p-6 md:p-10 rounded-3xl border border-white/5 hover:border-pink-500/50 transition-all duration-500 overflow-hidden md:col-span-3 lg:col-span-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
               <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-3 tracking-wide">Soft Skills</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Beyond code, these are the interpersonal traits that help me thrive in collaborative team environments and tackle complex problems.</p>
               </div>
               <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
                  {softSkills.map((skill, i) => (
                     <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-slate-800/90 border border-white/10 hover:border-pink-500/40 hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg">
                        {skill.icon}
                        <span className="text-slate-200 text-sm font-semibold tracking-wide">{skill.name}</span>
                     </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
