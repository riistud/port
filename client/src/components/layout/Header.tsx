import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";

// Indonesian navigation items
const navItems = [
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "credits", label: "Kredit" },
  { id: "contact", label: "Kontak" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  // Handle scroll events for sticky header styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setIsScrolled(window.scrollY > 10);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "hero";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle navigation click
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };
  
  return (
    <motion.header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-dark-900/80 backdrop-blur-md border-b border-dark-700/50 py-3" 
          : "bg-transparent py-5"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-xl font-bold text-white flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Kaizen</span>
          <span>Developer</span>
        </motion.a>
        
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <motion.a 
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative px-4 py-2 rounded-full text-dark-200 transition-colors",
                activeSection === item.id ? "text-white" : "hover:text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.id && (
                <motion.span
                  className="absolute inset-0 bg-dark-700/50 rounded-full -z-10"
                  layoutId="active-nav-item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {item.label}
            </motion.a>
          ))}
        </nav>
        
        <motion.button 
          className="md:hidden text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </motion.button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-dark-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "text-dark-200 hover:text-white transition-colors py-3 px-4 rounded-lg",
                    activeSection === item.id ? "bg-dark-700/50 text-white" : ""
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <i className="fas fa-circle text-xs text-primary-400"></i>
                    )}
                  </div>
                </motion.a>
              ))}
              
              <motion.div 
                className="pt-4 mt-2 border-t border-dark-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg py-3 px-4 flex justify-center items-center gap-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  <i className="fas fa-headset"></i>
                  <span>Hubungi Saya</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
