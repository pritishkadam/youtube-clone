import React from 'react'
import GamingIcon from './../assets/channels/best_of_youtube/gaming.svg'
import gamingVideosConfig from '../util/gamingVideosConfig';
import CategoryHeader from './CategoryHeader';
import VideoList from './VideoList';
import VideoContainer from './Home/VideoContainer';

const Gaming = () => {
  const videos = gamingVideosConfig();
  const details = '119M subscribers'
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader title={'Gaming'} details={details} subscribeBtn={true} icon={GamingIcon} />
      <div className='my-4'>
      <h3 className='mx-5 my-2 font-semibold'>Trending videos</h3>
      <VideoContainer info={videos} title={'Trending videos'} />
      </div>
    </div>
  );
}

export default Gaming