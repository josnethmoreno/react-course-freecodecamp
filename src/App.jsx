import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          className="App-logo" 
          src={logo} 
          alt="Logo ReactJs" />
      </div>
      <div className="container">
        <h1 className="App-h1">My tasks!</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
