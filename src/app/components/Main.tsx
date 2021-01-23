import * as React from 'react';
import { QuestionCard } from './QuestionCard/QuestionCard';

export const Main = () => {
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const showNextQuestion = () => {};

  return (
    <div className="Main">
      <h1>Online Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>
      <p className="score"></p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={showNextQuestion}></button>
    </div>
  );
};
