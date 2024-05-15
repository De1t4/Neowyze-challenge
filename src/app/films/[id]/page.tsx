'use client'
import { FilmProps } from '@/app/services/interface';
import { API, getIdFromURL, NOT_FOUND } from '@/app/utils/utils';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { SkeletonsCharacter } from '@/components/Skeletons';

const CharacterFilm = dynamic(() => import('@/components/CharacterFilm'))
const CardCharacterSingle = dynamic(() => import('@/components/Cards/CardSingleFilm'),
{ssr:false, loading:() => <SkeletonsCharacter/>}
)

const Page = () => {
  const { id } = useParams()
  const [film, setFilm] = useState<FilmProps>()
  const [showMore, setShowMore] = useState(false)

  useEffect(()=>{
    const fetchDataFilm = async () =>{
      try{
        const response = await fetch(`${API}/films/${id}/?format=json`)
        const data = await response.json()
        setFilm(data)
      }catch(error:any){
        console.error(error)
      }
    }

    fetchDataFilm()
  },[id])

  return (
    <main className=' text-gray-100 flex flex-col justify-center items-center p-12 bg-gray-800 min-h-screen'>
      {film?.detail == NOT_FOUND 
      ? <>
      <p className='font-StarJedi text-gold text-4xl text-cente'>i ve got a bad feeling about this.</p>
      <Link href={"/"}>
        <button className=' my-4 p-4 text-white rounded-md bg-blue font-semibold  border-2 transition-all duration-300 hover:scale-105 border-gray-900  m-auto'>Home</button>
      </Link>
      </>
      :<>
        <CardCharacterSingle title={film?.title} episode_id={film?.episode_id} director={film?.director}/>
        <Link href={"films/1/characters"}>Mas</Link>
        <button onClick={() => setShowMore(!showMore)} className=' my-4 p-4 rounded-md bg-blue font-semibold  border-2 transition-all duration-300 hover:scale-105 border-gray-900  m-auto'>More Characters</button>
        {showMore &&
        <section>
          <div className="bg-gray-900 rounded-lg p-4  flex justify-center items-center flex-col">
            <h1 className='text-center text-xl text-gold font-semibold mb-4'>Characters</h1>
            <ol className=' text-center  max-md:w-full  grid grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-3 gap-6 '>
              {film?.characters.map((URL, index)=>(
                <CharacterFilm key={index} ID_CHARACTER={getIdFromURL(URL)}/>
              ))
              }
            </ol>
          </div>
        </section>}
      </>}


    </main>
  );
}

export default Page;
