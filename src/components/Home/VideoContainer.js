import React, { useCallback, useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_URL } from '../../util/constants';
import CardSkeletonContainer from './CardSkeletonContainer';
import ErrorPage from '../ErrorPage';
import videosConfig from './videosData';

const VideoContainer = (props) => {
  const { categoryID } = props;
  const [videos, setVideos] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getVideos = useCallback(async (categoryID) => {
    const url = `${YOUTUBE_URL}&videoCategoryId=${categoryID}`;
    const response = await fetch(url);
    setFetching(false);
    if (response.status !== 200) {
      const data = videosConfig();
      setVideos(data.items);
      // setVideos(null);
    } else {
      const data = await response.json();
      setVideos(data.items);
    }
  }, []);

  useEffect(() => {
    getVideos(categoryID);
  }, [getVideos, categoryID]);

  if (videos && videos.length === 0) return null;

  if (videos === null) return <ErrorPage />;

  return (
    <>
      {fetching && <CardSkeletonContainer />}
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
