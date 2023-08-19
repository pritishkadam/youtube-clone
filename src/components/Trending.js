import React from 'react';
import VideoList from './VideoList';
import CategoryHeader from './CategoryHeader';
import trendingIcon from './../assets/trending-page-icon.svg';
import videosConfig from './Home/videosData';

const Trending = () => {

  const videos = videosConfig(); 

  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Trending'}
        subscribeBtn={false}
        icon={trendingIcon}
      />
      <VideoList info={videos} />
    </div>
  );
};

export default Trending;
