'use client'
import BtnChangePage from '@/components/BtnChangePage';
import { SkeletonPeople } from '@/components/Skeletons';
import { CharacterProps } from '@/app/services/interface';
import { API, MAX_PAGES, MIN_PAGES, ONE_NUMBER } from '@/app/utils/utils';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import FilterPeople from '@/components/FilterPeople';


const CardPeople = dynamic(() => import('@/components/Cards/CardCharacter'), 
{ ssr: false, 
loading: () => <SkeletonPeople/>})

const Page = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [page, setPage] = useState<number>(1)
  const [nextCharacterId, setNextCharacterId] = useState<number>(1);
  const [gender, setGender] = useState<string>("all");
  const [eyesColor, setEyesColor] = useState<string>("all");

  useEffect(()=>{
    if(page <= MAX_PAGES ){
      fetch(`${API}/people/?page=${page}&format=json`)
      .then((response)=> response.json())
      .then((json)=>{
        setCharacters(json['results'])
      }).catch((error:any)=>console.log(error))
    }
  },[page])

  const filteredPeople = ():CharacterProps[] =>{

    let filterCharacters = characters

    if(gender !== "all"){
      filterCharacters =  filterCharacters.filter((a)=> a.gender === gender)
    }

    if(eyesColor !== "all"){
       filterCharacters = filterCharacters.filter((a) => a.eye_color === eyesColor)
    }
    return filterCharacters
  }

  const nextPage = () =>{
    if(page < MAX_PAGES){
      setPage(page+ONE_NUMBER)
      setNextCharacterId(nextCharacterId+10)
    }
  }
  
  const prevPage = () =>{
    if(page > MIN_PAGES){
      setPage(page - ONE_NUMBER)
      setNextCharacterId(nextCharacterId-10)
    }
  }

  const getValueGender = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setGender(e.target.value)
  }

  const getEyesColorValue = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setEyesColor(e.target.value)
  }


  return (
    <section className='text-gray-100 flex min-h-screen flex-col items-center  gap-4 px-12 py-6  bg-gray-800'>
      <h1 className='font-StarJedi text-gold font-bold  text-center text-5xl mb-8'>Characters Star Wars</h1>
      <FilterPeople getValueGender={getValueGender} getEyesColorValue={getEyesColorValue}/>
      {
        filteredPeople().length == 0 && <h1 className=' lowercase text-2xl font-semibold font-StarJedi'>People Dont Found</h1>
      }
      <section className=" w-[60rem] max-lg:w-full ">
        <ol className='grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2  gap-8'>
            {filteredPeople().map((character, index)=>(
              <CardPeople key={index} url={character.url} name={character.name} eye_color={character.eye_color} gender={character.gender} />
            ))}
            {
              filteredPeople().length == 0 &&<SkeletonPeople></SkeletonPeople>
            }
        </ol>
      </section>

      <BtnChangePage page={page} prevPage={prevPage} nextPage={nextPage}/>

    </section>
  );
}

export default Page;
