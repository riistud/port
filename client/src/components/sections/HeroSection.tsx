import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProfileImage from "@/components/ui/profile-image";
import { scrollToSection } from "@/lib/utils";

const HeroSection = () => {
  const techStack = [
    "JavaScript", "PHP", "Python", "NodeJS", "React"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="font-medium text-sm">Tersedia untuk Proyek Baru</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="block mb-2">Kaizen</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-dark-300 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Mengubah ide menjadi aplikasi yang elegan dan fungsional dengan teknologi modern.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-2 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-dark-800 border border-dark-600 rounded-full text-sm text-dark-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              className="bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500 text-white px-8 py-6 h-auto rounded-full shadow-lg shadow-primary-500/20 border-0"
              onClick={() => scrollToSection("projects")}
            >
              <span className="mr-2">Lihat Portofolio</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-dark-800/50 hover:bg-dark-700 text-white border-dark-600 px-8 py-6 h-auto rounded-full backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fab fa-whatsapp mr-2 text-green-500"></i>
              <span>Hubungi Saya</span>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100 
          }}
        >
          <div className="relative">
            {/* Decorative circle behind profile image */}
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-400/20 blur-2xl -z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <ProfileImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
