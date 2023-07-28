import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1" },
    { id: 2, name: "Todo 2" },
    { id: 3, name: "Todo 3" },
    { id: 4, name: "Todo 4" },
    { id: 5, name: "Todo 5" },
  ]);

  const handleRemoveTodo = (todo) => {
    const todoFiltered = todos.filter((_) => _.id !== todo.id);

    setTodos(todoFiltered);
  };

  const generateId = () => {
    const typedArray = new Uint8Array(10);
    const randomValues = window.crypto.getRandomValues(typedArray);
    return randomValues.join("");
  };

  const handleAddTodo = () => {
    const clonedTodos = todos.slice();

    clonedTodos.push({
      id: generateId(),
      name: todo,
    });

    console.log(clonedTodos);

    setTodos(clonedTodos);
    setTodo("");
  };

  return (
    <div className="TodoApp mx-auto max-w-xl border border-gray-400 p-4 my-10 rounded-xl">
      <h1 className="font-bold text-center mb-4 italic text-xl">
        Todo Application
      </h1>
      <div className="flex flex-col gap-y-4">
        <div>
          <TodoForm
            todo={todo}
            setTodo={setTodo}
            handleAddTodo={handleAddTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
