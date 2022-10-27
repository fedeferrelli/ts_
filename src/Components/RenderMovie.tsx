import React, { useState} from 'react';
import { ResultMovies } from '../types'

interface Prop {
    movieToShow: ResultMovies
}


function RenderMovie({movieToShow} : Prop) {

    
    const {id, poster_path, title, overview} = movieToShow;

    const [showOverview, setShowOverview] = useState<boolean>(false);
    const handleOnClickToShowOverview = () => {
        setShowOverview(!showOverview)
      }

    return (
        
        <div key={id} className="w-10/12 p-0 m-auto sm:w-[300px] border bg-slate-800/20 border-slate-800 rounded-[6px] shadow-lg mb-8 relative overflow-hidden hover:shadow-black/50 ease-in-out duration-300" onClick={()=>handleOnClickToShowOverview()}>
 <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`imagen para ${title}`}/>
          
         { showOverview && <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-800/90 flex py-2 px-3 text-slate-300 flex-col justify-center items-center text-center tracking-wide font-thin min-w-prose z-10" onClick={()=>handleOnClickToShowOverview()}>
         <div className="font-semibold text-slate-200 text-center text-xl my-4 tracking-wider">{title}</div>
         <div> {overview} </div> </div>}
          </div>

        
    )
}

export default RenderMovie
