
"use client";
import React, { useState } from "react";
import Image from 'next/image';
import StackModel from "./stackmodel";
import Queue from "./queuemodel";

const Home = () => {
  // State to manage which answer is currently shown
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);

  const handleClick = (answerId: string | null) => {
    setCurrentAnswer(answerId); // Set the clicked answer or reset to null
    setCurrentLanguage(null); // Reset language selection when changing answer
  };

  const handleLanguageChange = (language: string | null) => {
    setCurrentLanguage(language); // Set the selected programming language
  };

  return (
    <div className="bg-zinc-50 h-screen">
      <header className="flex">
        <Image src="/dsa_logo.jpg" width={150} height={100} alt={"dsa logo"}/>
        <h1
          className="p-10 text-blue-800 text-3xl cursor-pointer font-serif"
          onClick={() => handleClick(null)} // Reset to default when clicking on title
        >
          Learn DSA with me
        </h1>
      </header>
      <div className="flex">
        <div className="m-3 p-5 leading-loose bg-sky-100 rounded w-64 cursor-pointer min-h-screen">
          <p
            className="align-middle justify-center pl-16 text-lg"
            onClick={() => handleClick("sa")} // Trigger click for Stack
            
          >
            Stack
          </p>
          <p
            className="align-middle justify-center pl-16 text-lg"
            onClick={() => handleClick("qa")} // Trigger click for Queue
          >
            Queue
          </p>
          {/* <p
            className=" pl-5 text-lg"
            onClick={() => handleClick("/")} // Trigger click for Queue
          >
            Doublly Ended Queue
          </p> */}
        </div>

        {/* Content display area */}
        <div className="bg-sky-50 rounded w-3/4 ml-10 mr-10 mt-3 p-16">
          {/* Conditionally render content based on state */}
          {currentAnswer === "sa" ? (
            <div>
              <p>A <span className="font-semibold">Stack</span> is a linear data structure that follows a particular order in which the operations are performed. The order may be <span className="font-bold">LIFO(Last In First Out)</span> or <span className="font-bold">FILO(First In Last Out)</span>. LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.</p><hr />
              <div>
                <div className="flex mt-3 mb-3">
                  <Image src="/pile_of_books.jpg" alt="pile of books" width={250} height={250} />
                  <p className="pl-10">
                    Think of a stack of books on your desk. You can only take the top book off the pile, and when you add a new book, you place it on top. This means that the last book you add is the first one you'll read, following a last-in, first-out (LIFO) approach. If you want a book from the middle or bottom, you must remove all the books above it first.
                  </p>
                </div>
                <hr />
                <div className="flex mt-3 mb-3">
                  <Image src="/stack.png" alt="stack" width={250} height={300} />
                  <p className="pl-10">
                    In Data Structures and Algorithms, a stack works just like our pile of books. It allows you to add (push) and remove (pop) items in a last-in, first-out manner. When you push an item onto the stack, it sits on top, and when you pop an item, you remove the top one first. This LIFO behavior is crucial for tasks like managing function calls and undo operations, making the stack an essential concept in computer science.
                  </p>
                </div>
              </div>

              <p>Let's list the operations that we can perform on a Stack :</p>
              <div className="flex">
                <div>
                  <p>
                    1. Push
                    <br />
                    2. Pop
                    <br />
                    3. Peek (or Top)
                    <br />
                    4. IsEmpty
                    <br />
                    5. Size
                  </p>
                </div>
                <div>
                  <p className="pl-5">
                    : The push operation adds an item to the top of the stack. <br />
                    : The pop operation removes the item from the top of the stack and returns it. <br />
                    : The peek operation returns the item at the top of the stack without removing it. <br />
                    : The isEmpty operation checks whether the stack is empty. <br />
                    : The size operation returns the number of items in the stack. <br />
                  </p>
                </div>
              </div>
              <div>
                <StackModel/>
              </div>
              {/* Navbar for programming language selection */}
              <div className="mt-5">
                <p className="p-5 text-lg">Check out the sample code for implementing Stack in Python and C with the operations mentioned above</p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleLanguageChange("python")} 
                    className={`p-2 rounded w-24 ${currentLanguage === "python" ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'}`}
                  >
                    Python
                  </button>
                  <button 
                    onClick={() => handleLanguageChange("c")} 
                    className={`p-2 rounded w-24 ${currentLanguage === "c" ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'}`}
                  >
                    C
                  </button>
                </div>
              </div>

              {/* Display code based on selected programming language */}
              {currentLanguage === "python" && (
                <pre className="mt-5 p-3 bg-sky-100 rounded">
                  <code>
                    {`class Stack:
  def __init__(self):
      self.items = []

  def push(self, item):
      self.items.append(item)

  def pop(self):
      return self.items.pop() if not self.is_empty() else None

  def peek(self):
      return self.items[-1] if not self.is_empty() else None

  def is_empty(self):
      return len(self.items) == 0

  def size(self):
      return len(self.items)

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # Output: 2
print(stack.peek())  # Output: 1
`}

                  </code>
                </pre>
              )}
              {currentLanguage === "c" && (
                <pre className="mt-5 p-3 bg-sky-100 rounded">
                  <code>
                    {`#include <stdio.h>
#define MAX 100

struct Stack {
    int items[MAX];
    int top;
};

void initStack(struct Stack* s) {
    s->top = -1;
}

int isFull(struct Stack* s) {
    return s->top == MAX - 1;
}

int isEmpty(struct Stack* s) {
    return s->top == -1;
}

void push(struct Stack* s, int item) {
    if (!isFull(s)) {
        s->items[++(s->top)] = item;
    }
}

int pop(struct Stack* s) {
    if (!isEmpty(s)) {
        return s->items[(s->top)--];
    }
    return -1; // Indicate stack is empty
}

int peek(struct Stack* s) {
    if (!isEmpty(s)) {
        return s->items[s->top];
    }
    return -1; // Indicate stack is empty
}

// Example usage
int main() {
    struct Stack stack;
    initStack(&stack);
    push(&stack, 1);
    push(&stack, 2);
    printf("%d\t", pop(&stack)); // Output: 2
    printf("%d\t", peek(&stack)); // Output: 1
    return 0;
}
`}
                  </code>
                </pre>
              )}
            </div>
          ) : currentAnswer === "qa" ? (
            <div>
              <p className="mb-5">A <span className="font-bold">Queue</span> Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of <span className="font-bold">“First in, First out” (FIFO)</span>, where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.</p>
              <hr />
              
                <div className="m-5">
                  <div className="flex p-5">
                  <Image src="/ppl_q.jpg" alt={""} width={300} height={300}></Image> <p className="ml-5">Queues are a common sight in our daily lives—think of people waiting in line for coffee or tickets. In a queue, the first person to arrive is the first to be served, following a First In, First Out (FIFO) principle. This orderly approach ensures that everyone gets their turn, whether it’s at a store, a drive-thru, or even at a theme park.
                  </p></div>
                  <br />
                  <hr />
                  <div className="flex p-5">
                  <Image src="/Queue.png" alt={""} width={300} height={300}></Image><p className="ml-5">

                  In the realm of Data Structures and Algorithms (DSA), queues operate on the same FIFO principle. They allow us to manage data in a structured manner, where elements are added at the back and removed from the front. This is crucial for tasks like scheduling processes in operating systems or handling requests in web servers. Understanding queues in DSA equips us with the tools to efficiently manage and organize data flow, just like maintaining an orderly line in everyday life!
                  </p>
                  </div>
                  <p className="text-lg">Let's list out all the operations that we can perform on a Queue!</p>
                  <div className="flex">
                    <p>
                    1. Enqueue <br />
                    2. Dequeue <br />
                    3. Peek (or Front) <br />
                    4. IsEmpty <br />
                    5. Size <br />
                    </p>
                    <p className="pl-5">
                      : Adds an item to the back of the queue. <br />
                      : Removes and returns the item from the front of the queue. <br />
                      : Returns the item at the front of the queue without removing it. <br />
                      : Checks whether the queue is empty. <br />
                      : Returns the number of items currently in the queue. <br />
                    </p>
                  </div>
                  <br />

                    <Queue/>
                  
                </div>
                <div>
                <div>
  {/* <nav className="flex  m-5">
    <button
      onClick={() => handleLanguageChange("python")}
      className={`p-2 rounded ${currentLanguage === "python" ? "bg-sky-500 text-white" : "bg-gray-300"}`}
    >
      Python
    </button>
    <button
      onClick={() => handleLanguageChange("c")}
      className={`p-2 rounded ${currentLanguage === "c" ? "bg-sky-500 text-white" : "bg-gray-300"}`}
    >
      C
    </button>
  </nav> */}
  <div className="mt-5">
                <p className="p-5 text-lg">Check out the sample code for implementing Queue in Python and C with the operations mentioned above</p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleLanguageChange("python")} 
                    className={`p-2 rounded w-24 ${currentLanguage === "python" ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'}`}
                  >
                    Python
                  </button>
                  <button 
                    onClick={() => handleLanguageChange("c")} 
                    className={`p-2 rounded w-24 ${currentLanguage === "c" ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'}`}
                  >
                    C
                  </button>
                </div>
              </div>


  {/* Display code based on selected programming language */}
  {currentLanguage === "python" && (
    <pre className="mt-5 p-3 bg-sky-100 rounded">
      <code>
        {`class Queue:
  def __init__(self):
      self.items = []

  def enqueue(self, item):
      self.items.append(item)

  def dequeue(self):
      return self.items.pop(0) if not self.is_empty() else None

  def peek(self):
      return self.items[0] if not self.is_empty() else None

  def is_empty(self):
      return len(self.items) == 0

  def size(self):
      return len(self.items)

# Example usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
print(queue.dequeue())  # Output: 1
print(queue.peek())     # Output: 2
`}
      </code>
    </pre>
  )}
  {currentLanguage === "c" && (
    <pre className="mt-5 p-3 bg-sky-100 rounded">
      <code>
        {`#include <stdio.h>
#include <stdlib.h>
#define MAX 100

struct Queue {
    int items[MAX];
    int front, rear;
};

void initQueue(struct Queue* q) {
    q->front = -1;
    q->rear = -1;
}

int isFull(struct Queue* q) {
    return q->rear == MAX - 1;
}

int isEmpty(struct Queue* q) {
    return q->front == -1 || q->front > q->rear;
}

void enqueue(struct Queue* q, int item) {
    if (!isFull(q)) {
        if (q->front == -1) {
            q->front = 0;
        }
        q->items[++(q->rear)] = item;
    }
}

int dequeue(struct Queue* q) {
    if (!isEmpty(q)) {
        return q->items[(q->front)++];
    }
    return -1; // Indicate queue is empty
}

int peek(struct Queue* q) {
    if (!isEmpty(q)) {
        return q->items[q->front];
    }
    return -1; // Indicate queue is empty
}

// Example usage
int main() {
    struct Queue queue;
    initQueue(&queue);
    enqueue(&queue, 1);
    enqueue(&queue, 2);
    printf("%d\t", dequeue(&queue)); // Output: 1
    printf("%d\t", peek(&queue));     // Output: 2
    return 0;
}
`}
      </code>
    </pre>
  )}
</div>

                </div>
                
            </div>
          ) : (
            <div id="d">
              <p className="font-sans text-lg w-3/4 pl-52 leading-10">
                Unlock the power of problem-solving with Data Structures and
                Algorithms (DSA)! We know DSA can seem challenging, but with the
                right guidance and practice, you'll master it faster than you
                think. Our platform is designed to simplify complex concepts and
                make learning DSA engaging and fun. Step by step, we’ll help you
                build the confidence to tackle coding problems like a pro. Don't
                let fear hold you back—start your DSA journey today and open the
                door to endless opportunities!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
