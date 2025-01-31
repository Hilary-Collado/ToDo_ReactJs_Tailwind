import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import TodoComputed from './Components/TodoComputed'
import TodoFilter from './Components/TodoFilter'
import Footer from './Components/Footer'

const initialStatesTodos = [
  {
    id: 1,
    title: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: 3,
    title: '10 minutes meditation',
    completed: false,
  }
]


const App = () => {
  const [todos, setTodos] = useState(initialStatesTodos)

  const createTodo = (title) => {
    
    const newTodo ={
      id: todos.length + 1,
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
      // {...todos} => clonacion de los todos existentes, {newTodos} => nuevos todos
  
  return (
    <div className="bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <Header />

      <main className='container mx-auto px-4 mt-8'>

        <TodoCreate createTodo={createTodo}/>
      
        <TodoList todos={todos}/> 

        <TodoFilter/>

      </main>

        <Footer/>
        
    </div>
  )
}

export default App;