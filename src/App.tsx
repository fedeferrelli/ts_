import { useState } from 'react'

function App() {
const [number, setNumber] = useState(5)  

const handleOnClick = () =>{
  setNumber(number+1)
}

  return (
    <div>
     <h1>{number}</h1>
     <button onClick={handleOnClick}> Click Me</button>
    </div>
  )
}

export default App
