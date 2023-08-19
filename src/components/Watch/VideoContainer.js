import React from 'react';
import VideoRenderer from './VideoRenderer';
import VideoDetails from './VideoDetails';

const VideoContainer = (props) => {
  const { videoId, videoInfo } = props;
  const {snippet} = videoInfo;
  const {title} = snippet;

  return (
    <div>
      <VideoRenderer videoId={videoId} title={title} />
      <VideoDetails videoInfo={videoInfo} />
    </div>
  );
};

export default VideoContainer;
