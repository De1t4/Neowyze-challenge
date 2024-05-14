import React from 'react';
import { MAX_PAGES, MIN_PAGES } from '@/app/utils/utils';

interface BtnChangeProps{
  page: number;
  prevPage: () => void
  nextPage: () => void
}

const BtnChangePage:React.FC<BtnChangeProps> = ({page,prevPage,nextPage}) => {
  return (
    <div>
      <div className="flex gap-4">
        {page !== MIN_PAGES && <button onClick={prevPage} className='flex justify-center items-center border-[1px] rounded-md mt-4 p-2 w-10 bg-gray-900'>{"<"}</button>}
        <p className=' border-[1px] mt-4 p-2 w-10 text-center bg-gray-900 rounded-md'>{page}</p>
        {page !== MAX_PAGES && <button onClick={nextPage} className='flex justify-center items-center border-[1px] rounded-md mt-4 p-2  w-10 bg-gray-900'>{">"}</button>}
      </div>
    </div>
  );
}

export default BtnChangePage;
