import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

// Extracted Footer Component
export const Footer: React.FC<{
  showResult: boolean;
}> = ({ showResult }) => {
  return (
    <motion.footer 
      className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-green-800 to-emerald-800 text-white py-6 lg:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: showResult ? 2.2 : 1.0 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col items-center justify-center text-center">
        {/* Logo + Title */}
        <motion.div 
          className="flex items-center justify-center mb-4 lg:mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: showResult ? 2.3 : 1.1, type: "spring" }}
        >
          <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mr-3 lg:-translate-x-3 -translate-x-3">
            <Leaf className="w-5 h-5 lg:w-8 lg:h-8 " />
          </div>
          <div>
            <span className="text-lg md:text-2xl lg:text-3xl font-bold">Saabhi Wellness</span>
            <p className="text-green-200 text-xs md:text-sm lg:text-base">सभी Ke Liye</p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-green-100 text-sm md:text-lg lg:text-xl mb-2 lg:mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: showResult ? 2.4 : 1.2 }}
        >
          Authentic Ayurvedic care for your body, mind, and soul
        </motion.p>

        {/* Sub-text */}
        <motion.p 
          className="text-green-300 mb-3 lg:mb-5 text-xs md:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: showResult ? 2.5 : 1.3 }}
        >
          Rooted in the legacy of Rasraj Ayurveda • Modern solutions with ancient wisdom
        </motion.p>

        {/* Features */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 lg:gap-8 text-xs md:text-sm lg:text-base text-green-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: showResult ? 2.6 : 1.4 }}
        >
          <span className="flex items-center justify-center">🌿 100% Natural</span>
          <span className="flex items-center justify-center">✨ Traditional Methods</span>
          <span className="flex items-center justify-center">❤️ Made with Care</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};