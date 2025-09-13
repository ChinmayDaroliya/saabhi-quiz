'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, Leaf, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { quizQuestions } from '@/data/quizQuestions';
import { resultMapping } from '@/data/resultMapping';
import { LoadingScreen } from './LoadingScreen';
import { AyurvedicBottle } from './AyurvedicBottle';
import { ProgressBar } from './ProgressBar';


// Main Quiz Component with enhanced features
const SaabhiQuiz: React.FC = () => {
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

  // Enhanced loading simulation with realistic timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
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
        setIsTransitioning(false);
      } else {
        setShowResult(true);
        setIsTransitioning(false);
      }
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 ">
      {/* Enhanced Header with better responsive design */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm ">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 lg:py-6 ">
          <div className="flex items-center justify-between ">
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
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 lg:translate-x-2">Saabhi Wellness</h1>
                <p className="text-xs md:text-sm lg:text-base text-green-600 font-medium lg:translate-x-2">सभी Ke Liye</p>
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
          /* Enhanced Quiz Questions Section */
          <motion.main 
            key="quiz"
            className="relative  w-full flex items-center translate-y-2 justify-center px-4 lg:px-6  pb-32  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-green-100  flex justify-center  w-full max-w-5xl max-h-[65vh] overflow-y-auto "
              layoutId="main-card"
              
            >
              <div className="p-6 md:p-8 lg:p-16 ">
                {/* Decorative bottles with enhanced animations */}
                <motion.div 
                  className="flex justify-center space-x-3 md:space-x-4 lg:space-x-6 mb-6 lg:mb-12 "
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
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-800 mb-4 lg:mb-6 leading-tight  ">
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
                    className="grid gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto justify-center "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {quizQuestions[currentQuestion]?.options.map((option, index) => (
                      <motion.button
                        key={option.id}
                        onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id, option.score)}
                        className={`p-4 md:p-6 lg:p-8 text-left rounded-xl lg:rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden
                          ${answers[quizQuestions[currentQuestion].id] === option.id
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
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <motion.div 
                  className="flex justify-between items-center mt-6 lg:mt-12 max-w-4xl mx-auto "
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
                    <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 " />
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

        ) : (
          /* Enhanced Results Screen */
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
                Based on your responses, here&aposs your personalized recommendation
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
                      {result?.benefits.map((benefit, index) => (
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
        )}
      </AnimatePresence>

      {/* Enhanced Footer */}
      <motion.footer 
  className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-green-800 to-emerald-800 text-white py-6 lg:py-10"
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
      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mr-3">
        <Leaf className="w-5 h-5 lg:w-8 lg:h-8" />
      </div>
      <div>
        <span className="text-lg md:text-2xl lg:text-3xl font-bold">Saabhi Wellness</span>
        <p className="text-green-200 text-xs md:text-sm lg:text-base">सभी Ke Liye</p>
      </div>
    </motion.div>

    {/* Tagline */}
    <motion.p 
      className="text-green-100 text-sm md:text-lg lg:text-xl mb-2 lg:mb-4 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: showResult ? 2.4 : 1.2 }}
    >
      Authentic Ayurvedic care for your body, mind, and soul
    </motion.p>

    {/* Sub-text */}
    <motion.p 
      className="text-green-300 mb-3 lg:mb-5 text-xs md:text-base lg:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: showResult ? 2.5 : 1.3 }}
    >
      Rooted in the legacy of Rasraj Ayurveda • Modern solutions with ancient wisdom
    </motion.p>

    {/* Features */}
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 lg:gap-8 text-xs md:text-sm lg:text-base text-green-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: showResult ? 2.6 : 1.4 }}
    >
      <span className="flex items-center justify-center">🌿 100% Natural</span>
      <span className="flex items-center justify-center">✨ Traditional Methods</span>
      <span className="flex items-center justify-center">❤️ Made with Care</span>
    </motion.div>
  </div>
</motion.footer>

    </div>
  );
};

export default SaabhiQuiz;