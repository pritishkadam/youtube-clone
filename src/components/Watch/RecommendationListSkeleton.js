import React from 'react';

const RecommendationListSkeleton = () => {
  return (
    <div id='list-container' className='w-10/12 flex flex-col my-2 font-roboto ml-10'>
      {Array(20)
        .fill('')
        .map((el, index) => (
          <RecommendationSkeleton key={index} />
        ))}
    </div>
  );
};

const RecommendationSkeleton = () => {
  return (
    <div className='w-full h-auto flex mb-4 font-roboto'>
      <div className='w-48 relative'>
        <div className='w-48 h-20 rounded-2xl bg-slate-300' />
      </div>
      <div className='w-64 flex justify-start pt-1'>
        <div className='w-full mx-2 text-left'>
          <h3 className='w-5/6 h-4 bg-slate-300 text-left mb-1'>{''}</h3>
          <h3 className='w-1/4 h-3 bg-slate-300 my-1'>{''}</h3>
          <h3 className='w-1/2 h-3 bg-slate-300'>{''}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecommendationListSkeleton;
