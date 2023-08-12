import React, { useEffect, useState } from 'react';
import { YOUTUBE_URL } from '../util/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_URL);
    const data = await response.json();
    setVideos(data.items);
  };

  if (videos.length === 0) return null;

  return (
    <div className='flex flex-wrap justify-items-stretch'>
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
