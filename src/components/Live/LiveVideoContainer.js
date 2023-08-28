import React from 'react';
import LiveVideoList from './LiveVideoList';

const LiveVideoContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row-dense auto-cols-fr gap-x-4 gap-y-10 mx-4 m-auto'>
      <LiveVideoList title={'Live Now'} videoType={'completed'} />
    </div>
  );
};

export default LiveVideoContainer;
