import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTodo from './components/CreateTodo/CreateTodo'
import EditTodo from './components/EditTodo/EditTodo'
import TodosList from './components/TodosList/TodosList'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodosList />} />
        <Route path='/create' element={<CreateTodo />} />
        <Route path='edit/:id' element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
 
  )
}
