import React, { useState } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const HomeContainer = () => {
  const [categoryID, setCategoryID] = useState('0');
  return (
    <div className='w-full mx-auto'>
      <ButtonList categoryID={categoryID} setCategoryID={setCategoryID} />
      <VideoContainer categoryID={categoryID} />
    </div>
  );
};

export default HomeContainer;
