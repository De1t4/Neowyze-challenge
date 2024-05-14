'use client'
import React, { useEffect, useState } from 'react';
import { InfoFilms } from '../services/interface';
import { API } from '../utils/utils';
import dynamic from 'next/dynamic';
import { SkeletonFilms } from '@/components/Skeletons';


const CardFilms = dynamic(() => import('@/components/Cards/CardFilms'), 
{ ssr: false, 
loading: () => <SkeletonFilms/>})

const Page = () => {
  const [films, setFilms] = useState<InfoFilms>()
  const fetchData = async () =>{
    try{
    const response = await fetch(`${API}/films/?format=json`)
    const data = await response.json()
    setFilms(data)
    }catch (error:any){
      console.error(error)
    }
  } 

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <main className='bg-gray-800 min-h-screen px-12 py-6'>
      <h1 className=' font-StarJedi text-gold font-bold  text-center text-5xl mb-8'>Films Star Wars</h1>
      <section className="grid grid-cols-3 max-md:grid-cols-1  flex-col items-center gap-y-10 justify-between  ">
        {films?.results.map((film, index)=>(
          <CardFilms index={index} episode_id={film.episode_id} title={film.title}  />
        ))
        }
      </section>
    </main>
  );
}

export default Page;
