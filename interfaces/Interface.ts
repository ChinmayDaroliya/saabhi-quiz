// import React from "react";
// // Quiz

// export interface QuizOption {
//   id: string;
//   text: string;
//   score: {
//     performance: number;
//     wellness: number;
//     stress: number;
//     digestive: number;
//   };
// }

// export interface QuizQuestion {
//   id: number;
//   question: string;
//   options: QuizOption[];
// }

// // Result

// export interface ResultData {
//   title: string;
//   subtitle: string;
//   description: string;
//   benefits: string[];
//   icon: React.ReactElement;
//   color: string;
//   image: string;
// }

import React from "react";

// Quiz

export interface QuizOption {
  id: string;
  text: string;
  score: {
    lifestyle?: number;  // Workout habits
    sleep?: number;      // Bedtime mood
    alcohol?: number;    // Drinking habits
    diet?: number;       // Foodie habits
    skin?: number;       // Skin condition
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
  // benefits: string[];
  // icon: React.ReactElement | string; // you can keep it as string if using emojis
  // color: string;
  // image: string;
}
