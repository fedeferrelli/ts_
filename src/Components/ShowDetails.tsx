import React from "react";

import { ResultMovies } from "../types";

interface Props {
  detail: ResultMovies | undefined;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowDetail: (movieData: ResultMovies) => void;
}

function ShowDetails({ detail, setShowDetail, handleShowDetail }: Props) {
  return (
    <div>
      <div className="fixed bottom-0 right-1 left-1 h-1/2 sm:h-2/5 bg-slate-900 bg-gradient-to-br from-slate-900/50 to-black/75 m-auto rounded-t-md border border-slate-700/50 p-8 animate-wiggle overflow-auto p-3">
        <section className="flex flex-row">
          <div className="rounded-md hidden sm:flex sm:w-1/12 w-1/12 h-auto flex">
            <img
              className="mt-0 my-auto"
              src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
              alt={`imagen para ${detail?.title}`}
            />
          </div>

          <div className="max-w-prose font-thin px-6">
            <div className="flex  justify-left flex-row w-full mb-2">
              <img
                className="sm:hidden w-24"
                src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
                alt={`imagen para ${detail?.title}`}
              />
              <h1 className="text-2xl font-semibold ml-3 sm:ml-0 text-left">
                {detail?.title}{" "}
                <span className="block text-sm font-thin">
                  {detail?.vote_average} out of 10
                </span>
              </h1>
            </div>

            <p className="">{detail?.overview}</p>
          </div>
        </section>

        <div
          className="w-10 h-10 sm:border flex border-slate-400 text-slate-400 rounded-full absolute top-2 right-2 cursor-pointer"
          onClick={() => setShowDetail(false)}
        >
          {" "}
          <span className="m-auto text-xl font-semibold">X</span>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
