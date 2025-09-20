import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => (
  //
  <div className="min-h-screen  bg-gradient-to-br from-green-50 to-emerald-50  flex items-center justify-center px-4">
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative mb-8 w-20 h-20 mx-auto">
        {/* Rotating green loader ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-4 border-t-[#367268] border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Stable logo perfectly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="saabhi_circular_logo.svg" 
              alt="saabhi logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-[#367268] mb-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SAABHI WELLNESS
      </motion.h2>
    </motion.div>
  </div>
);
