import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5.03 5.03 0 0 0-.13-3.4s-1.14-.36-3.7 1.37a12.8 12.8 0 0 0-6.8 0C5.14 1.25 4 1.61 4 1.61a5.03 5.03 0 0 0-.13 3.4A5.2 5.2 0 0 0 2.5 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7.5 18v4" /></svg>
);
const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const PortfolioIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'mbbulbuli2@gmail.com',
    link: 'mailto:mbbulbuli2@gmail.com',
    color: 'from-primary-500 to-primary-600',
    textHover: 'group-hover:text-primary-400'
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    value: '+8801927824006',
    link: 'tel:+8801927824006',
    color: 'from-secondary-500 to-secondary-600',
    textHover: 'group-hover:text-secondary-400'
  },
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    value: 'Mirpur, Dhaka, Bangladesh',
    link: null,
    color: 'from-accent-500 to-accent-600',
    textHover: 'group-hover:text-accent-400'
  }
];

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    // Replace with your Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mail sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/80">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="group relative glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${info.color} scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500`}></div>
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className={`text-lg font-semibold text-white ${info.textHover} transition-colors`}>
                          {info.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-semibold text-white ${info.textHover} transition-colors`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Grid */}
            <div className="mt-10 p-6 glass-card rounded-2xl border border-white/5">
              <h4 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider text-center">Find me online</h4>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/bulbul-007" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-500 hover:border-primary-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <GithubIcon size={22} />
                </a>
                <a href="https://linkedin.com/in/bulbul-ahmed4500b0389" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <LinkedinIcon size={22} />
                </a>
                <a href="https://bulbulahamedportfolio.netlify.app" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-300 title='Portfolio'">
                  <PortfolioIcon size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative glass-card p-1 rounded-2xl overflow-hidden group">
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <form 
                className="relative bg-slate-900/90 p-8 md:p-10 rounded-2xl h-full border border-white/10" 
                onSubmit={onSubmit}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-2">
                    <Mail className="text-primary-400" /> Send a mail
                  </h3>
                  <p className="text-slate-400 text-sm">Directly to: <span className="text-primary-400 font-medium">mbbulbuli2@gmail.com</span></p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-500" />
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full bg-slate-800/80 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={18} className="text-slate-500" />
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full bg-slate-800/80 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="mb-8 relative">
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none placeholder:text-slate-600"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send a mail'}</span>
                  {!isSubmitting && <Send size={20} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </button>

                {result && (
                  <div className={`mt-4 text-center text-sm font-medium ${result.includes('success') ? 'text-green-400' : 'text-primary-300'}`}>
                    {result}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
