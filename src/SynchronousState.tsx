import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function SynchronousState() {
  const listRef = useRef<HTMLUListElement | any>(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current?.lastChild?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-500 foucs:outline-none text-white"
      />
      <button onClick={handleAdd} className="text-white bg-yellow-700 px-5">
        Add
      </button>
      <ul ref={listRef} className="text-white">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

type Prop = {
  id: number;
  text: string;
};

let nextId = 0;
let initialTodos: Prop[] = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
