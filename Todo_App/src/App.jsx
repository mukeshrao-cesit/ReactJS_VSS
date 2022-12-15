import { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoId, setTodoId] = useState(0);
  const [todoList, setTodoList] = useState([]);
  function handleTodoFilter(id) {
    setTodoList(todoList.filter((elem) => elem.id != id));
  }
  function handleTodoAdd() {
    if (!todoInput) {
      return alert("Please provide valid input");
    } else {
      setTodoList((prev) => {
        return [{ id: todoId, task: todoInput }, ...prev];
      });
      setTodoId((prev) => {
        return (prev += 1);
      });
      setTodoInput("");
    }
  }
  function handleTodoUpdate(id, task) {
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
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todoInputField">
        <input
          type={"text"}
          value={todoInput}
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
