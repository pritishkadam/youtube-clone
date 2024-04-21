import React from 'react';
import FashionIcon from './../assets/channels/best_of_youtube/fashion.svg';
import CategoryHeader from './CategoryHeader';
import VideoContainer from '../Home/VideoContainer';

const Fashion = () => {
  const details = '1.53M subscribers';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Fashion'}
        details={details}
        subscribeBtn={true}
        icon={FashionIcon}
      />
      <div className='my-4'>
        <VideoContainer categoryID={'26'} />
      </div>
    </div>
  );
};

export default Fashion;
