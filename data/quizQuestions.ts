import {QuizQuestion } from "@/interfaces/Interface";

// Quiz Data Structure with enhanced questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What&apos;s your current lifestyle like?",
    options: [
      { 
        id: "active", 
        text: "Very active - I exercise regularly and eat healthy", 
        score: { performance: 3, wellness: 2, stress: 1, digestive: 1 } 
      },
      { 
        id: "moderate", 
        text: "Moderately active - I try to stay healthy but could do better", 
        score: { performance: 2, wellness: 3, stress: 2, digestive: 2 } 
      },
      { 
        id: "sedentary", 
        text: "Mostly sedentary - I have a desk job and limited physical activity", 
        score: { performance: 1, wellness: 1, stress: 3, digestive: 2 } 
      },
      { 
        id: "stressed", 
        text: "High stress lifestyle with irregular eating and sleep patterns", 
        score: { performance: 1, wellness: 1, stress: 3, digestive: 3 } 
      }
    ]
  },
  {
    id: 2,
    question: "What&apos;s your primary health goal?",
    options: [
      { 
        id: "energy", 
        text: "Boost energy and vitality naturally", 
        score: { performance: 3, wellness: 2, stress: 2, digestive: 1 } 
      },
      { 
        id: "stress", 
        text: "Reduce stress and improve mental clarity", 
        score: { performance: 1, wellness: 2, stress: 3, digestive: 1 } 
      },
      { 
        id: "digestion", 
        text: "Improve digestion and gut health", 
        score: { performance: 1, wellness: 2, stress: 1, digestive: 3 } 
      },
      { 
        id: "overall", 
        text: "Overall wellness and immunity boost", 
        score: { performance: 2, wellness: 3, stress: 2, digestive: 2 } 
      }
    ]
  },
  {
    id: 3,
    question: "How do you usually feel by afternoon?",
    options: [
      { 
        id: "energetic", 
        text: "Still energetic and focused", 
        score: { performance: 3, wellness: 2, stress: 1, digestive: 1 } 
      },
      { 
        id: "tired", 
        text: "Slightly tired but manageable", 
        score: { performance: 2, wellness: 2, stress: 2, digestive: 2 } 
      },
      { 
        id: "drained", 
        text: "Drained and need caffeine boost", 
        score: { performance: 1, wellness: 1, stress: 3, digestive: 2 } 
      },
      { 
        id: "sluggish", 
        text: "Sluggish with digestive discomfort", 
        score: { performance: 1, wellness: 1, stress: 2, digestive: 3 } 
      }
    ]
  },
  {
    id: 4,
    question: "What&apos;s your preferred way to take supplements?",
    options: [
      { 
        id: "tablets", 
        text: "Tablets - Quick and convenient", 
        score: { performance: 2, wellness: 2, stress: 2, digestive: 2 } 
      },
      { 
        id: "juice", 
        text: "Natural juices - I enjoy the taste", 
        score: { performance: 2, wellness: 3, stress: 1, digestive: 3 } 
      },
      { 
        id: "oils", 
        text: "Oils for topical application", 
        score: { performance: 1, wellness: 3, stress: 2, digestive: 1 } 
      },
      { 
        id: "mixed", 
        text: "I&apos;m open to trying different forms", 
        score: { performance: 2, wellness: 2, stress: 2, digestive: 2 } 
      }
    ]
  },
  {
    id: 5,
    question: "When do you typically experience health issues?",
    options: [
      { 
        id: "morning", 
        text: "Morning sluggishness and low energy", 
        score: { performance: 1, wellness: 2, stress: 2, digestive: 3 } 
      },
      { 
        id: "work-stress", 
        text: "During stressful work periods", 
        score: { performance: 2, wellness: 1, stress: 3, digestive: 1 } 
      },
      { 
        id: "seasonal", 
        text: "Seasonal changes affect my immunity", 
        score: { performance: 1, wellness: 3, stress: 1, digestive: 2 } 
      },
      { 
        id: "rarely", 
        text: "Rarely, but want to maintain good health", 
        score: { performance: 3, wellness: 3, stress: 1, digestive: 1 } 
      }
    ]
  }
];

