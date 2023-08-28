import React, { useCallback, useEffect, useState } from 'react';
import { YOUTUBE_LIVE_API } from '../../util/constants';
import LiveVideoCard from './LiveVideoCard';
import ErrorPage from '../ErrorPage';

const LiveVideoList = (props) => {
  const { videoType } = props;
  const [videos, setVideos] = useState([]);

  const getLiveVideos = useCallback(async () => {
    const response = await fetch(YOUTUBE_LIVE_API + videoType);

    if (response.status !== 200) {
      setVideos(null);
    } else {
      const data = await response.json();
      setVideos(data.items);
    }
  }, [videoType, setVideos]);

  useEffect(() => {
    getLiveVideos();
  }, [getLiveVideos]);

  if (videos === null) {
    return (
      <div className='w-full border'>
        <ErrorPage />
      </div>
    );
  }

  return <>{videos && videos.map((video) => <LiveVideoCard info={video} />)}</>;
};

export default LiveVideoList;
