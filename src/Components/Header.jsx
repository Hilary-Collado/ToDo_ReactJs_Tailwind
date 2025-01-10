import luna from '../../public/images/icon-moon.svg'
// import circulo from '../public/images/icon-cross.svg'


const Header = () => {
    return (
        <header className='container mx-auto px-4 pt-8'>
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">todo</h1>
                <button><img src={luna} alt="" /></button>
            </div>

            <form action="" className='bg-white mt-8 rounded-md overflow-hidden py-4 items-center px-4 flex gap-4'>
                <span className='rounded-full border-2 w-5 h-5 inline-block'></span>

                {/* <button className='bg-slate-900'><img src={circulo} alt="" /></button> */}
                <input
                    type="text"
                    placeholder='Create a new todo...'
                    className='w-full outline-none text-gray-500'
                />
            </form>

        </header>
    )
}
export default Header;