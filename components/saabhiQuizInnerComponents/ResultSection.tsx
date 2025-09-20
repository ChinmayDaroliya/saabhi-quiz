import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResultData } from '@/interfaces/Interface';


// Extracted Result Section Component
export const ResultSection: React.FC<{
  result: ResultData | null;
  resetQuiz: () => void;
}> = ({ result, resetQuiz }) => {
  return (
    <motion.main 
      key="result"
      className="w-full h-screen min-h-[150vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-50 px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-12 pb-20 sm:pb-6 lg:pb-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-4 sm:mb-6 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-green-800 mb-1 sm:mb-2 lg:mb-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your Perfect Match!
          </motion.h2>
         
        </motion.div>

        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl border border-green-100 overflow-hidden"
          layoutId="main-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Result header with gradient */}
          <motion.div 
            className={`bg-gradient-to-r ${result?.color} p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="flex justify-center mb-3 sm:mb-4 lg:mb-6"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12">
                  {result?.icon}
                </div>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {result?.title}
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-lg md:text-xl lg:text-2xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                {result?.subtitle}
              </motion.p>
              <motion.div 
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 lg:mt-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              >
                {result?.image}
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-4 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-white rounded-full"></div>
            </div>
          </motion.div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-16">
            <motion.p 
              className="text-green-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 lg:mb-12 text-center max-w-4xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {result?.description}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
              

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-10 shadow-inner ">
                  {/* <AyurvedicBottle className="mx-auto mb-3 sm:mb-4 lg:mb-8" animate /> */}
                  <h5 className="text-green-800 font-bold text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2 lg:mb-3">
                    Premium Ayurvedic Formula
                  </h5>
                 
                </div>
              </motion.div>
            </div>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                onClick={() => window.open('https://saabhiwellness.in', '_blank')}
                className="w-[200px] sm:w-auto px-6 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-sm md:text-base lg:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              
            </motion.div>

            
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

