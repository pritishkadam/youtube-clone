import React from 'react';
import CategoryHeader from './CategoryHeader';
import VideoList from './VideoList';
import shoppingIcon from './../assets/shopping-page-icon.svg';
import videosConfig from './Home/videosData';

const Shopping = () => {
  const videos = videosConfig();

  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Shopping'}
        subscribeBtn={true}
        icon={shoppingIcon}
      />
      <VideoList info={videos} title={'Top Picks'} />
    </div>
  );
};

export default Shopping;
