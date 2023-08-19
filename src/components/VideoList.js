import React, { useCallback, useEffect, useState } from 'react';
import videosConfig from './Home/videosData';
import VideoRow from './VideoRow';
import { Link } from 'react-router-dom';

const VideoList = (props) => {
  const { info, title } = props;
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
    <div className='w-10/12 flex flex-col my-2 font-roboto'>
      {title && (
        <div>
          <h3 className='mx-5 my-2 font-semibold'>{title}</h3>
        </div>
      )}
      {videos &&
        videos.length !== 0 &&
        videos.map((video) => {
          return (
            <div key={video.id}>
              <Link to={`/watch?v=${video.id}`} key={video.id}>
                <VideoRow info={video} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default VideoList;
