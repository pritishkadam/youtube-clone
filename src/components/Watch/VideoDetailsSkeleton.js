import React from 'react';
import VideoDetailsHeaderSkeleton from './VideoDetailsHeaderSkeleton';

const VideoDetailsSkeleton = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='w-full h-8 bg-slate-300'>{''}</h2>
      <div className='w-full flex justify-between mb-2'>
        <VideoDetailsHeaderSkeleton />
      </div>
      <div
        id='body'
        className='bg-slate-200 w-full h-auto p-3 whitespace-pre-wrap rounded-lg font-roboto'
      >
        <h3 className='w-10/12 h-8 my-1 bg-slate-300'>{''}</h3>
        <h3 className='w-5/12 h-8 my-1 bg-slate-300'>{''}</h3>
        <h3 className='w-full h-4 my-1 bg-slate-300'>{''}</h3>
        <h3 className='w-full h-4 my-1 bg-slate-300'>{''}</h3>
        <br />
      </div>
    </div>
  );
};

export default VideoDetailsSkeleton;
