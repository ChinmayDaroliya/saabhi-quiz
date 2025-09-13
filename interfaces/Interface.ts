import React from "react";
// Quiz

export interface QuizOption {
  id: string;
  text: string;
  score: {
    performance: number;
    wellness: number;
    stress: number;
    digestive: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Result

export interface ResultData {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: React.ReactElement;
  color: string;
  image: string;
}