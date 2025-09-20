"use client";

import { motion } from "framer-motion";
import {ProgressBar} from "../ProgressBar";

interface HeaderProps {
  showResult: boolean;
  currentQuestion: number;
  quizQuestions: { length: number };
}

const Header: React.FC<HeaderProps> = ({ showResult, currentQuestion, quizQuestions }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 lg:py-6">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
                className="flex items-center "
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                src="/SAABHI_LOGO-01.svg"
                alt="Saabhi Wellness"
                className="w-24 lg:w-25 h-auto object-contain translate-x-10 "
                />
            </motion.div>

            {/* Progress Section */}
            {!showResult && (
                <motion.div
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                >
                <p className="text-sm lg:text-base text-[#1C6835] font-medium -translate-x-3">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                </p>
                <div className="mt-1 lg:mt-3 -translate-x-3 ">
                    <ProgressBar current={currentQuestion} total={quizQuestions.length} />
                </div>
                </motion.div>
            )}
            </div>
        </div>
        </header>
  );
};

export default Header;
