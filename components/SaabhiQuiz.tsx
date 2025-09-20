'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuizOption } from '@/interfaces/Interface';
import { quizQuestions } from '@/data/quizQuestions';
import { resultMapping } from '@/data/resultMapping';
import { LoadingScreen } from './LoadingScreen';
import { Footer } from './saabhiQuizInnerComponents/Footer';
import { ResultSection } from './saabhiQuizInnerComponents/ResultSection';
import { QuizSection } from './saabhiQuizInnerComponents/QuizSection';
import Header from './saabhiQuizInnerComponents/Header';

// Define the scores type separately to avoid circular reference
interface QuizScores {
  toxins: number;
  balanced: number;
  fun: number;
  active: number;
}

// Main Quiz Component with optimized structure
const SaabhiQuiz: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<QuizScores>({ 
    toxins: 0, 
    balanced: 0, 
    fun: 0, 
    active: 0 
  });
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smart result determination based on answer patterns
  const determineResult = useCallback((answers: Record<number, string>, scores: QuizScores) => {
    const answerValues = Object.values(answers);
    
    // Pattern 1: Worst case scenario - all unhealthy choices
    if (answerValues.includes('rarely') && // Q1: Rarely workout
        answerValues.includes('2am-scroller') && // Q2: 2 AM scroller
        answerValues.includes('frequent') && // Q3: Frequent sipper
        answerValues.includes('cant-resist') && // Q4: Can't resist eating out
        answerValues.includes('frequent-breakouts')) { // Q5: Frequent breakouts
      return resultMapping.toxins;
    }
    
    // Pattern 2: Mixed lifestyle with some unhealthy habits
    if (answerValues.includes('weekend-warrior') && // Q1: Weekend warrior
        answerValues.includes('midnight-owl') && // Q2: Midnight owl
        answerValues.includes('occasionally') && // Q3: Occasionally drinks
        answerValues.includes('2-3-times') && // Q4: 2-3 times eating out
        answerValues.includes('rare-spots')) { // Q5: Rare spots
      return resultMapping.fun;
    }
    
    // Pattern 3: Perfectly healthy lifestyle
    if (answerValues.includes('daily-hustler') && // Q1: Daily hustler
        answerValues.includes('early-snoozer') && // Q2: Early snoozer
        answerValues.includes('never') && // Q3: Never touched alcohol
        answerValues.includes('hardly') && // Q4: Hardly ever eat out
        answerValues.includes('clear')) { // Q5: Clear skin
      return resultMapping.balanced;
    }
    
    // Pattern 4: Health-conscious but skin issues
    if (answerValues.includes('3-4-times') && // Q1: 3-4 times workout
        answerValues.includes('11pm') && // Q2: Around 11 PM sleep
        answerValues.includes('weekends-only') && // Q3: Weekends only drinks
        answerValues.includes('once-week') && // Q4: Once a week eat out
        answerValues.includes('major-struggle')) { // Q5: Major skin struggle
      return resultMapping.active;
    }
    
    // Fallback: Use highest score if no pattern matches
    const scoreValues = Object.values(scores);
    const maxScore = Math.max(...scoreValues);
    const resultType = Object.keys(scores).find(key => 
      scores[key as keyof QuizScores] === maxScore
    ) as keyof typeof resultMapping;
    
    return resultMapping[resultType];
  }, []);

  // Memoize the current result calculation
  const result = useMemo(() => {
    if (!showResult) return null;
    return determineResult(answers, scores);
  }, [scores, showResult, answers, determineResult]);

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

    // Update scores (for fallback calculation)
    const newScores = { ...scores };
    
    Object.entries(optionScore).forEach(([quizCategory, value]) => {
      const numericValue = value as number;
      // Simple scoring for fallback - you can adjust weights as needed
      if (quizCategory === 'alcohol' && numericValue !== undefined) {
        newScores.toxins += (5 - numericValue); // Reverse: less alcohol = lower toxins
      } else if (quizCategory === 'skin' && numericValue !== undefined) {
        newScores.balanced += numericValue; // Good skin = more balanced
      } else if (quizCategory === 'lifestyle' && numericValue !== undefined) {
        newScores.active += numericValue; // Active lifestyle = more active
      } else if (quizCategory === 'sleep' && numericValue !== undefined) {
        newScores.balanced += numericValue; // Good sleep = more balanced
      } else if (quizCategory === 'diet' && numericValue !== undefined) {
        newScores.fun += numericValue; // Healthy diet = more fun
      }
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
    setScores({ toxins: 0, balanced: 0, fun: 0, active: 0 });
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
    <div className="">
      {/* Header */}
      <Header  showResult={showResult} currentQuestion={currentQuestion} quizQuestions={quizQuestions} />

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