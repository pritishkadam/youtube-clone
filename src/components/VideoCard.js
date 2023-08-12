import React from 'react';

const VideoCard = (props) => {
  const { info } = props;
  const { id, snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { medium } = thumbnails;

  return (
    <div className='w-64 p-2 m-2 shadow-xl flex-grow'>
      <img alt='thumbnail' src={medium.url} className='rounded-lg' />
      <h2 className='font-bold py-2'>{title}</h2>
      <h3>{channelTitle}</h3>
      <h3>{viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
