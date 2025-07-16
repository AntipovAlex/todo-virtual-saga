import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/actions";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    dispatch(editTodo(todo.id, text));
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{todo.text}</span>
      )}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        style={{ marginLeft: "auto" }}
      >
        ×
      </button>
    </div>
  );
}
