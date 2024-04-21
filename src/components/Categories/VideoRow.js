import React, { useState } from 'react';
import { parse } from 'tinyduration';
import option from './../assets/three-dots-option.svg';
import youtube_verified from './../assets/youtube_verified.svg';
import getTimeStamp from './../util/getTimeStamp';
import VideoCardOption from './Home/VideoCardOption';
import timeSince from '../util/timeSince';

const VideoRow = (props) => {
  const { info } = props;
  const { id, snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;
  const { viewCount } = statistics;
  const { medium } = thumbnails;
  const { duration } = contentDetails;

  const [showOptionsBtn, setShowOptionsBtn] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showDuration, setShowDuration] = useState(true);

  const publishedDate = new Date(publishedAt);

  const publishedDateStr = timeSince(publishedDate);

  const durationStr = parse(duration);
  const timeString = getTimeStamp(durationStr);

  const viewStr = viewCount
    ? new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(viewCount)
    : 0;

  return (
    <div key={id} className='w-full h-auto flex my-2 mx-5'>
      <div className='w-64 h-36 relative'>
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
        className='w-3/4 flex justify-between pt-1'
        onMouseEnter={() => {
          setShowOptionsBtn(true);
        }}
        onMouseLeave={() => {
          if (showOptionsMenu === false) {
            setShowOptionsBtn(false);
          }
        }}
      >
        <div className='w-5/6 px-3'>
          <h3 className='line-clamp-2 leading-6 text-lg'>{title}</h3>
          <div className='flex flex-col'>
            <h3 className='flex justify-start line-clamp-2 leading-5 text-xs text-[#606060] mr-4'>
              <span>{channelTitle}</span>
              <img
                alt='verified'
                src={youtube_verified}
                className='w-3 ml-1 mx-2'
              />
              <span className='flex'>{viewStr} views</span>
              <span className='text-[8px] mx-1'> &#9679; </span>
              <span>{publishedDateStr}</span>
            </h3>
            <h3 className='line-clamp-2 leading-5 text-xs text-[#606060] mr-4'>
              {description}
            </h3>
          </div>
        </div>
        <div className='w-10 justify-end relative'>
          {showOptionsBtn && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowOptionsBtn(true);
                setShowOptionsMenu(!showOptionsMenu);
              }}
              className='hover:bg-slate-100 rounded-full'
            >
              <img alt='options' src={option} className='w-7' />
            </button>
          )}
          {showOptionsMenu && <VideoCardOption />}
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
