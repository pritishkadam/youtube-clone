import React, { useState } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import videosConfig from './videosData';

const HomeContainer = () => {
  const [category, setCategory] = useState();
  const videos = videosConfig();
  return (
    <div className='w-full mx-auto'>
      <ButtonList setCategory={setCategory} />
      <VideoContainer info={videos} />
    </div>
  );
};

export default HomeContainer;
