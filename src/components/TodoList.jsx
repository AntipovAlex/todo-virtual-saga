import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 15;

export default function VirtualTodoList({ todos }) {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [todos]);

  if (!Array.isArray(todos) || todos.length === 0) {
    return <div>No todos loaded...</div>;
  }

  const totalHeight = todos.length * ITEM_HEIGHT;
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const endIndex = Math.min(startIndex + VISIBLE_COUNT, todos.length);
  const visibleTodos = todos.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
      style={{
        height: ITEM_HEIGHT * VISIBLE_COUNT,
        overflowY: "auto",
        border: "1px solid #ccc",
        background: "#f9f9f9",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleTodos.map((todo, i) => (
          <div
            key={todo.id}
            style={{
              position: "absolute",
              top: (startIndex + i) * ITEM_HEIGHT,
              height: ITEM_HEIGHT,
              width: "100%",
              boxSizing: "border-box",
              padding: "4px 8px",
            }}
          >
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
