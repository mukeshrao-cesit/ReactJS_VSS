import { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleTodoFilter(id) {
    setTodoList(todoList.filter((elem) => elem.id != id));
  }
  function handleTodoAdd() {
    if (!todoInput) {
      return alert("Please provide valid input");
    } else {
      setTodoList((prev) => {
        return [{ id: uuidv4(), task: todoInput }, ...prev];
      });
      setTodoInput("");
    }
  }
  function handleTodoUpdate(id, task) {
    if (task !== "") {
      setTodoList(
        todoList.map((elem) => {
          if (elem.id === id) {
            return { ...elem, task: task };
          } else {
            return elem;
          }
        })
      );
    }
  }
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todoInputField">
        <input
          type={"text"}
          value={todoInput}
          placeholder="Enter your task"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <div className="todoInputButton">
          <button onClick={handleTodoAdd}>Add Todo</button>
        </div>
      </div>
      <div>
        <TodoList
          todoList={todoList}
          handleTodoFilter={handleTodoFilter}
          handleTodoUpdate={handleTodoUpdate}
        />
      </div>
    </div>
  );
}

export default App;
