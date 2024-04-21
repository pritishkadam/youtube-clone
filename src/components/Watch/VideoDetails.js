import React, { useCallback, useEffect, useState } from 'react';
import { YOUTUBE_CHANNEL_API } from '../../util/constants';
import VideoDetailsHeader from './VideoDetailsHeader';
import channel_logo from './../../assets/channel-logo.svg';
import videoButton from './../../assets/video-button.svg';
import userButton from './../../assets/user-button.svg';

const VideoDetails = (props) => {
  const { videoInfo } = props;
  const { id, snippet, statistics } = videoInfo;
  const { channelId, channelTitle, title, publishedAt, description } = snippet;
  const { viewCount, likeCount } = statistics;

  const views = viewCount ? Number(viewCount) : 0;

  const [logo, setLogo] = useState('');
  const [subscriberCount, setSubscriberCount] = useState('');
  const [showMore, setShowMore] = useState(false);

  const showDescriptionText = showMore ? 'Show less' : 'Show more';

  const getChannelDetails = useCallback(async () => {
    try {
      const url = YOUTUBE_CHANNEL_API.replace('CHANNEL_ID', channelId);
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        const data = await response.json();
        setLogo(data?.items[0]?.snippet?.thumbnails?.default?.url);
        const subscribers = data?.items[0]?.statistics?.subscriberCount;
        const subscriberStr = subscribers
          ? new Intl.NumberFormat('en-GB', {
              notation: 'compact',
              compactDisplay: 'short',
            }).format(subscribers)
          : 0;
        setSubscriberCount(subscriberStr);
      }
    } catch (e) {
      setLogo(channel_logo);
      setSubscriberCount('0');
    }
  }, [channelId, setLogo, setSubscriberCount]);

  useEffect(() => {
    getChannelDetails();
  }, [id, getChannelDetails]);

  const likeCountStr = likeCount
    ? new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(likeCount)
    : 0;

  const viewStr = views ? views.toLocaleString() : 0;

  const getPubslishedDate = (dateString) => {
    if (dateString === '') {
      return '';
    }

    const date = new Date(dateString).getDate();
    const month = new Date(dateString).toLocaleString('en-us', {
      month: 'short',
    });
    const year = new Date(dateString).getFullYear();
    return `${month} ${date}, ${year}`;
  };

  const publishedDateStr = getPubslishedDate(publishedAt);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='flex flex-col'>
      <h2 className='my-2 text-lg font-semibold'>{title}</h2>
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
        <span className='text-sm font-semibold'>{viewStr} views &nbsp;</span>
        <span className='text-sm font-semibold'>{publishedDateStr}</span>
        <br />
        {showMore && (
          <>
            <span className='text-sm'>{description}</span>
            <hr className='w-full h-2 my-4 bg-gray-200 border-0' />
            <div className='flex flex-col'>
              <div className='flex'>
                <img
                  alt='channel-logo'
                  src={logo ? logo : channel_logo}
                  className='w-16 rounded-full self-center'
                />
                <div
                  id='channel-details'
                  className='flex flex-col mx-2 self-center'
                >
                  <h2 className='font-semibold text-xl'>{channelTitle}</h2>
                  <h3 className='text-sm text-[#606060]'>
                    {subscriberCount} subscribers
                  </h3>
                </div>
              </div>
              <div id='buttons' className='w-full flex my-4 gap-3'>
                <button className='w-1/2 flex gap-2 justify-center py-2 text-sm font-semibold border rounded-full'>
                  <img
                    alt='videoBtn'
                    src={videoButton}
                    className='w-5 p-1 border border-black self-center'
                  />
                  <span className='self-center'>Videos</span>
                </button>
                <button className='w-1/2 flex  gap-2 justify-center py-2 text-sm font-semibold border rounded-full'>
                  <img
                    alt='videoBtn'
                    src={userButton}
                    className='w-5 border border-black self-center'
                  />
                  <span className='self-center'>About</span>
                </button>
              </div>
            </div>
          </>
        )}
        <span
          className='text-sm font-semibold cursor-pointer'
          onClick={handleShowMore}
        >
          {showDescriptionText}
        </span>
      </div>
    </div>
  );
};

export default VideoDetails;
