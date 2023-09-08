import React from 'react';

const SearchSkeleton = () => {
  return (
    <div className='w-full h-auto flex my-2 mx-5'>
      <div className='w-64 h-36 relative'>
        <div className='w-64 h-36 rounded-2xl bg-slate-300' />
      </div>
      <div className='w-3/4 flex justify-between pt-1'>
        <div className='w-5/6 px-3'>
          <h3 className='w-96 h-8 bg-slate-300 my-1'>
            {''}
          </h3>
          <div className='flex flex-col'>
            <h3 className=' bg-slate-300 h-4 mr-4 mt-1'>{''}</h3>
            <h3 className='bg-slate-300 h-4 mr-4 my-1'>
              {''}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSkeleton;
