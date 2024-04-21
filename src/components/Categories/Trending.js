import React from 'react';
import VideoList from './VideoList';
import CategoryHeader from './CategoryHeader';
import trendingIcon from './../../assets/trending-page-icon.svg';

const Trending = () => {

  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Trending'}
        subscribeBtn={false}
        icon={trendingIcon}
      />
      <VideoList info={null} categoryID={'0'} />
    </div>
  );
};

export default Trending;
