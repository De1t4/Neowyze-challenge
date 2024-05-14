import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { getIdFromURL } from '@/app/utils/utils';
import { CardCharacterProps } from '@/app/services/interface';

const CardCharacter:React.FC<CardCharacterProps> = ({url, name, eye_color, gender}) => {
  return (
    <li className='p-2 text-center transition-all duration-400  rounded-md bg-gradient-to-r from-slate-900 to-slate-800 border-[1px] hover:scale-105 border-gray-700 hover:border-blue'>
      <Link href={`/characters/${getIdFromURL(url)}`}>
        <Image priority src={'/stormtrooper.jpg'} alt={'star-wars image'} className=' object-cover mt-2 rounded-md m-auto h-auto transition-all duration-300 cursor-pointer hover:brightness-75' width={150} height={200}/>
        <p className=' text-sm'>{name}</p>
        {eye_color !== "unknown" && <p className='text-sm'>{eye_color}</p>}
        {gender !== "none" && <p className='text-sm'>{gender}</p> && gender !== "n/a" && <p className='text-sm'>{gender}</p>}  
      </Link>
    </li>
  );
}

export default CardCharacter;
