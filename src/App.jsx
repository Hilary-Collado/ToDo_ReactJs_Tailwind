import { useState } from 'react'
import './App.css'

const App = () => {
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain">

      <header className='container mx-auto px-4 pt-8'>
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">todo</h1>
          <button>luna</button>
        </div>

        <form action="" className='bg-white rounded-md overflow-hidden py-4'>
          <input type="text" placeholder='Create a new todo...' />
        </form>

      </header>

      <main className='container mx-auto px-4'>
        <article className=''>
          <button>Circulo</button>
          <p>complete online js course</p>
          <button>X</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>clear completed</button>
        </section>

        <section className='container mx-auto px-4'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>

        <section className='text-center'>drag and drop to reorder list</section>
      </main>

    </div>
  )
}

export default App;