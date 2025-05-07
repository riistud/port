import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import SkillBadge from "@/components/ui/skill-badge";

interface AdditionalSkillProps {
  icon: string;
  name: string;
}

const AdditionalSkill = ({ icon, name }: AdditionalSkillProps) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-dark-700/30 rounded-lg">
    <i className={`${icon} text-2xl`}></i>
    <span className="text-sm">{name}</span>
  </div>
);

const SkillsSection = () => {
  const mainSkills = [
    {
      icon: "fab fa-js",
      name: "JavaScript", 
      description: "Building interactive web applications and dynamic user interfaces with modern JavaScript",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500"
    },
    {
      icon: "fab fa-php",
      name: "PHP", 
      description: "Creating server-side applications and content management systems",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500"
    },
    {
      icon: "fab fa-python",
      name: "Python", 
      description: "Developing automation scripts, bots, and data processing applications",
      color: "text-blue-400",
      bgColor: "bg-blue-500"
    },
    {
      icon: "fab fa-node-js",
      name: "NodeJS", 
      description: "Building scalable backend services and RESTful APIs",
      color: "text-green-500",
      bgColor: "bg-green-500"
    }
  ];
  
  const additionalSkills = [
    { icon: "fab fa-html5 text-orange-500", name: "HTML5" },
    { icon: "fab fa-css3-alt text-blue-500", name: "CSS3" },
    { icon: "fab fa-react text-cyan-400", name: "React" },
    { icon: "fab fa-git-alt text-orange-600", name: "Git" },
    { icon: "fas fa-database text-blue-400", name: "MongoDB" },
    { icon: "fab fa-npm text-red-500", name: "NPM" },
    { icon: "fas fa-code-branch text-purple-500", name: "REST API" },
    { icon: "fab fa-linux text-yellow-200", name: "Linux" },
    { icon: "fas fa-terminal text-green-400", name: "Bash" },
    { icon: "fas fa-server text-teal-400", name: "AWS" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Skills"
          description="Technologies and programming languages I work with"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mainSkills.map((skill, index) => (
            <SkillBadge
              key={index}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-dark-800/50 rounded-2xl border border-dark-600 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6">Additional Skills & Tools</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <AdditionalSkill
                key={index}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
