import {QuizQuestion } from "@/interfaces/Interface";

// Quiz Data Structure with enhanced questions
export const quizQuestions: QuizQuestion[] = [


   {
    id: 1,
    question: "Workout Vibes?",
    options: [
      { id: "daily-hustler", text: "Daily Hustler 🏋️‍♂️", score: { lifestyle: 4 } },
      { id: "3-4-times", text: "3-4 Times a Week 💪", score: { lifestyle: 3 } },
      { id: "weekend-warrior", text: "Weekend Warrior ⚡", score: { lifestyle: 2 } },
      { id: "rarely", text: "Rarely/Almost Never 😅", score: { lifestyle: 1 } },
    ]
  },
  {
    id: 2,
    question: "Bedtime Mood?",
    options: [
      { id: "early-snoozer", text: "Early Snoozer 🌙", score: { sleep: 4 } },
      { id: "11pm", text: "Around 11 PM 😴", score: { sleep: 3 } },
      { id: "midnight-owl", text: "Midnight Owl 🦉", score: { sleep: 2 } },
      { id: "2am-scroller", text: "2 AM Scroller 📱", score: { sleep: 1 } },
    ]
  },
  {
    id: 3,
    question: "Sip or Skip? (Alcohol)",
    options: [
      { id: "never", text: "Never Touched 🚫", score: { alcohol: 4 } },
      { id: "occasionally", text: "Occasionally 🍷", score: { alcohol: 3 } },
      { id: "weekends-only", text: "Weekends Only 🎉", score: { alcohol: 2 } },
      { id: "frequent", text: "Frequent Sipper 🥂", score: { alcohol: 1 } },
    ]
  },
  {
    id: 4,
    question: "Foodie Habits? (Eating Out)",
    options: [
      { id: "hardly", text: "Hardly Ever 🍲", score: { diet: 4 } },
      { id: "once-week", text: "Once a Week 🍕", score: { diet: 3 } },
      { id: "2-3-times", text: "2-3 Times a Week 🍔", score: { diet: 2 } },
      { id: "cant-resist", text: "Can’t Resist! 🍟", score: { diet: 1 } },
    ]
  },
  {
    id: 5,
    question: "Skin Story (Acne)?",
    options: [
      { id: "clear", text: "Clear Always ✨", score: { skin: 4 } },
      { id: "rare-spots", text: "Rare Spots 🌸", score: { skin: 3 } },
      { id: "frequent-breakouts", text: "Frequent Breakouts 😬", score: { skin: 2 } },
      { id: "major-struggle", text: "Major Skin Struggle 😓", score: { skin: 1 } },
    ]
  }
];


