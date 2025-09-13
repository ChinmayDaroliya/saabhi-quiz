import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AyurvedicBottle } from '../AyurvedicBottle';

// Extracted Result Section Component
export const ResultSection: React.FC<{
  result: any;
  resetQuiz: () => void;
}> = ({ result, resetQuiz }) => {
  return (
    <motion.main 
      key="result"
      className="max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-center mb-6 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 bg-green-100 rounded-full mb-4 lg:mb-8 shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3
          }}
        >
          <CheckCircle className="w-8 h-8 lg:w-12 lg:h-12 text-green-600" />
        </motion.div>
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-800 mb-2 lg:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Your Perfect Match!
        </motion.h2>
        <motion.p 
          className="text-green-600 text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Based on your responses, here's your personalized recommendation
        </motion.p>
      </motion.div>

      <motion.div 
        className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-green-100 overflow-hidden"
        layoutId="main-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* Result header with gradient */}
        <motion.div 
          className={`bg-gradient-to-r ${result?.color} p-6 md:p-8 lg:p-12 text-white text-center relative overflow-hidden`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="relative z-10">
            <motion.div 
              className="flex justify-center mb-4 lg:mb-6"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12">
                {result?.icon}
              </div>
            </motion.div>
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {result?.title}
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              {result?.subtitle}
            </motion.p>
            <motion.div 
              className="text-3xl md:text-4xl lg:text-5xl mt-4 lg:mt-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
            >
              {result?.image}
            </motion.div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 lg:w-24 lg:h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 lg:w-20 lg:h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full"></div>
          </div>
        </motion.div>

        <div className="p-6 md:p-8 lg:p-16">
          <motion.p 
            className="text-green-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {result?.description}
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 mb-4 lg:mb-6 flex items-center">
                <Star className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-amber-500" />
                Key Benefits
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {result?.benefits.map((benefit: string, index: number) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-green-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + (index * 0.1) }}
                  >
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base lg:text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl lg:rounded-2xl p-6 lg:p-10 shadow-inner">
                <AyurvedicBottle className="mx-auto mb-4 lg:mb-8" animate />
                <h5 className="text-green-800 font-bold text-lg lg:text-xl mb-2 lg:mb-3">
                  Premium Ayurvedic Formula
                </h5>
                <p className="text-green-600 mb-3 lg:mb-4 text-sm lg:text-base">
                  Crafted with traditional wisdom and modern precision
                </p>
                <div className="flex justify-center space-x-1 mb-3 lg:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 lg:w-4 lg:h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs lg:text-sm text-green-500 font-medium">
                  ⭐ Trusted by thousands of customers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <motion.button
              onClick={() => window.open('https://saabhiwellness.in', '_blank')}
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group text-sm md:text-base lg:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={resetQuiz}
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 border-2 border-green-600 text-green-600 font-semibold rounded-xl lg:rounded-2xl hover:bg-green-50 transition-all duration-300 flex items-center space-x-2 text-sm md:text-base lg:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Retake Quiz</span>
            </motion.button>
          </motion.div>

          {/* Social sharing hint */}
          <motion.div 
            className="text-center mt-6 lg:mt-10 pt-6 lg:pt-8 border-t border-green-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <p className="text-green-600 text-sm lg:text-base mb-2">
              💡 Found this helpful? Share with friends who care about wellness!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};
