import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button 
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 w-12 h-12 bg-primary-500 text-white rounded-full",
        "flex items-center justify-center shadow-lg transform transition-transform duration-300",
        "hover:bg-primary-600",
        isVisible ? "scale-100" : "scale-0"
      )}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
