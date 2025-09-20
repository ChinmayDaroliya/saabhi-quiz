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
      // px-4 lg:px-6 pb-32 items-center
      className="relative w-full h-[100vh] flex  justify-center  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-[url('/saabhi-bg.jpg')] bg-cover  translate-y-10  backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-green-100 flex justify-center w-full max-w-4xl h-[60vh] overflow-y-auto "
        layoutId="main-card"
      >
        <div className="p-6 md:p-8 lg:p-16 w-full flex flex-col">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              // className="text-center mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              // flex flex-col
              className=' text-center mb-8 lg:mb-12  mx-auto '
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-100 mb-4 lg:mb-6 leading-tight">
                {quizQuestions[currentQuestion]?.question}
              </h2>
              
            </motion.div>
          </AnimatePresence>

          {/* <AnimatePresence mode="wait"> */}
          <div className="flex justify-center items-center">
            <motion.div 
              key={`options-${currentQuestion}`}
              className="flex flex-col gap-4 w-full max-w-md mx-auto  "
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ duration: 0.3 }}
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
            </div>
          {/* </AnimatePresence> */}

          {/* Navigation buttons */}
          <motion.div 
            className="flex justify-between items-center mt-6 lg:mt-12 mx-auto "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestion === 0 || isTransitioning}
              // space-x-2 px-4 lg:px-7 py-2 lg:py-4 items-center
              className={`flex translate-y-10 translate-x-2 rounded-lg transition-all duration-300  ${
                currentQuestion === 0 
                  ? 'opacity-0 cursor-pointer' 
                  : 'text-gray-100 text-center hover:text-white hover:bg-[#4c7f75] cursor-pointer '
              }`}
            >
              
              <ChevronLeft className="w-4 h-6 lg:w-6 lg:h-7" />
              <span className="text-sm lg:text-base  ">Previous</span>
              
            </button>

            
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};