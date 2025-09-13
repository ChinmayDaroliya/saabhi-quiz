
import { motion } from 'framer-motion';

// Enhanced Ayurvedic Bottle Component with better styling
export const AyurvedicBottle: React.FC<{ className?: string; animate?: boolean }> = ({ 
  className = "", 
  animate = false 
}) => (
  <motion.div 
    className={`relative ${className}`}
    animate={animate ? { 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0] 
    } : {}}
    transition={{ 
      duration: 3,
      repeat: animate ? Infinity : 0,
      ease: "easeInOut" 
    }}
  >
    <div className="w-12 h-20 md:w-16 md:h-24 bg-gradient-to-b from-amber-900 to-amber-800 rounded-lg shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Bottle cap */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-2 md:w-6 md:h-3 bg-amber-800 rounded-t-full border-2 border-amber-700"></div>
      {/* Label area */}
      <div className="absolute top-2 md:top-3 left-1 md:left-2 right-1 md:right-2 h-3 md:h-4 bg-gradient-to-r from-amber-700 to-amber-600 rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-300 rounded-full"></div>
      </div>
      {/* Brand name */}
      <div className="absolute bottom-2 md:bottom-3 left-1 md:left-2 right-1 md:right-2 text-xs text-amber-100 text-center font-bold tracking-wider">
        SAABHI
      </div>
      {/* Bottle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent transform -skew-y-12 animate-pulse"></div>
      {/* Content indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-2 md:left-3 right-2 md:right-3 h-8 md:h-12 bg-gradient-to-t from-green-800/30 to-green-600/30 rounded-sm"></div>
    </div>
  </motion.div>
);