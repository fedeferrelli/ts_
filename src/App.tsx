import { useState, useEffect } from 'react'

const MOCKED_DATA = [
  {name: 'fede', lastName: 'ferrelli', age: 48, job: 'CFO', active: true}, 
  {name: 'libera', lastName: 'ferrelli fuster', age: 4, job: 'CEO', active: false},
  {name: 'pau', lastName: 'fuster', age: 35, job: 'CTO', active: true}
]

interface Staff {
  name: string, 
  lastName: string, 
  age: number, 
  job: string, 
  active: boolean
}



function App() {
const [staff, setStaff] = useState<Array<Staff>>([])

useEffect(() => {
  setStaff(MOCKED_DATA)
}, [])


  return (
    <div>
      {staff.map(person=>{
        return(
          <div key={person.name}>
            <img src={`https://i.pravatar.cc/150?img=${person.lastName}`}/>
            <h1>{person.job}</h1>
            <h2>{person.name} {person.lastName}</h2>
            {person.active && <h2>Activo</h2>}
          </div>
        )
        })}
    </div>
  )
}

export default App
