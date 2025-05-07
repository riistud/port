import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CreditsSection from "@/components/sections/CreditsSection";
import ContactSection from "@/components/sections/ContactSection";
import BackToTop from "@/components/ui/back-to-top";
import MusicPlayer from "@/components/ui/music-player";
import { isInViewport } from "@/lib/utils";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Intro animation effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Add section animation on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const animateSectionsOnScroll = () => {
      sections.forEach(section => {
        if (isInViewport(section as HTMLElement)) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateSectionsOnScroll);
    // Initial check in case sections are already in viewport
    animateSectionsOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateSectionsOnScroll);
    };
  }, []);

  // Background music URL - using custom audio file
  const backgroundMusic = "/audio/background-music.mp3";

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800 -z-10"></div>
        <div className="fixed top-0 left-0 w-full h-full opacity-30 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CreditsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
        <MusicPlayer audioUrl={backgroundMusic} />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
