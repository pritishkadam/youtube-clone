import React from 'react';
import LearningIcon from './../assets/channels/best_of_youtube/learning.svg';
import CategoryHeader from './CategoryHeader';
import VideoContainer from '../Home/VideoContainer';

const Learning = () => {
  const details = '';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Learning'}
        details={details}
        subscribeBtn={true}
        icon={LearningIcon}
      />
      <div className='my-4'>
        <VideoContainer categoryID={'28'} />
      </div>
    </div>
  );
};

export default Learning;
