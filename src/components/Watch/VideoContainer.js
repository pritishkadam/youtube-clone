import React from 'react';
import VideoRenderer from './VideoRenderer';
import VideoDetails from './VideoDetails';
import CommentListContainer from './CommentListContainer';

const VideoContainer = (props) => {
  const { videoId, videoInfo } = props;
  const { snippet } = videoInfo;
  const { title } = snippet;

  return (
    <div className='w-full h-full'>
      <VideoRenderer videoId={videoId} title={title} />
      <VideoDetails videoInfo={videoInfo} />
      <CommentListContainer videoInfo={videoInfo} />
    </div>
  );
};

export default VideoContainer;
