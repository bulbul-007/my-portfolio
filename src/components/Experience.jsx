import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    type: 'education',
    title: 'B.Sc. in Computer Science and Engineering',
    organization: 'Bangladesh University of Business & Technology (BUBT)',
    date: 'Jan 2022 - Dec 2025',
    description: '',
  },
  {
    type: 'education',
    title: 'HSC - Science (GPA: 5.00)',
    organization: 'Police Lines School & College, Bogura',
    date: '2020',
    description: '',
  },
  {
    type: 'education',
    title: 'SSC - Science (GPA: 4.89)',
    organization: 'Unukhan Paglapir High School, Sirajganj',
    date: '2018',
    description: '',
  },
  {
    type: 'certification',
    title: 'Certificate of Completion',
    organization: 'Academy of Bachelor of Science in Computer Science & Engineering (CSE)',
    date: '',
    description: '',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-secondary-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.type === 'education' ? 'from-primary-500/40 to-accent-500/0' : 'from-secondary-500/40 to-primary-500/0'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

              <div className="glass-card h-full p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden bg-slate-800/80">
                {/* Background Accent */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${item.type === 'education' ? 'bg-primary-500' : 'bg-secondary-500'}`}></div>

                <div className="flex justify-between items-start mb-6">
                  {item.date ? (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit group-hover:border-primary-500/30 transition-colors">
                      <Calendar size={14} className="text-primary-400" />
                      <span className="text-primary-300 text-xs font-semibold tracking-wider">{item.date}</span>
                    </div>
                  ) : (
                     <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
                        <span className="text-secondary-300 text-xs font-semibold tracking-wider">Certified</span>
                     </div>
                  )}

                  <div className={`p-3 rounded-xl border border-white/10 shadow-lg ${item.type === 'education' ? 'bg-primary-500/20 text-primary-300' : 'bg-secondary-500/20 text-secondary-300'}`}>
                    {item.type === 'education' ? <GraduationCap size={24} /> : <Award size={24} />}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                  {item.title}
                </h3>
                
                <h4 className="text-slate-400 text-base font-medium flex items-center gap-2">
                  {item.organization}
                </h4>

                {item.description && (
                  <p className="text-slate-300 text-sm leading-relaxed mt-4 pt-4 border-t border-white/10 relative">
                    {item.description}
                  </p>
                )}

                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.type === 'education' ? 'from-primary-500 to-accent-500' : 'from-secondary-500 to-primary-500'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
