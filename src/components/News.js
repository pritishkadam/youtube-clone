import React from 'react';
import NewsIcon from './../assets/channels/best_of_youtube/news.svg';
import CategoryHeader from './CategoryHeader';
import VideoContainer from './Home/VideoContainer';

const News = () => {
  const details = '';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'News'}
        details={details}
        subscribeBtn={true}
        icon={NewsIcon}
      />
      <div className='my-4'>
        <VideoContainer categoryID={'25'} />
      </div>
    </div>
  );
};

export default News;
