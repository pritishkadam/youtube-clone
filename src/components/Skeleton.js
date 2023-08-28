import React from 'react';

const Skeleton = () => {
  return (
    <div className='w-full h-auto flex my-2 mx-5'>
      <div className='w-64 h-44 relative rounded-2xl bg-slate-300 mb-2' />
      <div className='w-3/4 flex justify-between pt-1'>
        <div className='w-5/6 px-3'>
          <h3 className='line-clamp-2 leading-6 text-lg w-11/12 h-5 bg-slate-300 my-1'>
            {''}
          </h3>
          <div className='flex flex-col'>
            <h3 className='flex justify-start line-clamp-2 leading-5 text-xs text-[#606060] mr-4 my-1'>
              <span className='w-8/12 h-5 bg-slate-300 mr-2' />
              <span />
            </h3>
            <h3 className='line-clamp-2 leading-5 text-xs text-[#606060] mr-4 w-10/12 h-10 bg-slate-300 my-1'>
              {''}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
