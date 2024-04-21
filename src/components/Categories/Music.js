import React from 'react';
import VideoList from './VideoList';
import CategoryHeader from './CategoryHeader';
import MusicIcon from './../../assets/channels/best_of_youtube/music.svg';
import musicVideosConfig from './../../util/musicVideosConfig';

const Music = () => {
  const videos = musicVideosConfig();
  const details = '119M subscribers'
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader title={'Music'} details={details} subscribeBtn={true} icon={MusicIcon} />
      <VideoList info={videos} title={'New Music Videos'}  categoryID={'10'} />
    </div>
  );
};

export default Music;
