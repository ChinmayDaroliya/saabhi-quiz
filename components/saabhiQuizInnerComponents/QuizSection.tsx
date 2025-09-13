import { ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { AyurvedicBottle } from '../AyurvedicBottle';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizOptionButton } from './QuizOptionButton';

// Extracted Quiz Section Component
export const QuizSection: React.FC<{
  currentQuestion: number;
  answers: Record<number, string>;
  isTransitioning: boolean;
  handleAnswer: (questionId: number, optionId: string, optionScore: QuizOption['score']) => void;
  goToPreviousQuestion: () => void;
}> = ({ currentQuestion, answers, isTransitioning, handleAnswer, goToPreviousQuestion }) => {
  return (
    <motion.main 
      key="quiz"
      className="relative w-full flex items-center translate-y-2 justify-center px-4 lg:px-6 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-green-100 flex justify-center w-full max-w-5xl max-h-[65vh] overflow-y-auto"
        layoutId="main-card"
      >
        <div className="p-6 md:p-8 lg:p-16">
          {/* Decorative bottles */}
          <motion.div 
            className="flex justify-center space-x-3 md:space-x-4 lg:space-x-6 mb-6 lg:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AyurvedicBottle animate={currentQuestion === 0} />
            <AyurvedicBottle className="opacity-70" animate={currentQuestion === Math.floor(quizQuestions.length / 2)} />
            <AyurvedicBottle className="opacity-50" animate={currentQuestion === quizQuestions.length - 1} />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              className="text-center mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-800 mb-4 lg:mb-6 leading-tight">
                {quizQuestions[currentQuestion]?.question}
              </h2>
              <p className="text-green-600 text-base md:text-lg lg:text-xl">
                Choose the option that best describes you
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div 
              key={`options-${currentQuestion}`}
              className="grid gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {quizQuestions[currentQuestion]?.options.map((option, index) => (
                <QuizOptionButton
                  key={option.id}
                  option={option}
                  questionId={quizQuestions[currentQuestion].id}
                  isSelected={answers[quizQuestions[currentQuestion].id] === option.id}
                  isTransitioning={isTransitioning}
                  index={index}
                  handleAnswer={handleAnswer}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.div 
            className="flex justify-between items-center mt-6 lg:mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestion === 0 || isTransitioning}
              className={`flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl transition-all duration-300 ${
                currentQuestion === 0 
                  ? 'opacity-0 pointer-events-none' 
                  : 'text-green-600 hover:text-green-800 hover:bg-green-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-sm lg:text-base">Previous</span>
            </button>

            <div className="text-sm lg:text-base text-green-500 font-medium">
              {currentQuestion + 1} / {quizQuestions.length}
            </div>

            <div className="w-16 lg:w-20"></div> {/* Spacer for balance */}
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};