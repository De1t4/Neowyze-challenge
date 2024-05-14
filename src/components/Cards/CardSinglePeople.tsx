import React from 'react';
import Image from 'next/image';
import { DARTH_CHARACTER } from '@/app/utils/utils';

interface CardSinglePeople{
  birth_year: string | undefined
  hair_color: string | undefined
  name: string | undefined
  skin_color: string | undefined
  mass: number | string | undefined
  eye_color: string | undefined
  height: string | undefined
}

const CardSinglePeople:React.FC<CardSinglePeople>= ({birth_year, hair_color,name, skin_color, mass, eye_color, height}) => {
  return (
    <section className=' w-96 h-max border-[1px] border-gray-500 flex flex-col bg-gray-900 p-4 rounded-lg  justify-center items-center'>
      <h1 className=' text-gold font-semibold text-2xl text-center font-StarJedi'>{name}</h1>
      <div className=" my-4">
        <Image  src={'/stormtrooper.jpg'} alt={'star-wars image'} className=' rounded-lg transition-all duration-300 cursor-pointer hover:brightness-75' width={250} height={200}/>
      </div>
      <div className=" flex  justify-between  gap-14 text-sm">
        <span>
          <p className=' text-gray-300'>Eye color: <span className=' text-gold font-semibold'>{eye_color}</span></p>
          {birth_year !== "unknown" && <p className=' text-gray-300'>Birth Year: <span className=' text-gold font-semibold'>{birth_year }</span></p>}
          {hair_color !== "none" && <p className=' text-gray-300'>Hair Color: <span className=' text-gold font-semibold'>{hair_color}</span></p> && hair_color !== "n/a" && <p className=' text-gray-300'>Hair Color: <span className=' text-gold font-semibold'>{hair_color}</span></p> && hair_color !== "none" && <p className=' text-gray-300'>Hair Color: <span className=' text-gold font-semibold'>{hair_color}</span></p> }
        </span>
        <span>
          <p className=' text-gray-300'>Height: <span className=' text-gold font-semibold'>{height}</span></p>
          <p className=' text-gray-300'>Skin Color: <span className=' text-gold font-semibold'>{skin_color}</span></p>
          {mass !== "unknown" && <p className=' text-gray-300'>Mass: <span className=' text-gold font-semibold'>{mass}</span></p>}
        </span>
      </div>
      <p className=' text-xl font-StarJedi text-red font-bold'>{name == DARTH_CHARACTER && "i am your father!"}</p>
    </section>
  );
}

export default CardSinglePeople;
