"use client";
import React, { useState } from "react";

const Queue = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const enqueue = () => {
    if (inputValue) {
      const newQueue = [...queue, Number(inputValue)];
      setQueue(newQueue);
      setOutput(`Enqueued: ${inputValue}`);
      setInputValue(""); // Clear input after enqueue
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const [removed] = queue;
      const newQueue = queue.slice(1);
      setQueue(newQueue);
      setOutput(`Dequeued: ${removed}`);
    } else {
      setOutput("Queue is empty!");
    }
  };

  const peek = () => {
    if (queue.length > 0) {
      setOutput(`Front of queue: ${queue[0]}`);
    } else {
      setOutput("Queue is empty!");
    }
  };

  const isEmpty = () => {
    setOutput(queue.length === 0 ? "Queue is empty!" : "Queue is not empty.");
  };

  const size = () => {
    setOutput(`Size of queue: ${queue.length}`);
  };

  return (
    <div className="p-5 bg-sky-100 rounded">
      <h2 className="text-lg mb-3 font-bold">Queue Operations</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number to enqueue"
        className="p-2 border border-gray-400 rounded mr-2"
      />
      <button onClick={enqueue} className="p-2 bg-green-500 text-white rounded mr-2">Enqueue</button>
      <button onClick={dequeue} className="p-2 bg-red-500 text-white rounded mr-2">Dequeue</button>
      <button onClick={peek} className="p-2 bg-blue-500 text-white rounded mr-2">Peek</button>
      <button onClick={isEmpty} className="p-2 bg-yellow-500 text-white rounded mr-2">Is Empty</button>
      <button onClick={size} className="p-2 bg-purple-500 text-white rounded">Size</button>

      <div className="mt-3">
        <p>Output: {output}</p>
        <p>Current Queue: {queue.join(", ")}</p>
      </div>
    </div>
  );
};

export default Queue;
