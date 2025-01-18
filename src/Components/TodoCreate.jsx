const TodoCreate = () => {
    return (
        <>
            <form action="" className='bg-white rounded-md overflow-hidden py-4 items-center px-4 flex gap-4 mb-5'>
                <span className='rounded-full border-2 w-5 h-5 inline-block'></span>

                <input
                    type="text"
                    placeholder='Create a new todo...'
                    className='w-full outline-none text-gray-500'
                />
            </form>
        </>
    );
};
export default TodoCreate;