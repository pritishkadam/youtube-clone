import React, { useEffect, useState } from 'react';
import { YOUTUBE_CHANNEL_API } from '../../util/constants';
import VideoDetailsHeader from './VideoDetailsHeader';
import channel_logo from './../../assets/channel-logo.svg';

const VideoDetails = (props) => {
  const { videoInfo } = props;
  const { id, snippet, statistics, contentDetails } = videoInfo;
  const {
    channelId,
    channelTitle,
    title,
    thumbnails,
    publishedAt,
    description,
  } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;
  const { medium } = thumbnails;
  const { duration } = contentDetails;

  const views = viewCount ? Number(viewCount) : 0;

  const [logo, setLogo] = useState('');
  const [subscriberCount, setSubscriberCount] = useState('');

  const getChannelDetails = async () => {
    const url = YOUTUBE_CHANNEL_API.replace('CHANNEL_ID', channelId);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Channel Details: ', data?.items[0]);
    setLogo(data?.items[0]?.snippet?.thumbnails?.default?.url);
    const subscribers = data?.items[0]?.statistics?.subscriberCount;
    const subscriberStr = subscribers
      ? new Intl.NumberFormat('en-GB', {
          notation: 'compact',
          compactDisplay: 'short',
        }).format(subscribers)
      : 0;
    setSubscriberCount(subscriberStr);
  };

  useEffect(() => {
    getChannelDetails();
  }, []);

  const likeCountStr = likeCount
    ? new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(likeCount)
    : 0;

  const viewStr = viewCount
    ? new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(viewCount)
    : 0;

  const getPubslishedDate = (dateString) => {
    if (dateString === '') {
      return '';
    }
    // const date = new Date(dateString).toDateString();
    // return date;
    const date = new Date(dateString).getDate();
    const month = new Date(dateString).toLocaleString('en-us', {
      month: 'short',
    });
    const year = new Date(dateString).getFullYear();
    return `${month} ${date}, ${year}`;
  };

  const publishedDateStr = getPubslishedDate(publishedAt);

  return (
    <div className='flex flex-col'>
      <h2 className='my-2 text-lg font-medium'>{title}</h2>
      <div className='w-full flex justify-between mb-2'>
        <VideoDetailsHeader
          logo={logo}
          channelTitle={channelTitle}
          subscriberCount={subscriberCount}
          likeCountStr={likeCountStr}
        />
      </div>
      <div
        id='body'
        className='bg-slate-100 p-3 whitespace-pre-wrap rounded-lg font-roboto'
      >
        <span className='text-sm font-semibold'>
          {views.toLocaleString()} views &nbsp;
        </span>
        <span className='text-sm font-semibold'>{publishedDateStr}</span>
        <br />
        <span className='text-sm'>{description}</span>
        <hr className='w-full h-2 my-4 bg-gray-200 border-0' />
        <div className='flex'>
          <img
            alt='channel-logo'
            src={logo ? logo : channel_logo}
            className='w-16 rounded-full self-center'
          />
          <div id='channel-details' className='flex flex-col mx-2 self-center'>
            <h2 className='font-semibold text-xl'>{channelTitle}</h2>
            <h3 className='text-sm text-[#606060]'>
              {subscriberCount} subscribers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
