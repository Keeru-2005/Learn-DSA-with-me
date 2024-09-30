"use client";
import React, { useState } from "react";
import Image from 'next/image';

const StackModel = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number | "">("");
  const [output, setOutput] = useState<string>("");

  const push = () => {
    if (inputValue !== "") {
      setStack([...stack, Number(inputValue)]);
      setOutput(`Pushed: ${inputValue}`);
      setInputValue(""); // Clear input field
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      const poppedItem = stack[stack.length - 1];
      setStack(stack.slice(0, -1));
      setOutput(`Popped: ${poppedItem}`);
    } else {
      setOutput("Stack is empty!");
    }
  };

  const peek = () => {
    if (stack.length > 0) {
      setOutput(`Top item: ${stack[stack.length - 1]}`);
    } else {
      setOutput("Stack is empty!");
    }
  };

  const isEmpty = () => {
    setOutput(stack.length === 0 ? "Stack is empty!" : "Stack is not empty.");
  };

  const size = () => {
    setOutput(`Size: ${stack.length}`);
  };

  return (
    <div className="bg-sky-50 p-5 rounded">
      <h2 className="text-lg font-semibold">Stack Model</h2>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder="Enter a number"
          className="border p-1 mr-2"
        />
        <button onClick={push} className="bg-blue-500 text-white p-1 m-1 rounded">Push</button>
        <button onClick={pop} className="bg-red-500 text-white p-1 rounded m-1">Pop</button>
        <button onClick={peek} className="bg-green-500 text-white p-1 rounded m-1">Peek</button>
        <button onClick={isEmpty} className="bg-yellow-500 text-white p-1 rounded m-1">IsEmpty</button>
        <button onClick={size} className="bg-purple-500 text-white p-1 rounded m-1">Size</button>
      </div>
      <div className="mt-4">
        <p>Current Stack: {stack.join(", ")}</p>
        <p>Output: {output}</p>
      </div>
    </div>
  );
};
export default StackModel;