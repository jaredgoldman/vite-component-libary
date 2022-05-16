import React from 'react'
import Button from './components/Button'
import './App.css'

function App(): JSX.Element {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="App">
      <Button onClick={handleClick} label="Click Me!" />
    </div>
  )
}

export default App
