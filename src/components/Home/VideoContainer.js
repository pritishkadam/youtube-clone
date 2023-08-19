import React, { useCallback, useEffect, useState } from 'react';
// import { YOUTUBE_URL } from '../../util/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = (props) => {
  const { info } = props;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = useCallback(async () => {
    // const response = await fetch(YOUTUBE_URL);
    // const data = await response.json();
    setVideos(info.items);
  }, []);

  if (videos.length === 0) return null;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-fr gap-x-4 gap-y-10 mx-4 m-auto'>
      {videos.map((video, index) => {
        return (
          <div key={video.id}>
            <Link to={`/watch?v=${video.id}`} key={video.id} state={video}>
              <VideoCard info={video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
