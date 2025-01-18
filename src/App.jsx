import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import TodoComputed from './Components/TodoComputed'
import TodoFilter from './Components/TodoFilter'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <Header />

      <main className='container mx-auto px-4 mt-8'>

        <TodoCreate/>
        
        <TodoList/>

        {/* <TodoComputed /> */}

        <TodoFilter/>

      </main>

        <Footer/>
        
    </div>
  )
}

export default App;