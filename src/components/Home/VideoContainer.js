import React, { useCallback, useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_URL } from '../../util/constants';
import CardSkeletonContainer from './CardSkeletonContainer';
import ErrorPage from '../ErrorPage';
import videosConfig from './videosData';

const VideoContainer = (props) => {
  const { categoryID } = props;
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(false);

  const getVideos = useCallback(async (categoryID) => {
    try {
      const url = `${YOUTUBE_URL}&videoCategoryId=${categoryID}`;
      const response = await fetch(url);
      if (response.status !== 200) {
        const data = videosConfig();
        setVideos(data.items);
      } else {
        const data = await response.json();
        setVideos(data.items);
      }
    } catch (e) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getVideos(categoryID);
  }, [getVideos, categoryID]);

  if (videos && videos.length === 0) return null;

  return (
    <>
      {error && <ErrorPage />}
      {videos === null && !error && <CardSkeletonContainer count={18} />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row-dense auto-cols-fr gap-x-4 gap-y-10 mx-4 m-auto'>
        {videos &&
          videos.map((video, index) => {
            return <VideoCard key={video.id} info={video} />;
          })}
      </div>
    </>
  );
};

export default VideoContainer;
