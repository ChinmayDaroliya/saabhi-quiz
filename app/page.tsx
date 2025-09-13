import { Suspense } from 'react';
import QuizLoading  from './QuizLoading';
// import SaabhiQuizClient from './SaabhiQuizClient';
import SaabhiQuiz from '@/components/SaabhiQuiz';

export default function Home() {
  return (
    <Suspense fallback={<QuizLoading />}>
      {/* <SaabhiQuizClient /> */}
      <SaabhiQuiz/>
    </Suspense>
  );
}