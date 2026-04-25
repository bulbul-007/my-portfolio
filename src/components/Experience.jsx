import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science & Engineering (CSE)',
    organization: 'Bangladesh University of Business and Technology - BUBT',
    date: 'Jan 2022 - Dec 2025',
    description: '',
  },
  {
    type: 'certification',
    title: 'Certificate of Completion',
    organization: 'Academy of Bachelor of Science in Computer Science & Engineering (CSE)',
    date: '',
    description: 'I hereby declare that the information provided above is true and correct to the best of my knowledge.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform md:-translate-x-1/2 rounded-full opacity-30"></div>

          {educationData.map((item, index) => (
            <div key={index} className="relative mb-12 md:mb-20">
              
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full glass flex items-center justify-center border-2 border-primary-500 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                {item.type === 'education' ? (
                  <GraduationCap size={18} className="text-primary-400" />
                ) : (
                  <Award size={18} className="text-secondary-400" />
                )}
              </div>

              {/* Content Card */}
              <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`glass-card p-6 md:p-8 relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                  >
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-slate-800 border-t border-l border-white/10 hidden md:block
                      ${index % 2 === 0 ? '-left-2 border-r-0 border-b-0' : '-right-2 border-l-0 border-t-0 border-r border-b'}
                    "></div>
                    
                    {item.date && (
                      <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-semibold tracking-wider mb-4">
                        {item.date}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-slate-400 text-sm font-medium mb-4">{item.organization}</h4>
                    {item.description && (
                      <p className="text-slate-300 text-sm leading-relaxed italic border-t border-white/10 pt-4 mt-2">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
