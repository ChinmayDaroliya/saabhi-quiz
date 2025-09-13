'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { quizQuestions } from '@/data/quizQuestions';
import { resultMapping } from '@/data/resultMapping';
import { LoadingScreen } from './LoadingScreen';
import { ProgressBar } from './ProgressBar';
import { Footer } from './saabhiQuizInnerComponents/Footer';
import { ResultSection } from './saabhiQuizInnerComponents/ResultSection';
import { QuizSection } from './saabhiQuizInnerComponents/QuizSection';

// Type for component props (empty in this case)
interface SaabhiQuizProps {}

// Main Quiz Component with optimized structure
const SaabhiQuiz: React.FC<SaabhiQuizProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState({ 
    performance: 0, 
    wellness: 0, 
    stress: 0, 
    digestive: 0 
  });
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize the current result calculation
  const result = useMemo(() => {
    if (!showResult) return null;
    const maxScore = Math.max(...Object.values(scores));
    const resultType = Object.keys(scores).find(key => 
      scores[key as keyof typeof scores] === maxScore
    ) as keyof typeof resultMapping;
    return resultMapping[resultType];
  }, [scores, showResult]);

  // Enhanced loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle answer selection with smooth transitions
  const handleAnswer = useCallback((questionId: number, optionId: string, optionScore: QuizOption['score']) => {
    setIsTransitioning(true);
    
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);

    // Update scores
    const newScores = { ...scores };
    Object.keys(optionScore).forEach(category => {
      newScores[category as keyof typeof newScores] += optionScore[category as keyof typeof optionScore];
    });
    setScores(newScores);

    // Transition to next question or result
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
      setIsTransitioning(false);
    }, 800);
  }, [answers, scores, currentQuestion]);

  // Reset quiz function
  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ performance: 0, wellness: 0, stress: 0, digestive: 0 });
    setShowResult(false);
    setIsTransitioning(false);
  }, []);

  // Go to previous question
  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentQuestion]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg lg:translate-x-1">
                <Leaf className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 lg:translate-x-2">
                  Saabhi Wellness
                </h1>
                <p className="text-xs md:text-sm lg:text-base text-green-600 font-medium lg:translate-x-2">
                  सभी Ke Liye
                </p>
              </div>
            </motion.div>
            
            {!showResult && (
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm lg:text-base text-green-600 font-medium">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </p>
                <div className="mt-1 lg:mt-2">
                  <ProgressBar current={currentQuestion} total={quizQuestions.length} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <QuizSection 
            currentQuestion={currentQuestion}
            answers={answers}
            isTransitioning={isTransitioning}
            handleAnswer={handleAnswer}
            goToPreviousQuestion={goToPreviousQuestion}
          />
        ) : (
          <ResultSection 
            result={result}
            resetQuiz={resetQuiz}
          />
        )}
      </AnimatePresence>

      <Footer showResult={showResult} />
    </div>
  );
};

export default SaabhiQuiz;