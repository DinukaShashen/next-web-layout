"use client";
import { useState } from "react";

const quotes = [
  "Hacktoberfest is awesome!",
  "Open source = community + learning.",
  "One PR at a time, progress happens.",
  "Code. Contribute. Celebrate.",
];

export default function QuotesPage() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Random Quote Generator</h1>
      <p className="mt-4 italic">{quote}</p>
      <button
        onClick={getRandomQuote}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        New Quote
      </button>
    </div>
  );
}
