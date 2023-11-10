'use client';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <p>{count}</p>
      <button
        className="p-2 border-2 rounded-lg border-gray-700"
        onClick={incrementCount}
      >
        Increment
      </button>
    </div>
  );
}
