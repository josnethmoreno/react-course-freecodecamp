import { useState } from 'react'
import { evaluate } from 'mathjs'
import logo from './logo.svg'
import Calculator from './components/Calculator.jsx'
import './App.css'

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val)
  }

  const clearInput = val => {
    setInput('')
  }

  const evalInput = val => {
    if(!input) return 
    setInput(evaluate(input))
  }

  return (
    <div className="App">
      <div className="App-logo">
        <img 
          src={logo}
          className="Logo" 
          alt="Logo ReactJS" />
      </div>
      <div className="container">
        <Calculator 
          input={input}
          addInput={addInput}
          clearInput={clearInput}
          evalInput={evalInput}/>
      </div>
    </div>
  )
}

export default App
