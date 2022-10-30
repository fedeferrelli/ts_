import React from "react";

interface Props {
  pageNumber: number;
}

function Loading({ pageNumber }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center align-middle h-screen text-slate-200 gap-2">
      <h2 className="m-auto mb-4 font-light">Cargando</h2>

      <div className="w-10 h-10 rounded-full animate-spin m-auto relative flex m-auto my-0">
        <div className="absolute w-4 h-4 rounded-full bg-slate-700 animate-ping"></div>
        <div className="absolute w-4 h-4 rounded-full bg-slate-700 bottom-0 animate-ping"></div>
        <div className="absolute w-4 h-4 rounded-full bg-slate-700 right-0 animate-ping"></div>
        <div className="absolute w-4 h-4 rounded-full bg-slate-700 bottom-0 right-0 animate-ping"></div>

        <div className="w-4 h-4 rounded-full bg-slate-600 m-auto animate-ping -z-10"></div>
      </div>
      <h1 className="m-auto mt-4 text-xl font-semibold">Página {pageNumber}</h1>
    </div>
  );
}

export default Loading;
