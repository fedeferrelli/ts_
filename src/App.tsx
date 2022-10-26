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
    <div className="flex flex-col sm:flex-row justify-evenly pt-8 gap-4">
      {staff.map(person=>{
        return(
          <div key={person.name} className="w-11/12 p-2 flex flex-col border border-gray-200 rounded-md shadow-lg m-auto justify-center items-center sm:min-w-[250px] hover:bg-gray-100/25 hover:shadow-xl duration-300 ease-in-out relative">
            <img className=" rounded-full w-[100px]" src={`https://i.pravatar.cc/150?img=${person.lastName}`}/>
            <h1>{person.job}</h1>
            <h2>{person.name} {person.lastName}</h2>
            <h2>{person.age}</h2>
            {person.active && <span className="absolute w-6 h-6 rounded-full bg-green-600/25 -top-3 -right-3 animate-ping"></span>}
          </div>
        )
        })}
    </div>
  )
}

export default App
