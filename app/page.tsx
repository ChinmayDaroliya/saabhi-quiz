import { Suspense } from 'react';
import QuizLoading  from './QuizLoading';

import SaabhiQuiz from '@/components/SaabhiQuiz';

export default function Home() {
  return (
    <Suspense fallback={<QuizLoading />}>
     
      <SaabhiQuiz/>
    </Suspense>
  );
}