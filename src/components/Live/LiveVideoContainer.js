import React from 'react';
import LiveVideoList from './LiveVideoList';

const LiveVideoContainer = (props) => {
    const {title, videoType} = props
  return (
    <>
    <h3 className='text-xl m-4 font-medium'>{title}</h3>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row-dense auto-cols-fr gap-x-4 gap-y-5 mx-4 m-auto'>
      <LiveVideoList videoType={videoType} />
    </div>
    <hr className='h-1 bg-slate-300 my-8' />
    </>
  );
};

export default LiveVideoContainer;
