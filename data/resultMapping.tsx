import React from 'react';
import { ChevronLeft, Leaf, Heart, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { ResultData } from "@/interfaces/Interface";


// Enhanced result mapping
export const resultMapping: Record<string, ResultData> = {
  performance: {
    title: "Enhanced Performance Formula",
    subtitle: "Perfect for your active lifestyle",
    description: "Our premium blend is designed for individuals who push their limits. With natural adaptogens and energy boosters, this formula supports sustained performance, faster recovery, and enhanced physical stamina throughout your day.",
    benefits: ["Sustained Natural Energy", "Faster Post-Workout Recovery", "Enhanced Physical Stamina", "Improved Mental Focus"],
    icon: <Zap className="w-6 h-6"/>,
    color: "from-green-600 to-green-800",
    image: "🌿💪"   
  },
  wellness: {
    title: "Daily Wellness Booster",
    subtitle: "Comprehensive health support for everyone",
    description: "A perfectly balanced formulation that supports overall wellness. This blend contains essential herbs and nutrients that boost immunity, improve vitality, and maintain your body&aposs natural balance for sustained everyday wellness.",
    benefits: ["Complete Immunity Boost", "Enhanced Daily Vitality", "Natural Body Balance", "Consistent Energy Levels"],
    icon: <Heart className="w-6 h-6" />,
    color: "from-emerald-600 to-emerald-800",
    image: "🍃❤️"
  },
  stress: {
    title: "Stress Relief & Calm Energy",
    subtitle: "Balance your mind, energize your body",
    description: "Specially crafted for modern lifestyles, this formula combines calming herbs with natural energizers. It helps reduce daily stress, improve mental clarity, and provides sustainable energy without jitters or crashes.",
    benefits: ["Natural Stress Reduction", "Enhanced Mental Clarity", "Calm, Steady Energy", "Improved Sleep Quality"],
    icon: <Leaf className="w-6 h-6" />,
    color: "from-teal-600 to-teal-800",
    image: "🧘‍♀️✨"
  },
  digestive: {
    title: "Digestive Harmony Blend",
    subtitle: "Restore your gut health naturally",
    description: "A targeted solution for digestive wellness. This blend contains time-tested Ayurvedic herbs that support healthy digestion, reduce bloating, improve gut health, and promote better nutrient absorption for overall vitality.",
    benefits: ["Improved Digestion", "Reduced Bloating", "Enhanced Gut Health", "Better Nutrient Absorption"],
    icon: <Star className="w-6 h-6" />,
    color: "from-amber-600 to-amber-800",
    image: "🌱🌟"
  }
};