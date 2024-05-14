'use client'
import BtnChangePage from '@/components/BtnChangePage';
import { SkeletonPeople } from '@/components/Skeletons';
import { CharacterProps } from '@/app/services/interface';
import { API, MAX_PAGES, MIN_PAGES, ONE_NUMBER } from '@/app/utils/utils';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';


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

  return (
    <>
      <h1 className='font-StarJedi text-gold font-bold  text-center text-5xl mb-8'>Characters Star Wars</h1>
      <div className="flex justify-between w-[60rem] max-md:w-full mb-4 max-lg:w-full">
        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" value={ gender } onChange={(e) => setGender(e.target.value) } className=' border-[1px] rounded-md h-8 bg-gray-900 font-semibold mr-4 mb-4 text-gray-100 w-40 max-md:w-full'>
            <option value="all" className=''>All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="none">None</option>
            <option value="hermaphrodite">Hermaphrodite</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="eye-color">Eye Color</label>
          <select name="eye-color" id="eye-color" value={ eyesColor } onChange={(e) => setEyesColor(e.target.value) } className='border-[1px] rounded-md h-8 bg-gray-900 font-semibold mr-4 mb-4 text-gray-100 w-40 '>
            <option value="all">All</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="brown">Brown</option>
            <option value="blue-gray">Blue-gray</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="hazel">Hazel</option>
            <option value="black">Black</option>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="gold">Gold</option>
            <option value="white">White</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      {
        filteredPeople().length == 0 && <h1 className=' text-2xl font-semibold font-StarJedi'>People Don't Found</h1>
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

    </>
  );
}

export default Page;
