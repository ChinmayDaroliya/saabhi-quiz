import { motion} from 'framer-motion';
import {Leaf } from 'lucide-react';

// Enhanced Loading Screen Component with better animations
export const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative mb-8">
        <motion.div 
          className="w-20 h-20 mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Leaf className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 w-20 h-20 mx-auto border-4 border-green-200 rounded-full border-t-green-600"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </div>
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-green-800 mb-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Saabhi Wellness
      </motion.h2>
      <motion.p 
        className="text-green-600 text-lg"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      >
        Finding your perfect wellness solution...
      </motion.p>
    </motion.div>
  </div>
);
