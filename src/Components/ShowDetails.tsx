import React from 'react'

import { Movies, ResultMovies } from '../types';



interface Props {
    detail: ResultMovies | undefined,
    setShowDetail: React.Dispatch<React.SetStateAction<boolean>>,
    handleShowDetail: (movieData: ResultMovies) => void

}

function ShowDetails( {detail, setShowDetail, handleShowDetail}: Props ) {
/*     const {id, poster_path, title, overview} = detail; */
    return (
        <div onClick={()=>setShowDetail(false)} className="fixed bottom-0 right-1 left-1 h-1/2 sm:h-2/5 bg-black/95 m-auto rounded-t-md border border-slate-700/50 p-8 animate-wiggle overflow-auto p-3">
          
          <section className="flex flex-row">
              <div className="rounded-md hidden sm:flex sm:w-1/12 w-1/12 h-auto flex">
              <img className="m-auto "  src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`} alt={`imagen para ${detail?.title}`}/>
              </div>

              <div className="max-w-prose font-thin px-6">

              <div className="flex  justify-left flex-row w-full mb-2">
              <img className="sm:hidden w-24"  src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`} alt={`imagen para ${detail?.title}`}/>
              <h1 className="text-2xl font-semibold m-auto ml-4">{detail?.title}</h1>
              </div>    

          
          <p >{detail?.overview}</p></div>
          </section>
        </div>
    )
}

export default ShowDetails
