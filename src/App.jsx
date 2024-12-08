import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='text-red-600'>Vite + React</h1>
      <button className='btn btn-secondary'>hi</button>
    
    </>
  )
}

export default App
