import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=' text-red  font-StarJedi font-semibold text-xl bg-gray-900 h-20 p-8 flex justify-between items-center gap-8'>
      <div className=" gap-4">
        <Link className='brightness-150 cursor-pointer hover:scale-105 transition-all duration-300' href={'/'}>Home</Link>
      </div>
      <div className=" flex gap-4">
        <Link className='brightness-150 cursor-pointer hover:scale-105 transition-all duration-300' href={'/films'}>films</Link>
        <Link className='brightness-150 cursor-pointer hover:scale-105 transition-all duration-300' href={'/characters'}>characters</Link>
      </div>
    </nav>
  );
}

export default Navbar;
