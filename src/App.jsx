import { useState } from 'react'
import './App.css'
import luna from '../public/images/icon-moon.svg'

import circulo from '../public/images/icon-cross.svg'
import Header from './Components/Header'

const App = () => {
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <Header/>

      <main className='container mx-auto px-4 mt-8'>
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