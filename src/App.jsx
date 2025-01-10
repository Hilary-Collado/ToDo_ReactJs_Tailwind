import { useState } from 'react'
import './App.css'
import circulo from '../public/images/icon-cross.svg'
import Header from './Components/Header'
import CrossIcon from './Components/icons/CrossIcon'

const App = () => {
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <Header />

      <main className='container mx-auto px-4 mt-8'>
      {/* [&>article]:px-4 => le aplica un padding de 4 a todos los article que sean hijos de un div que tenga la clase article */}
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className='flex gap-4 py-4 border-b border-b-gray-400'>

            <button className='rounded-full border-2 w-5 h-5 inline-block flex-none'></button>

            <p className='text-gray-600 grow'>complete online js course</p>

            <button className='flex-none'><CrossIcon /></button>
          </article>

          <article className='flex gap-4 py-4 border-b border-b-gray-400'>

            <button className='rounded-full border-2 w-5 h-5 inline-block flex-none'></button>

            <p className='text-gray-600 grow'>complete online js course</p>

            <button className='flex-none'><CrossIcon /></button>

          </article>

          <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className='text-gray-400'>clear completed</button>
          </section>
        </div>

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