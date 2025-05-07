import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
      <i className="fas fa-check text-xs text-primary-400"></i>
    </div>
    <p className="text-sm text-dark-200">{text}</p>
  </div>
);

const ProjectsSection = () => {
  const projectFeatures = [
    "Custom commands and responses for group management",
    "Media handling capabilities (images, videos, documents)",
    "Automated responses and AI-powered interactions"
  ];
  
  const techBadges = [
    "Node.js", "WhatsApp Web API", "JavaScript", "Automation", "Webhooks"
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Featured Projects"
          description="Showcasing my recent work and development projects"
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-dark-700 rounded-2xl border border-dark-600 overflow-hidden card-hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-2 p-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary-500/20 rounded-full blur-xl"></div>
                  <div className="relative rounded-xl shadow-2xl border-2 border-dark-600 w-full h-auto overflow-hidden">
                    <svg 
                      className="w-full h-64 text-gray-700" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M12 15v4" />
                      <path d="M8 19h8" />
                      <path d="M2 10h20" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium">Featured Project</span>
                  <span className="px-3 py-1 bg-dark-600 rounded-full text-xs font-medium">Automation</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">XavierBUG WhatsApp Bot</h3>
                
                <p className="text-dark-300 mb-6">
                  An advanced WhatsApp automation bot built with Node.js that simplifies group management and provides useful commands for everyday tasks. XavierBUG enhances messaging experience with intelligent responses and custom functionality.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {techBadges.map((tech, index) => (
                    <span key={index} className="bg-dark-800 px-2 py-1 rounded text-xs text-dark-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {projectFeatures.map((feature, index) => (
                    <FeatureItem key={index} text={feature} />
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-dark-600 flex items-center gap-4">
                  <a 
                    href="https://www.mediafire.com/file/yw06ker3mszq82w/XavierDevkayzen.zip/file" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-download"></i>
                    <span>Download Script</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-dark-300">Proyek lainnya sedang dalam pengembangan</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
