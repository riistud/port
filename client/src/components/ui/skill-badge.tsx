import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  icon: string;
  name: string;
  description: string;
  color: string;
  className?: string;
}

const SkillBadge = ({ 
  icon, 
  name, 
  description, 
  color, 
  className 
}: SkillBadgeProps) => {
  return (
    <motion.div 
      className={cn(
        "skill-badge card-hover bg-dark-800/70 border border-dark-600 rounded-xl p-6",
        "flex flex-col items-center text-center transition-transform duration-300",
        className
      )}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-16 h-16 ${color}/10 rounded-full flex items-center justify-center mb-4`}>
        <i className={`${icon} text-3xl ${color}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-dark-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default SkillBadge;
