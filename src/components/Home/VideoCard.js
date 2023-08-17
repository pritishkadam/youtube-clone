import React, { useEffect, useState } from 'react';
import { parse, serialize } from 'tinyduration';
import channel_logo from './../../assets/channel-logo.svg';
import option from './../../assets/three-dots-option.svg';
import getTimeStamp from './../../util/getTimeStamp';
import { YOUTUBE_CHANNEL_API } from './../../util/constants';
import timeSince from './../../util/timeSince';
import videoCardOptions from './videoOptionsConfig';
import VideoCardOption from './VideoCardOption';

const VideoCard = (props) => {
  const { info } = props;
  const { id, snippet, statistics, contentDetails } = info;
  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { medium } = thumbnails;
  const { duration } = contentDetails;

  const [showOptionsBtn, setShowOptionsBtn] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showDuration, setShowDuration] = useState(true);
  const [logo, setLogo] = useState(true);

  const publishedDate = new Date(publishedAt);

  const publishedDateStr = timeSince(publishedDate);

  const getChannelDetails = async () => {
    const url = YOUTUBE_CHANNEL_API.replace('CHANNEL_ID', channelId);
    const response = await fetch(url);
    const data = await response.json();
    setLogo(data?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  useEffect(() => {
    getChannelDetails();
  }, []);

  console.log('INfo: ', info);

  const durationStr = parse(duration);
  const timeString = getTimeStamp(durationStr);

  const viewStr = viewCount
    ? new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(viewCount)
    : 0;


  return (
    <div className='w-full h-auto'>
      <div className='w-full relative'>
        <img
          alt='thumbnail'
          src={medium.url}
          className='w-full h-full rounded-2xl object-cover bg-transparent hover:rounded-none'
          onMouseEnter={() => {
            setShowDuration(false);
          }}
          onMouseOut={() => {
            setShowDuration(true);
          }}
        />

        {showDuration && (
          <h3 className='h-4 font-medium text-xs bg-[#000c] text-white inline rounded-md px-1 absolute bottom-2 right-2'>
            {timeString}
          </h3>
        )}
      </div>
      <div
        className='flex justify-start pt-2'
        onMouseEnter={() => {
          setShowOptionsBtn(true);
        }}
        onMouseLeave={() => {
          if (showOptionsMenu === false) {
            setShowOptionsBtn(false);
          }
        }}
      >
        <img
          alt='channel-logo'
          src={logo ? logo : channel_logo}
          className='w-10 self-start rounded-full'
        />

        <div className='w-5/6 mx-2'>
          <h3 className='line-clamp-2 font-semibold leading-6 text-lg'>
            {title}
          </h3>
          <h3 className='line-clamp-2 leading-5 text-sm text-[#606060]'>
            {channelTitle}
          </h3>
          <h3 className='line-clamp-2 leading-5 text-sm text-[#606060]'>
            <span>{viewStr} views</span>
            <span className='text-[8px] mx-1'> &#9679; </span>
            <span>{publishedDateStr}</span>
          </h3>
        </div>
        <div className='w-10 justify-end relative'>
          {showOptionsBtn && (
            <button
              onClick={() => {
                setShowOptionsBtn(true);
                setShowOptionsMenu(!showOptionsMenu);
              }}
              className='hover:bg-slate-200 rounded-full'
            >
              <img alt='options' src={option} className='w-12' />
            </button>
          )}
          {showOptionsMenu && (
            <VideoCardOption />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
