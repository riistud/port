import { scrollToSection } from "@/lib/utils";

const Footer = () => {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a 
              href="#hero" 
              className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("hero");
              }}
            >
              <span className="text-primary-500">Kaizen</span>Developer
            </a>
            <p className="text-dark-400 mt-2">Building better digital experiences</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="#contact"
                className="px-4 py-2 rounded-full bg-dark-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                <span className="text-dark-300 hover:text-white transition-colors">Hubungi Saya</span>
              </a>
            </div>
            <p className="text-dark-400 text-sm">&copy; {currentYear} Kaizen Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
