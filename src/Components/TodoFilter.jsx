const TodoFilter = () => {
  return (
    <>
      <section className="container mx-auto mt-8">
        <div className="bg-white p-4 flex justify-center rounded-md gap-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </section>
    </>
  );
};
export default TodoFilter;
