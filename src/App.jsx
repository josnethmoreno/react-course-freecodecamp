import { useState } from 'react'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const resetCounter = () =>{
    setCount(0);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <p className='App-Brand'>freeCodeCamp</p>
      </div>
      <div className='App-container'>
        <div className='App-counter'>
          <Counter 
            count={count} />
        </div>
        <div className='App-btn-group'>
          <Button 
            text='Click' 
            btnClick={true}
            handlerClick={handleClick} />
          <Button 
            text='Reset' 
            btnClick={false}
            handlerClick={resetCounter} />
        </div>
      </div>
    </div>
  )
}

export default App
