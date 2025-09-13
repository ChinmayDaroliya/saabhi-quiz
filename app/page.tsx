import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import  QuizLoading  from '@/components/QuizLoading'


// Dynamically import the quiz component with SSR disabled for better performance
const SaabhiQuiz = dynamic(() => import('../components/SaabhiQuiz'), {
  loading: () => <QuizLoading />,
  ssr: false // Disable server-side rendering for this component
})

export default function Home() {
  return (
    <Suspense fallback={<QuizLoading />}>
      <SaabhiQuiz />
    </Suspense>
  )
}