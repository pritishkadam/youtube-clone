import React from 'react';
import GamingIcon from './../../assets/channels/best_of_youtube/gaming.svg';
import CategoryHeader from './CategoryHeader';
import VideoContainer from './../Home/VideoContainer';

const Gaming = () => {
  const details = '93.7M subscribers';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Gaming'}
        details={details}
        subscribeBtn={true}
        icon={GamingIcon}
      />
      <div className='my-4'>
        <h3 className='mx-5 my-2 font-semibold'>Trending videos</h3>
        <VideoContainer categoryID={'20'} />
      </div>
    </div>
  );
};

export default Gaming;
