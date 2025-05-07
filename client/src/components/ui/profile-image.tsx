import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface ProfileImageProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  imagePath?: string;
}

/**
 * ProfileImage Component
 * 
 * Untuk menggunakan gambar kustom, letakkan file .jpg di folder public/images/
 * dan ganti imagePath nya sesuai dengan nama file (contoh: "profile.jpg")
 */
const ProfileImage = ({ 
  className, 
  size = "lg", 
  imagePath = "profile.jpg" // Default image path
}: ProfileImageProps) => {
  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-64 h-64",
    lg: "w-64 h-64 md:w-80 md:h-80"
  };

  const [imageError, setImageError] = useState(false);
  const fullImagePath = `/images/${imagePath}`;

  // Handle image loading error
  const handleImageError = () => {
    console.log("Error loading profile image");
    setImageError(true);
  };

  return (
    <div className={cn("relative profile-animate", className)}>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 blur-xl opacity-50"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <div className={cn(
        "relative rounded-full border-4 border-primary-500 overflow-hidden shadow-xl",
        sizeClasses[size]
      )}>
        {imageError ? (
          // Fallback to SVG if image fails to load
          <div className="w-full h-full bg-dark-800 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary-500"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        ) : (
          // Display the image 
          <img 
            src={fullImagePath} 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="absolute -right-4 -bottom-4 bg-dark-800 rounded-full p-3 border-2 border-primary-500">
        <div className="bg-primary-500 h-5 w-5 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProfileImage;
