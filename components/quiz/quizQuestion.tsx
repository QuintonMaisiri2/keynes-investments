import React from "react";

type Props = {
  question: string;
  options: string[];
  selected: string | null;
  onSelect: (option: string) => void;
};

export default function QuizQuestion({ question, options, selected, onSelect }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            className={`p-3 rounded border ${
              selected === opt ? "bg-brown text-white" : "bg-white text-black"
            }`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
