import { useState } from "react";
import "./App.css";
import ShowTodos from "./components/ShowTodos";
import TaskForm from "./components/TaskForm";
import Todo from "./components/Todo";
import { todos } from "./mock/data";

function App() {
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);
  // const [allTodos, setAllTodos] = useState(todos);
  const [undoneTodos, setUndoneTodos] = useState(todos.filter((todo) => !todo.isCompleted));
  const [doneTodos, setDoneTodos] = useState(todos.filter((todo) => todo.isCompleted));
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = () => {
    if (!inputVal || !inputVal.trim() || showCompletedTodos) {
      return;
    } else {
      setUndoneTodos([
        { title: inputVal, isCompleted: false, id: Date.now() },
        ...undoneTodos,
      ]);
      setInputVal('')
    }
  };

  const whichTodoToRender = showCompletedTodos ? doneTodos : undoneTodos;

  const handleComplete = (id) => {
    const undoneTodo = undoneTodos.find((todo) => todo.id === id);
    undoneTodo.isCompleted = true;
    setDoneTodos([...doneTodos, undoneTodo]);
    setUndoneTodos(undoneTodos.filter((todo) => todo.id !== id));
  };

  const handleRemove = (id) => {
    const copyTodos = [...whichTodoToRender];
    showCompletedTodos
      ? setDoneTodos(copyTodos.filter((todo) => todo.id !== id))
      : setUndoneTodos(copyTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <TaskForm
          inputVal={inputVal}
          setInputVal={setInputVal}
          handleSubmit={handleSubmit}
          showCompletedTodos={showCompletedTodos}
        />
        <ShowTodos
          showCompletedTodos={showCompletedTodos}
          setShowCompletedTodos={setShowCompletedTodos}
        />
        <div className="allTodosContainer">
          {whichTodoToRender.map((todo) => (
            <Todo
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleComplete={handleComplete}
              handleRemove={handleRemove}
              key={todo.id}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
