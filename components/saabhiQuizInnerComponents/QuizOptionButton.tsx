import { motion } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { ArrowRight } from 'lucide-react';

// Extracted Quiz Option Button Component
export const QuizOptionButton: React.FC<{
  option: QuizOption;
  questionId: number;
  isSelected: boolean;
  isTransitioning: boolean;
  index: number;
  handleAnswer: (questionId: number, optionId: string, optionScore: QuizOption['score']) => void;
}> = ({ option, questionId, isSelected, isTransitioning, index, handleAnswer }) => {
  return (
    <motion.button
      onClick={() => handleAnswer(questionId, option.id, option.score)}
      className={`p-4 md:p-6 lg:p-8 text-left rounded-xl lg:rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden
        ${isSelected
          ? 'border-green-500 bg-green-50 shadow-lg scale-[1.02]' 
          : 'border-green-200 bg-white/50 hover:border-green-300 hover:bg-green-50 hover:scale-[1.01] hover:shadow-md'
        }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      disabled={isTransitioning}
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex-1 pr-4">
          <p className="text-green-800 font-medium group-hover:text-green-900 transition-colors leading-relaxed text-sm md:text-base lg:text-lg">
            {option.text}
          </p>
        </div>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 group-hover:text-green-700 transition-colors" />
        </motion.div>
      </div>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
};


