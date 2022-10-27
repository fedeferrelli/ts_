import { useState, useEffect } from 'react';
import { INITIAL_DATA } from './assets/appi';
import { Movies } from './types';
import RenderMovie from './Components/RenderMovie';
import { fetchData } from '../src/assets/appi'
import Loading from './Components/Loading';

function App() {


const [movieData, setMovieData] = useState<Movies | undefined>();
const [pageNumber, setPageNumber] = useState<number>(1);
const [showLoading, setShowLoading] = useState<boolean>(true);


useEffect(() => {
  const getData = async () => {
    const dataApi = await fetchData.fetch(pageNumber);

    setMovieData(dataApi);
    setShowLoading(false)
  }
  getData()
}, [pageNumber])

const nextPage = () => {
  setShowLoading(true)
  setPageNumber(pageNumber + 1)
}

const prevPage = () => {
  if(pageNumber === 1) {return}
  else setPageNumber(pageNumber - 1)
}

  return (
  

    <div className="sm:p-8 gap-2 bg-slate-900 min-h-screen text-white bg-gradient-to-br from-slate-900/50 to-black/75">


      { !showLoading ? 
      
      <section>

      <div className="w-full flex flex-col justify-center sm:gap-4 sm:flex-row sm:flex-wrap">
      
      {typeof(movieData) !== 'undefined' && movieData.results.map(movie =>{
        return(

          <div key={movie.id}>
          <RenderMovie movieToShow = {movie} />
          </div>          
        )        
      })}
      
      </div>
  
          <section className="text-white m-auto flex-row justify-center flex pb-4">
            <div className="border border-slate-700 py-2 px-6 rounded-l-full mr-1 cursor-pointer" onClick={()=>prevPage()}> - </div>
            <div className="text-xl border border-slate-700 py-2 px-6">{pageNumber}</div>
            <div className="border border-slate-700 py-2 px-6 rounded-r-full ml-1 cursor-pointer" onClick={()=>nextPage()}> + </div>
          </section>
          </section>
:
          <Loading/>

        }

    </div> 

    
  )
}

export default App
