import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [ title, setTitle ] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    //    VALIDAR QUE EL TITULO NO ESTE VACIO
    //    TRIM HACE UNA LIMPIEZA DE LOS ESPACIOS EN BLANCO
    // if (title.trim().length > 0) {
    //   createTodo(title);
    //   setTitle("");
    // }

    if (!title.trim()) {
      return setTitle("");
    }
    
    createTodo(title);
    setTitle("");
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmitAddTodo}
        className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mb-5"
      >
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>

        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-full outline-none text-gray-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </>
  );
};
export default TodoCreate;
