import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResultData } from '@/interfaces/Interface';

export const ResultSection: React.FC<{
  result: ResultData | null;
  resetQuiz: () => void;
}> = ({ result, resetQuiz }) => {
  return (
    <motion.main
      key="result"
      className="relative flex-col w-full h-[80vh] flex justify-center items-center px-4 lg:px-6 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <motion.h3
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#367268] text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {result?.title}
          </motion.h3>

      <motion.div
        className=" bg-gradient-to-br from-green-50/70 via-green-100/50 to-green-50/70 
             backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl flex justify-center w-full max-w-4xl h-[40vh] "
        layoutId="main-card"
      >
        <div className="flex flex-col w-full p-6 md:p-8 lg:p-16 items-center">

          {/* Result Title */}
          

          {/* Result Description */}
          <motion.p
            className="text-[#367268]  translate-y-4 text-base md:text-lg lg:text-2xl leading-relaxed text-center max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {result?.description}
          </motion.p>

          {/* Action Button */}
          <motion.button
            onClick={() => window.open('https://saabhiwellness.in/products/tox-out-juice', '_blank')}
            className="flex items-center justify-center gap-2 px-6 md:px-8 lg:px-10 py-3 md:py-4 
            lg:py-5 bg-[#367268] text-gray-100 rounded-2xl shadow-lg hover:bg-[#4c7f75] 
            hover:text-white transition-all duration-300 text-sm md:text-base lg:text-lg  
            translate-y-4 h-[40px] w-[200px] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Tox Out Juice</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>

        </div>
      </motion.div>
    </motion.main>
  );
};
