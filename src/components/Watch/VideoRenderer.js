import React from 'react';

const VideoRenderer = (props) => {
  const { videoId, title } = props;
  return (
    <div>
      <iframe
        className='w-full h-[28rem]'
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      />
    </div>
  );
};

export default VideoRenderer;
