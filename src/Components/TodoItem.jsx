import TodoComputed from "./TodoComputed";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({todo}) => {
  const {id, title, completed} = todo;
  return (
    <>
      <article className="flex gap-4 py-4 border-b border-b-gray-400">
        {/* <button className="rounded-full border-2 w-5 h-5 inline-block flex-none">
          <IconCheck/>
        </button> */}

        <button 
        className="rounded-full border-2 w-5 h-5 flex-none
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        grid place-items-center">
          
          <IconCheck/>
          
        </button>

        <p className="text-gray-600 grow">{title}</p>

        <button className="flex-none">
          <IconCross />
        </button>
      </article>

    

      
    </>
  );
};
export default TodoItem;
