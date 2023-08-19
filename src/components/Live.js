import React from 'react'
import VideoContainer from './Home/VideoContainer'
import { liveVideosConfig } from '../util/liveVideosConfig';

const Live = () => {
  const videos = liveVideosConfig();

  return (
    <div>
      <VideoContainer info={videos} />
    </div>
  )
}

export default Live