import { useState, useEffect } from 'react';
import { Staff } from './types';

const MOCKED_DATA = [
  {name: 'fede', lastName: 'ferrelli', age: 48, job: 'CFO', active: true}, 
  {name: 'libera', lastName: 'ferrelli fuster', age: 4, job: 'CEO', active: false},
  {name: 'pau', lastName: 'fuster', age: 35, job: 'CTO', active: true}
]


function App() {
const [staff, setStaff] = useState<Array<Staff>>([])

useEffect(() => {
  setStaff(MOCKED_DATA)
}, [])


  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-evenly pt-8 gap-4">
      {staff.map(person=>{

        const {name, lastName, active, age, job} = person
        return(
          <div key={person.name} className="w-11/12 p-2 flex flex-col border border-gray-200 rounded-md shadow-lg m-auto justify-center items-center sm:min-w-[250px] sm:max-w-[300px] hover:bg-gray-100/25 hover:shadow-xl duration-300 ease-in-out relative text-gray-800">
            
            <img className=" rounded-full w-[100px]" src={`https://i.pravatar.cc/150?img=${lastName}`} alt={`imagen para ${name}`}/>
            
            <h1 className="font-semibold">{job}</h1>
            
            <h2 className="font-light">{name} {lastName}</h2>
            
            <h2 className="font-light">{age}</h2>
            {active && <div className="absolute w-5 h-5 rounded-full bg-green-600/75 -top-2 -right-2  flex"><span className="w-4 h-4 rounded-full bg-green-600 m-auto animate-ping"></span></div>}
          
          </div>
        )
        })}
    </div>
  )
}

export default App
