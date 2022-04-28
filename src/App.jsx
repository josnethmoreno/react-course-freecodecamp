import { useState } from 'react'
import Card from './components/Card.jsx'
import Nav from './components/Nav.jsx'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className="container">
       <h1>Here is what our alumni say about freeCodeCamp:</h1>
       <Card 
        img='../../public/card/card-shawn.png'
        name='Shawn Wang'
        country='Singapore'
        profile='Software Engineer'
        enterprise='Amazon' 
        text='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'/>
        <Card 
        img='../../public/card/card-sara.png'
        name='Sarah Chima'
        country='Nigeria'
        profile='Software Engineer'
        enterprise='ChatDesk' 
        text='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'/>
        <Card 
        img='../../public/card/card-emma.png'
        name='Shawn Wang'
        country='Singapore'
        profile='Software Engineer'
        enterprise='Amazon' 
        text='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'/>
      </div>
    </div>
  )
}

export default App
