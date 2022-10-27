import { useState, useEffect } from 'react';
import { INITIAL_DATA } from './assets/appi';
import { Movies, ResultMovies } from './types';
import RenderMovie from './Components/RenderMovie';


//import { Staff } from './types';

/* const MOCKED_DATA = [
  {name: 'fede', lastName: 'ferrelli', age: 48, job: 'CFO', active: true}, 
  {name: 'libera', lastName: 'ferrelli fuster', age: 4, job: 'CEO', active: false},
  {name: 'pau', lastName: 'fuster', age: 35, job: 'CTO', active: true}
] */


function App() {
//const [staff, setStaff] = useState<Array<Staff>>([])


const [movieData, setMovieData] = useState<Movies>(INITIAL_DATA);



/* useEffect(() => {
  setStaff(MOCKED_DATA)
}, []) */


  return (
    /* <div className="flex flex-col sm:flex-row sm:flex-wrap justify-evenly pt-8 gap-4">
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
    </div> */

    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:p-8 gap-2 bg-slate-900 min-h-screen text-white bg-gradient-to-br from-slate-900/50 to-black/75">

      {movieData.results.map(movie =>{
        return(

<RenderMovie movieToShow={movie} />
          /* <div key={movie.id} className="w-10/12 py-2 px-3 m-auto sm:w-[300px] border bg-slate-800/20 border-slate-700 rounded-[6px] shadow-lg mb-8 relative overflow-hidden hover:shadow-black/50 ease-in-out duration-300" onClick={()=>handleOnClickToShowOverview()}>
 <img className=" rounded-full w-full h-[350px]" src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt={`imagen para ${movie.title}`}/>
<div className="w-full h-[350px] bg-slate-700/10 text-center text-slate-600">IMAGE</div>
          <div className="font-semibold text-slate-200 text-center text-xl my-4 tracking-wider">{movie.title}</div>
         { showOverview && <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-800/95 flex py-2 px-3 text-slate-300 justify-center items-center text-center tracking-wide font-thin min-w-prose z-10" onClick={()=>handleOnClickToShowOverview()}>{movie.overview} </div>}
          </div>
          */
        )
        
      })}

    </div> 

    
  )
}

export default App
