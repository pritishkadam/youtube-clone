import React from 'react';
import CategoryHeader from './CategoryHeader';
import VideoList from './VideoList';
import MoviesIcon from './../assets/movies-page-icon.svg';
import musicVideosConfig from '../util/musicVideosConfig';

const Movies = () => {
  const videos = musicVideosConfig();
  const details = 'Watch the latest and greatest hits';
  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader title={'Movies'} details={details} subscribeBtn={false} icon={MoviesIcon} />
      <VideoList info={videos} title={''} />
    </div>
  );
};

export default Movies;
