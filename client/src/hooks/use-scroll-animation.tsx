import { useEffect, useState, useRef } from "react";
import { isInViewport } from "@/lib/utils";

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    
    const checkVisibility = () => {
      if (isInViewport(element)) {
        setIsVisible(true);
      }
    };
    
    // Check on initial render
    checkVisibility();
    
    // Listen for scroll events
    window.addEventListener("scroll", checkVisibility);
    
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);
  
  return { elementRef, isVisible };
}
