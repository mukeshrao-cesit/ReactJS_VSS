import { useState } from "react";
import { TodoList } from "./TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleTodoUpdate() {
    if (!todoInput) {
      return alert("Please provide valid input");
    } else {
      setTodoList((prev) => {
        return [todoInput, ...prev];
      });
    }
  }
  return (
    <div>
      <h1>Todo App</h1>
      <div className="todoInputField">
        <input
          type={"text"}
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={handleTodoUpdate}>Add Todo</button>
      </div>
      <div>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
