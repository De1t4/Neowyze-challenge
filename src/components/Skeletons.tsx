import React from 'react';

export const SkeletonsCharacter = () => {
  return (
    <section className=' border-2 max-md:w-full  w-96 h-max flex flex-col bg-gray-900 p-4 rounded-lg justify-center items-center'>
      <h1 className='  bg-slate-600 w-full h-8 rounded-md animate-pulse'></h1>
      <div className=' w-[250px] h-[380px] animate-pulse rounded-md bg-slate-600 my-3'></div>
      <div className=' bg-slate-600 w-full h-4 rounded-md animate-pulse my-1'></div>
      <div className=' bg-slate-600 w-full h-4 rounded-md animate-pulse my-1'></div>
      <div className=' bg-slate-600 w-full h-4 rounded-md animate-pulse my-1'></div>

    </section>
  );
}

export const SkeletonFilms = () => {
  return (
    <figure className='w-60 shadow-[5px_5px_0px_0px_rgba(75 85 99)] h-50 border-[1px] border-gray-600 hover:border-blue  transition-all duration-300 p-6 bg-gradient-to-r from-slate-900 to-slate-800 m-auto flex rounded-md justify-center items-center flex-col'>
      <span className=' w-[150px] rounded-md h-[220px] mb-2 bg-slate-600 animate-pulse'></span>
      <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col text-center">
        <p className=' w-40 rounded-sm h-3 animate-pulse bg-slate-600'></p>
        <p className=' w-40 h-3 rounded-sm animate-pulse bg-slate-600'></p>
      </div>
    </figure>
  );
}
export const SkeletonPeople = () => {
  return (
    <>
    <figure className='p-4 max-md:p-3 flex flex-col justify-center items-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
        <div className=' h-[220px] w-[150px] max-md:w-full  rounded-sm animate-pulse bg-slate-600'></div>
        <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col justify-center items-center">
          <p className=' w-32 rounded-sm h-3 animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
        </div>
    </figure>
    <figure className='p-4 max-md:p-3 flex flex-col justify-center items-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
        <div className=' h-[220px] w-[150px] max-md:w-full  rounded-sm animate-pulse bg-slate-600'></div>
        <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col justify-center items-center">
          <p className=' w-32 rounded-sm h-3 animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
        </div>
    </figure>
    <figure className='p-4 max-md:p-3 flex flex-col justify-center items-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
        <div className=' h-[220px] w-[150px] max-md:w-full  rounded-sm animate-pulse bg-slate-600'></div>
        <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col justify-center items-center">
          <p className=' w-32 rounded-sm h-3 animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
        </div>
    </figure>
    <figure className='p-4 max-md:p-3 flex flex-col justify-center items-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
        <div className=' h-[220px] w-[150px] max-md:w-full  rounded-sm animate-pulse bg-slate-600'></div>
        <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col justify-center items-center">
          <p className=' w-32 rounded-sm h-3 animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
        </div>
    </figure>
    <figure className='p-4 max-md:p-3 flex flex-col justify-center items-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
        <div className=' h-[220px] w-[150px] max-md:w-full  rounded-sm animate-pulse bg-slate-600'></div>
        <div className=" text-gray-100 gap-y-2 mt-2  flex flex-col justify-center items-center">
          <p className=' w-32 rounded-sm h-3 animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
          <p className=' w-32 h-3 rounded-sm animate-pulse bg-slate-600'></p>
        </div>
    </figure>
    </>
  )
}
    