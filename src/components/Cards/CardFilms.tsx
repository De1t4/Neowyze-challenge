import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { CardFilmProps } from '@/app/services/interface';

const CardFilms:React.FC<CardFilmProps> = ({index, episode_id, title}) => {
  return (
    <figure className='w-60 shadow-[5px_5px_0px_0px_rgba(75 85 99)] h-50 border-[1px] border-gray-600 hover:border-blue  transition-all duration-300 p-4 bg-gradient-to-r from-slate-900 to-slate-800 m-auto flex rounded-md justify-center items-center flex-col' key={index}>
      <Link href={`/films/${index+1}`} className=''>
        <Image src={'/starwars.jpg'} alt={'star-wars image'} className='my-2 rounded-md transition-all duration-300 cursor-pointer hover:brightness-75' width={150} height={200}/>
      </Link>
      <div className=" text-gray-100  flex flex-col text-center">
        <h1 className=' text-sm'>{title}</h1>
        <p>{episode_id}</p>
      </div>
  </figure>
  );
}

export default CardFilms;
