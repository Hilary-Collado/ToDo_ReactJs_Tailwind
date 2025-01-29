import TodoComputed from "./TodoComputed";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      {/* [&>article]:px-4 => le aplica un padding de 4 a todos los article que sean hijos de un div que tenga la clase article */}
      <div className="rounded-md bg-white [&>article]:p-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        
        <TodoComputed />
      </div>
    </>
  );
};
export default TodoList;
