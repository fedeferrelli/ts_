import React from 'react'

function Loading() {
    return (
        <div className="w-full flex h-screen">

        <div className="w-10 h-10 rounded-full animate-spin m-auto relative flex">
            <div className="absolute w-4 h-4 rounded-full bg-slate-700 animate-ping"></div>
            <div className="absolute w-4 h-4 rounded-full bg-slate-700 bottom-0 animate-ping"></div>
            <div className="absolute w-4 h-4 rounded-full bg-slate-700 right-0 animate-ping"></div>
            <div className="absolute w-4 h-4 rounded-full bg-slate-700 bottom-0 right-0 animate-ping"></div>

            <div className="w-4 h-4 rounded-full bg-slate-600 m-auto animate-ping -z-10"></div>


        </div>
            
        </div>
    )
}

export default Loading 
