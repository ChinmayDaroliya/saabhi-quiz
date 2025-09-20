import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

// Extracted Footer Component
export const Footer: React.FC<{
  showResult: boolean;
}> = ({ showResult }) => {
  return (
    <motion.footer 
    // bg-gradient-to-r from-green-800 to-emerald-800 
      className="fixed bottom-0 left-0 w-full bg-[#367268] text-white py-6 lg:py-10"
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
          <div className="w-7 h-7 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mr-3 lg:-translate-x-3 -translate-x-3 overflow-hidden">
            <img 
              src="/saabhi_circular_logo.svg" 
              alt="saabhi logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-lg md:text-2xl lg:text-3xl font-bold">SAABHI WELLNESS</span>
            <p className="text-green-200 text-xs md:text-sm lg:text-base">सभी Ke Liye !</p>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};