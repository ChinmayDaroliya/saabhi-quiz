import { motion } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { ArrowRight, Check } from 'lucide-react';

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
      disabled={isTransitioning}
      className={`
        group
        w-full relative overflow-hidden
        bg-white/90 backdrop-blur-sm
        border-2 rounded-2xl
        transition-all duration-300
        active:scale-95
        focus:outline-none focus:ring-4
        h-[50px]
        translate-y-4
        
        ${isSelected 
          ? 'border-[#367268] bg-[#367268] ring-2 ring-green-200/50 shadow-lg' 
          : 'border-gray-200/80 hover:border-[#367268] hover:bg-white shadow-md hover:shadow-lg'
        }
        ${isTransitioning ? 'opacity-70 cursor-pointer' : 'cursor-pointer'}
      `}
      whileHover={{ scale: isTransitioning ? 1 : 1.02 }}
      whileTap={{ scale: isTransitioning ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.4
        }
      }}
      exit={{ opacity: 0, y: -10 }}
      layout
    >
      
      {/* Background gradient for selected state */}
      {isSelected && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-50/40 to-emerald-50/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      <div className="flex items-center justify-between relative z-10 gap-x-4 px-2" >
        <div className="text-left">
          <p className={`
            text-lg md:text-xl lg:text-xl
            font-medium leading-tight
            translate-x-5
            ${isSelected ? 'text-[#367268]' : 'text-gray-600 group-hover:text-[#367268]'}
          `}>
            {option.text}
          </p>
        </div>
        
        <motion.div
          animate={{ 
            x: isSelected ? 2 : 0,
            opacity: isSelected ? 1 : 0.7
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className={`
            w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6
            flex-shrink-0
            -translate-x-5
            ${isSelected ? 'text-[#367268]' : 'text-gray-600 group-hover:text-[#367268]'}
          `} />
        </motion.div>
      </div>
      
      {/* Subtle hover effect */}
      <motion.div 
        className="absolute inset-0 bg-[#367268]"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};