import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-screen  gap-2 items-center text-gray-100 p-12 bg-gray-800'>
      <h1 className=' text-center font-StarJedi text-gold font-bold text-5xl mb-4'>it s a trap, not found</h1>
      <Image width={300} height={300} alt='image-meme' src={"/meme.jpg"} className=' rounded-md'></Image>
      <Link href={"/"}>
        <button className=' border-2 border-gray-700 bg-blue p-2 rounded-lg font-semibold'>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
