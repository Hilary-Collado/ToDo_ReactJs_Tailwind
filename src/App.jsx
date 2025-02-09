import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
import TodoComputed from "./Components/TodoComputed";
import TodoFilter from "./Components/TodoFilter";
import Footer from "./Components/Footer";

const initialStatesTodos = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: true,
  },
  {
    id: 4,
    title: "50 minutes homework",
    completed: false,
  },
  {
    id: 5,
    title: "dance",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStatesTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  // {...todos} => clonacion de los todos existentes, {newTodos} => nuevos todos

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter)
  
  const filteredTodos = () =>{
     switch (filter){
      case "all":
        return todos;
      case "active":
        return todos.filter((todos) => !todos.completed)
      case "completed":
        return todos.filter((todos) => todos.completed)
      default:
        return todos;
     }
  }
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          // todos={todos}
          todos={filteredTodos()}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter}/>
      </main>

      <Footer />
    </div>
  );
};

export default App;
