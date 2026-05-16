import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5.03 5.03 0 0 0-.13-3.4s-1.14-.36-3.7 1.37a12.8 12.8 0 0 0-6.8 0C5.14 1.25 4 1.61 4 1.61a5.03 5.03 0 0 0-.13 3.4A5.2 5.2 0 0 0 2.5 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7.5 18v4" />
  </svg>
);

const projectsData = [
  {
    title: 'Obstacle Avoiding Robot Car (Academic Project)',
    description: 'Built a robot car with automatic obstacle detection and direction changing capabilities. Wrote logic for movement and sensor data processing in C/C++. Integrated hardware components (motors, sensors) with software control logic, and performed extensive bug fixing for faster and more accurate responsiveness.',
    tech: ['Embedded Systems', 'C/C++', 'Sensors', 'Hardware Integration'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Bike Sharing System (Academic Project)',
    description: 'Designed a comprehensive web system for users to register, rent, and return bikes with an e-commerce style booking flow. Created a robust database structure for users, inventory, and payments. Authored full project documentation in IEEE format (system design, diagrams, analysis) and practiced real-world dev team skills like requirement gathering and workflow mapping.',
    tech: ['System Design', 'Database Modeling', 'IEEE Documentation', 'Workflow Mapping'],
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Bike Race Game',
    description: 'Developed a playable Android game using Kotlin featuring player control, score tracking, and collision detection. Built responsive UI screens using XML layouts. Leveraged Object-Oriented Programming (OOP) for clean, reusable code architecture and managed app state/screen transitions utilizing Android lifecycle methods.',
    tech: ['Kotlin', 'XML', 'OOP', 'Android Lifecycle'],
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Student Management System',
    description: 'Constructed a web app with full CRUD functionality to add, view, update, and delete student records. Utilized vanilla JavaScript for dynamic page updates without reloading, data validation, and handling all user interactions on the frontend. Organized the architecture into separate functions and modules for maintainability.',
    tech: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Library Management System',
    description: 'Built a full-stack web app featuring an admin dashboard for managing books and members. Developed backend data operations in PHP connected to a well-structured MySQL database. Implemented a role-based login system (admin/member) and designed a clean, responsive frontend using HTML and CSS.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'Fullstack'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary-500/50 transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="h-56 w-full relative overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-[2px]">
                  {project.liveLink && (
                    <a href={project.liveLink} className="p-3 bg-white/10 rounded-full hover:bg-primary-500 hover:text-white text-white transition-colors border border-white/20">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.githubLink} className="p-3 bg-white/10 rounded-full hover:bg-primary-500 hover:text-white text-white transition-colors border border-white/20">
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-slate-800/50">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-primary-500/10 border border-primary-500/20 text-primary-300 font-medium tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
