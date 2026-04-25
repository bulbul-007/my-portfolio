import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5.03 5.03 0 0 0-.13-3.4s-1.14-.36-3.7 1.37a12.8 12.8 0 0 0-6.8 0C5.14 1.25 4 1.61 4 1.61a5.03 5.03 0 0 0-.13 3.4A5.2 5.2 0 0 0 2.5 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7.5 18v4" />
  </svg>
);

const projectsData = [
  {
    title: 'Obstacle Avoiding Robot Car',
    description: 'Designed and developed an autonomous robot car capable of real-time obstacle detection and avoidance using ultrasonic sensors. Implemented advanced control logic in C++ to automate movement decisions and motor controls. Gained extensive hands-on experience in embedded systems, microcontrollers, and hardware-software integration.',
    tech: ['Embedded Systems', 'C/C++', 'Sensors', 'Arduino'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Bike Sharing System (Academic Project)',
    description: 'Architected a comprehensive system model for managing urban bike rentals, tracking user data, and processing rental transactions. Authored a highly structured academic project report following IEEE LaTeX format. Focused heavily on system methodology, use-case modeling, sequence diagrams, results analysis, and technical documentation.',
    tech: ['System Design', 'LaTeX', 'Data Management', 'UML'],
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Bike Race Game',
    description: 'Developed a dynamic, high-speed 2D mobile bike racing game natively for Android using Kotlin and XML. Implemented physics-based movement, collision detection, score tracking, and an interactive UI. Optimized game loop performance for smooth rendering and responsive touch controls across various mobile devices.',
    tech: ['Kotlin', 'XML', 'Android Studio', 'Mobile Dev'],
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Student Management System',
    description: 'Built a robust web-based application to streamline the management of student records, academic progress, and enrollment data. Developed interactive dashboards using modern JavaScript and DOM manipulation, enabling administrators to efficiently perform CRUD operations, track attendance, and manage academic databases.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    githubLink: '#',
  },
  {
    title: 'Library Management System',
    description: 'Engineered a comprehensive full-stack system to digitize library operations, including inventory management, book issuance tracking, and user account handling. Utilized PHP for backend logic and database interactions, paired with a responsive HTML/CSS frontend. Implemented secure login authentication and search filtering capabilities.',
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
