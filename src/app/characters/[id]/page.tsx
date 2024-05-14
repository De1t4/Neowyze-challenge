'use client'
import { CharacterProps } from '@/app/services/interface';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { NOT_FOUND } from '@/app/utils/utils';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SkeletonsCharacter } from '@/components/Skeletons';

const CardPeople = dynamic(() => import('@/components/Cards/CardSinglePeople'), 
{ ssr: false, 
loading: () => <SkeletonsCharacter/>})

const Page = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState<CharacterProps>()

  useEffect(()=>{
      fetchCaracters()
  },[id])

  const fetchCaracters = async () =>{
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`)
      const data = await response.json()
      setCharacter(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="text-gray-100 max-md:p-6 flex flex-col justify-center items-center p-12 bg-gray-800 min-h-screen">
      {character?.detail == NOT_FOUND 
      ? <>
      <p className='font-StarJedi text-gold text-4xl text-center'>i ve got a bad feeling about this.</p>
      <Link href={"/"}>
        <button className=' my-4 p-4 text-white rounded-md bg-blue font-semibold  border-2 transition-all duration-300 hover:scale-105 border-gray-900  m-auto'>Home</button>
      </Link>
      </>
      : 
        <CardPeople 
        birth_year={character?.birth_year} 
        hair_color={character?.hair_color} 
        name={character?.name} 
        skin_color={character?.skin_color} 
        mass={character?.mass} 
        eye_color={character?.eye_color} 
        height={character?.height}/>
      }
    </main>
  );
}

export default Page;
