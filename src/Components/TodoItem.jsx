import TodoComputed from "./TodoComputed";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = () => {
  return (
    <>
      <article className="flex gap-4 py-4 border-b border-b-gray-400">
        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>

        <p className="text-gray-600 grow">complete online js course</p>

        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>

      <article className="flex gap-4 py-4 border-b border-b-gray-400">
        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>

        <p className="text-gray-600 grow">complete online js course</p>

        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>

      
    </>
  );
};
export default TodoItem;
