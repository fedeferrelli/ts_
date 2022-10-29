import React, { useState} from 'react';
import { ResultMovies } from '../types'

interface Prop {
    movieToShow: ResultMovies,
    handleShowDetail: (movieData: ResultMovies) => void
}


function RenderMovie({movieToShow, handleShowDetail} : Prop) {

    
    const {id, poster_path, title} = movieToShow;

   

    return (
        
        <div key={id} className="w-full m-auto sm:w-[300px] border bg-slate-800/20 border-slate-600 rounded-[6px] shadow-lg mb-8 relative overflow-hidden hover:shadow-black/50 ease-in-out duration-300" onClick={()=>handleShowDetail(movieToShow)}>
 <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`imagen para ${title}`}/>
          
         

          </div>

        
    )
}

export default RenderMovie
