import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Leaf, Loader2 } from 'lucide-react'

// Dynamically import the quiz component for better performance
const SaabhiQuiz = dynamic(() => import('../components/SaabhiQuiz'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-green-200 rounded-full animate-spin border-t-green-600"></div>
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Saabhi Wellness</h2>
        <p className="text-green-600 animate-pulse">Loading your wellness journey...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    }>
      <SaabhiQuiz />
    </Suspense>
  )
}