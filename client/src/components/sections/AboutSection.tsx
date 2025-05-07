import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface ExpertiseCardProps {
  title: string;
  percentage: number;
}

const ExpertiseCard = ({ title, percentage }: ExpertiseCardProps) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="font-medium">{title}</span>
      <span className="text-primary-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-primary-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div 
    className="card-hover bg-dark-700/50 border border-dark-600 p-5 rounded-xl"
    whileHover={{ y: -5 }}
  >
    <h4 className="font-semibold mb-2 flex items-center gap-2">
      <i className={`fas ${icon} text-primary-400`}></i> {title}
    </h4>
    <p className="text-dark-300 text-sm">{description}</p>
  </motion.div>
);

const AboutSection = () => {
  const expertiseItems = [
    { title: "Web Development", percentage: 90 },
    { title: "Bot & Automation", percentage: 85 },
    { title: "Backend Development", percentage: 80 },
    { title: "Frontend Design", percentage: 75 }
  ];
  
  const serviceItems = [
    { 
      icon: "fa-code", 
      title: "Development", 
      description: "Creating robust applications with modern frameworks and technologies" 
    },
    { 
      icon: "fa-robot", 
      title: "Automation", 
      description: "Building bots and scripts to streamline workflows and processes" 
    },
    { 
      icon: "fa-lightbulb", 
      title: "Problem Solving", 
      description: "Finding efficient solutions for complex technical challenges" 
    },
    { 
      icon: "fa-users", 
      title: "Collaboration", 
      description: "Working effectively in teams to deliver exceptional results" 
    }
  ];
  
  const personalAttributes = [
    "Problem Solver", "Fast Learner", "Detail-oriented", "Team Player", "Self-motivated"
  ];

  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Me"
          description="Get to know more about my journey and work philosophy"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">
              I'm <span className="text-primary-400">Kaizen Developer</span>
            </h3>
            
            <p className="text-dark-300 leading-relaxed">
              Passionate about creating clean, efficient, and user-friendly applications. I specialize in building web applications and automation tools that solve real-world problems. With a focus on continuous improvement (the meaning of "Kaizen"), I strive to refine my skills and explore new technologies.
            </p>
            
            <p className="text-dark-300 leading-relaxed">
              My approach combines technical expertise with an eye for design and user experience. I believe in writing maintainable code and building solutions that make a positive impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {serviceItems.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-dark-700/30 border border-dark-600 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <i className="fas fa-chart-line text-primary-400"></i> My Expertise
            </h3>
            
            <div className="space-y-6">
              {expertiseItems.map((item, index) => (
                <ExpertiseCard
                  key={index}
                  title={item.title}
                  percentage={item.percentage}
                />
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-dark-600">
              <h4 className="font-medium mb-4">Personal Attributes</h4>
              <div className="flex flex-wrap gap-3">
                {personalAttributes.map((attribute, index) => (
                  <span key={index} className="bg-dark-600 px-3 py-1 rounded-full text-sm text-dark-200">
                    {attribute}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
