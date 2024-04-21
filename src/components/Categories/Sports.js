import React from 'react';
import SportsIcon from './../../assets/channels/best_of_youtube/sports.svg';
import CategoryHeader from './CategoryHeader';
import VideoContainer from '../Home/VideoContainer';

const Sports = () => {
  const details = '119M subscribers';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Sports'}
        details={details}
        subscribeBtn={true}
        icon={SportsIcon}
      />
      <div className='my-4'>
        <VideoContainer categoryID={'17'} />
      </div>
    </div>
  );
};

export default Sports;
