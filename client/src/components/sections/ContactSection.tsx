import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { formatWhatsAppUrl } from "@/lib/utils";

const ContactSection = () => {
  // Updated WhatsApp number
  const whatsappNumber = "6282295954278";
  const whatsappUrl = formatWhatsAppUrl(whatsappNumber, "Halo, saya ingin mendiskusikan project dengan Anda.");
  
  const socialLinks = [
    {
      icon: "fab fa-whatsapp text-3xl text-green-500",
      bgColor: "bg-green-500/20",
      hoverBgColor: "hover:bg-green-500",
      title: "WhatsApp",
      description: "Chat langsung dengan saya",
      url: whatsappUrl
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Hubungi Saya"
          description="Punya project atau ingin bekerja sama? Mari diskusikan!"
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-dark-700/70 border border-dark-600 rounded-2xl p-10 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <motion.div
                className="inline-block mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-headset text-4xl text-primary-400"></i>
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold">Mari Terhubung</h3>
              <p className="text-dark-300 max-w-lg mx-auto mt-3">
                Saya selalu terbuka untuk diskusi proyek baru, peluang kolaborasi kreatif, atau hanya sekedar berbicara tentang dunia teknologi.
              </p>
            </div>
            
            <div className="my-10 flex justify-center">
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 rounded-xl bg-dark-800/50 border border-dark-600 transition-all max-w-sm"
                whileHover={{ 
                  y: -10,
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 transition-colors hover:bg-green-500">
                  <i className="fab fa-whatsapp text-4xl text-green-500"></i>
                </div>
                <h4 className="text-2xl font-semibold mb-2">WhatsApp</h4>
                <p className="text-dark-300 mb-6">Chat langsung dengan saya untuk diskusi project atau konsultasi</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-primary-400 font-medium group">
                    <span>Hubungi Sekarang</span>
                    <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                  </span>
                </div>
              </motion.a>
            </div>
            
            <motion.div 
              className="text-center mt-8 pt-8 border-t border-dark-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-xl font-medium mb-6">Cara Tercepat Menghubungi Saya</p>
              
              <Button 
                className="px-8 py-6 h-auto text-lg bg-green-500 hover:bg-green-600 gap-3 rounded-full"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>Chat di WhatsApp</span>
              </Button>
              
              <p className="text-dark-300 mt-6">Respon cepat, biasanya dalam 24 jam</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
