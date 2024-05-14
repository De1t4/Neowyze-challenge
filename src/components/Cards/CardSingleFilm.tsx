import React from 'react';
import Image from 'next/image';

const CardSingleFilm = ({title, episode_id, director}:{title:string | undefined, episode_id: number | undefined, director: string | undefined}) => {
  return (
    <section className="flex  flex-col gap-4 items-center justify-center  bg-gray-900 p-4 rounded-lg max-md:w-full">
      <h1 className=' font-StarJedi text-center text-2xl text-gold font-semibold fos'>{title}</h1>
      <Image src="/starwars.jpg" width="300" height="300" alt="image film"/>
      <div className="flex justify-between items-center gap-10">
        <p>Episode: <span className=' text-gold font-semibold'>{episode_id}</span></p>
        <p>Director: <span className=' text-gold font-semibold'>{director}</span></p>
      </div>
  </section>
  );
}

export default CardSingleFilm;
