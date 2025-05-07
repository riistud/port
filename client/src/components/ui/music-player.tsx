import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  audioUrl: string;
  className?: string;
}

const MusicPlayer = ({ audioUrl, className }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const adjustVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-10 bg-dark-800/90 backdrop-blur-md border border-dark-600 rounded-full p-3",
      "shadow-lg flex items-center gap-3",
      className
    )}>
      <audio ref={audioRef} src={audioUrl} loop />
      
      <motion.button
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          "bg-gradient-to-r from-primary-500 to-primary-400 text-white",
          "hover:scale-105 transition-transform"
        )}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-lg ${isPlaying ? '' : 'ml-1'}`}></i>
      </motion.button>
      
      <div className="hidden sm:flex items-center gap-2 pr-2">
        <i className="fas fa-volume-down text-primary-400 text-xs"></i>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={adjustVolume}
          className="w-16 h-1 bg-dark-600 rounded-full appearance-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${volume * 100}%, #475569 ${volume * 100}%, #475569 100%)`
          }}
        />
        <i className="fas fa-volume-up text-primary-400 text-xs"></i>
      </div>
      
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1">
          {[1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              className="w-1 bg-primary-400 rounded-full"
              animate={{
                height: [4, 12, 4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: bar * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;