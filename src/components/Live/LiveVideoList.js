import React, { useCallback, useEffect, useState } from 'react';
import { YOUTUBE_LIVE_API } from '../../util/constants';
import LiveVideoCard from './LiveVideoCard';

const LiveVideoList = (props) => {
  const { videoType, setError, setFetching } = props;
  const [videos, setVideos] = useState([]);

  const getLiveVideos = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_LIVE_API + videoType);
      setFetching(false);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        const data = await response.json();
        setVideos(data.items);
      }
    } catch (e) {
      setFetching(false);
      setError(true);
      setVideos(null);
    }
  }, [videoType, setVideos, setFetching, setError]);

  useEffect(() => {
    getLiveVideos();
  }, [getLiveVideos]);

  return <>{videos && videos.map((video) => <LiveVideoCard info={video} />)}</>;
};

export default LiveVideoList;
