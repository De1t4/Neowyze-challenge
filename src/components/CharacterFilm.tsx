import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { API } from '@/app/utils/utils';
import { CharacterProps } from '@/app/services/interface';

const CharacterFilm = ({ID_CHARACTER}:{ID_CHARACTER: string}) => {
  const [character, setCharacter] = useState<CharacterProps>()

  useEffect(()=>{
    const fetchCharacterFilm = async () =>{
      try{
        const response = await fetch(`${API}/people/${ID_CHARACTER}`)
        const data = await response.json()
        setCharacter(data)
      }catch(error:any){
        console.log(error)
      }
    } 

    fetchCharacterFilm()
  },[])

  return (
    <li className=' border-[1px] rounded-md bg-gray-800  border-gray-600 hover:scale-105 transition-all duration-300  p-1'>
      <Link href={`/characters/${ID_CHARACTER}`} className='flex flex-col justify-center items-center'>
        <Image width={100} height={100} src={"/stormtrooper.jpg"} className=' rounded-md mb-1' alt={'image-character'} ></Image>
        <p className='  text-sm'>{character?.name}</p>
      </Link>
    </li>
  );
}

export default CharacterFilm;
