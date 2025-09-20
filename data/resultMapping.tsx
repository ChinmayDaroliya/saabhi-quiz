import React from 'react';
import { ChevronLeft, Leaf, Heart, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { ResultData } from "@/interfaces/Interface";


// Enhanced result mapping
export const resultMapping: Record<string, ResultData> = {
 toxins: {
    title: "Tox Out Juice — Reset & Glow",
    subtitle: "Detox naturally, restore energy & skin",
    description: "Your lifestyle shows that toxins may be silently piling up — late nights, frequent drinks, and oily foods can affect your skin and energy.  Saabhi’s Tox Out Juice is the natural way to reset your body, cleanse your liver, and bring back that inner glow. Try it today: Tox Out Juice",
    // benefits: [
    //   "Natural Liver Detox",
    //   "Restore Energy & Vitality",
    //   "Gentle Digestion Support",
    //   "Clear, Glowing Skin"
    // ],
    // icon: "🧃",
    // color: "from-green-600 to-green-800",
    // image: "🌙✨"
  },
  balanced: {
    title: "Tox Out Juice — Stay Ahead",
    subtitle: "Support energy, digestion, and glow",
    description: "You’re already living a balanced lifestyle But even the healthiest bodies collect hidden toxins from stress and environment. Tox Out Juice helps you stay ahead — keeping your energy levels high, digestion smooth, and glow unstoppable. Check it out: Tox Out Juice",
    // benefits: [
    //   "Maintain Energy Levels",
    //   "Support Digestion",
    //   "Protect Skin Health",
    //   "Boost Overall Wellness"
    // ],
    // icon: "💚",
    // color: "from-emerald-600 to-emerald-800",
    // image: "✨💚"
  },
  fun: {
    title: "Tox Out Juice — Gentle Detox",
    subtitle: "Balance your digestion & skin",
    description: "You’ve got a fun, active vibe but your late nights and foodie habits may cause toxin build-up. Tox Out Juice is designed to gently detoxify, balance your digestion, and keep your skin fresh — so you can enjoy life without the after-effects. Try it here: Tox Out Juice",
    // benefits: [
    //   "Gentle Detoxification",
    //   "Balance Digestion",
    //   "Support Skin Health",
    //   "Enjoy Life Freely"
    // ],
    // icon: "🎉",
    // color: "from-teal-600 to-teal-800",
    // image: "🎉💚"
  },
  active: {
    title: "Tox Out Juice — Active Glow",
    subtitle: "Cleanse, restore, and energize",
    description: "You’re active and health-conscious, but your skin struggles show toxins need flushing out. Tox Out Juice works from within to cleanse, restore balance, and bring back that natural glow . Perfect partner for your lifestyle! Grab it: Tox Out Juice",
    // benefits: [
    //   "Cleanse Naturally",
    //   "Restore Skin Balance",
    //   "Boost Energy",
    //   "Support Active Lifestyle"
    // ],
    // icon: "💪",
    // color: "from-amber-600 to-amber-800",
    // image: "🌸💚"
  }
};