import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

return (
  <main className=" flex flex-col min-h-screen  gap-2 items-center text-gray-100 px-12 py-6 bg-gray-800">
    <h1 className=' font-StarJedi text-gold font-bold uppercase text-5xl mb-4'>Star Wars</h1>
    <div className=" flex max-md:flex-col gap-10 mt-4  ">
      <Link href={`/films`} className=' h-max'>
        <figure className='w-80 h-96 shadow-[5px_5px_0px_0px_rgba(75 85 99)] h-50 border-[1px] border-gray-600 hover:border-blue transition-all duration-300 p-4 bg-gradient-to-r from-slate-900 to-slate-800 m-auto flex rounded-md justify-center items-center flex-col' >
            <Image src={'/starwars.jpg'} alt={'star-wars image'} className='my-2 rounded-md transition-all duration-300 cursor-pointer hover:brightness-75' width={200} height={200}/>
          <div className=" text-gray-100  flex flex-col text-center">
            <h1 className=' text-xl uppercase text-gold font-semibold'>Films</h1>
          </div>
        </figure>
      </Link>
      <Link href={`/characters`} className='h-max'>
        <figure className='w-80 h-96  shadow-[5px_5px_0px_0px_rgba(75 85 99)] h-50 border-[1px] border-gray-600 hover:border-blue  transition-all duration-300 p-4 bg-gradient-to-r from-slate-900 to-slate-800 m-auto flex rounded-md justify-center items-center flex-col'>
          <Image src={'/stormtrooper.jpg'} alt={'star-wars image'} className='my-2 rounded-md transition-all duration-300 cursor-pointer hover:brightness-75' width={200} height={200}/>
          <h1 className=' text-xl uppercase text-gold font-semibold'>Characters</h1>
        </figure>
      </Link>
    </div>

  </main>
  )
}
