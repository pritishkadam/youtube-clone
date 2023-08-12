import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const HomeContainer = () => {
  return (
    <div className='w-full px-2'>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default HomeContainer;
