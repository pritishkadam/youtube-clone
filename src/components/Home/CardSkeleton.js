import React from 'react';

const CardSkeleton = () => {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-44 rounded-2xl bg-slate-300' />

      <div className='flex justify-start pt-2'>
        <div className='w-10 h-10 mr-2 self-start rounded-full bg-slate-300' />

        <div className='w-5/6'>
          <h3 className='line-clamp-2 font-semibold leading-5 text-base w-11/12 h-5 bg-slate-300 my-1'>{''}</h3>
          <h3 className='line-clamp-2 leading-5 text-sm text-[#606060] w-1/2 h-4 bg-slate-300 my-1'>{''}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
