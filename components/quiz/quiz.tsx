"use client";

import React, { useState } from "react";
import { quizzes } from "./quizzesData";
import QuizQuestion from "./quizQuestion";
import { time } from "console";

export default function Quiz() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quiz = quizzes[quizIndex];

  const handleSelect = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = option;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (current < quiz.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Show score
      setShowScore(true);
      setScore(quiz.questions.filter((q, i) => q.answer === answers[i]).length);
      // reset
      setTimeout(() => {
        setShowScore(false);

        setScore(0);
      }, 2000);
      setAnswers([]);
      setCurrent(0);
      setQuizIndex((quizIndex + 1) % quizzes.length);
    }
  };

  return (
    <div className="lg:w-[30vw] w-full mx-auto p-6 border rounded-lg shadow bg-white">
      <div
        className={
          !showScore
            ? `hidden`
            : score > 2
            ? `border border-green-500 text-green-500 p-3 mb-4 w-max mx-auto`
            : `border border-red-500 text-red-500 p-3 mb-4 w-max mx-auto`
        }
      >
        You scored {score} out of {quiz.questions.length}
      </div>
      <h1 className="text-3xl mb-6 border-b border-b-2 pb-2 w-max border-b-brown/40">
        {quiz.title}
      </h1>
      <QuizQuestion
        question={quiz.questions[current].question}
        options={quiz.questions[current].options}
        selected={answers[current] || null}
        onSelect={handleSelect}
      />
      <button
        onClick={handleNext}
        className="mt-2 px-4 py-2 bg-brown text-white rounded"
        disabled={!answers[current]}
      >
        {current < quiz.questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}
