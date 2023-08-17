import React, { useState } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const HomeContainer = () => {
  const [category, setCategory] = useState();
  return (
    <div className='w-full mx-auto'>
      <ButtonList setCategory={setCategory} />
      <VideoContainer />
    </div>
  );
};

export default HomeContainer;
