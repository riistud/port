import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface ContributorCardProps {
  name: string;
  role: string;
  icon: string;
  color: string;
}

const ContributorCard = ({ name, role, icon, color }: ContributorCardProps) => (
  <motion.div 
    className="bg-dark-800 border border-dark-600 rounded-xl p-6 flex flex-col items-center text-center card-hover"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-16 h-16 rounded-full ${color}/20 flex items-center justify-center mb-4`}>
      <i className={`fas ${icon} ${color} text-xl`}></i>
    </div>
    <h3 className="font-semibold mb-2">{name}</h3>
    <p className="text-dark-300 text-sm">{role}</p>
  </motion.div>
);

const CreditsSection = () => {
  const contributors = [
    { 
      name: "KaiziDEV", 
      role: "Lead developer and mentor", 
      icon: "fa-code", 
      color: "text-primary-400" 
    },
    { 
      name: "RiiCODE", 
      role: "Backend expertise and guidance", 
      icon: "fa-terminal", 
      color: "text-green-400" 
    },
    { 
      name: "HamzDEV", 
      role: "Frontend design collaboration", 
      icon: "fa-laptop-code", 
      color: "text-purple-400" 
    },
    { 
      name: "KyamiSilence", 
      role: "Testing and quality assurance", 
      icon: "fa-bug", 
      color: "text-yellow-400" 
    },
    { 
      name: "Asy", 
      role: "Creative ideas and inspiration", 
      icon: "fa-lightbulb", 
      color: "text-red-400" 
    },
    { 
      name: "Chaca", 
      role: "Support and encouragement", 
      icon: "fa-heart", 
      color: "text-pink-400" 
    }
  ];

  return (
    <section id="credits" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Credits"
          description="Special thanks to everyone who supported my development journey"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={index}
              name={contributor.name}
              role={contributor.role}
              icon={contributor.icon}
              color={contributor.color}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-dark-700/50 border border-dark-600 rounded-xl p-8">
            <i className="fas fa-quote-left text-4xl text-primary-500/40 mb-4"></i>
            <p className="text-lg text-dark-200 italic mb-6">
              Success is not built in isolation. I'm grateful for the collaborative spirit and support from these amazing developers who have contributed to my growth and projects.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-1 bg-primary-500/50 rounded-full"></div>
              <p className="text-primary-400 font-medium">Kaizen Developer</p>
              <div className="w-10 h-1 bg-primary-500/50 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreditsSection;
