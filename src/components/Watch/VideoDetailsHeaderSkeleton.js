import React from 'react';

const VideoDetailsHeaderSkeleton = () => {
  return (
    <>
      <div id='start' className='flex items-center my-1'>
        <div className='w-10 h-10 bg-slate-300 rounded-full self-center' />
        <div id='channel-details' className='flex flex-col mx-2 my-1'>
          <h2 className='w-40 h-4 bg-slate-300 my-1'>{''}</h2>
          <h3 className='w-14 h-3 bg-slate-300'>{''}</h3>
        </div>
        <div id='subscribe-btn' className='self-center rounded-full w-10 h-4' />
      </div>
      <div id='end' className='flex gap-4'>
        <div
          id='like-dislike-btn'
          className='flex rounded-full h-8 self-center mx-1 bg-slate-100'
        >
          <button
            id='like-btn'
            className='w-14 h-full self-center rounded-l-full border-r-2 bg-slate-300'
          />
            
          <button
            id='dislike-btn'
            className='w-14 h-full self-center rounded-r-full bg-slate-300'
          />
          
        </div>
        <div
          id='share-btn'
          className='flex rounded-full h-8 self-center bg-slate-300'
        >
          <button id='like-btn' className='w-6 h-6 flex px-2 py-2 self-center mx-1' />
        </div>
      </div>
    </>
  );
};

export default VideoDetailsHeaderSkeleton;
