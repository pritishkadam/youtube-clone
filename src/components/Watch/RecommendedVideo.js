import React, { useState } from 'react';
import { parse } from 'tinyduration';
import option from './../../assets/three-dots-option.svg';
import getTimeStamp from './../../util/getTimeStamp';
import timeSince from './../../util/timeSince';
import VideoCardOption from '../Home/VideoCardOption';
import youtube_verified from './../../assets/youtube_verified.svg';
import { Link } from 'react-router-dom';

const RecommendedVideo = (props) => {
  const { info } = props;
  const { id, snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { medium } = thumbnails;
  const { duration } = contentDetails;

  const [showOptionsBtn, setShowOptionsBtn] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

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
    <Link to={`/watch?v=${id}`} key={id} state={info} className='cursor-pointer'>
      <div className='w-full h-auto flex mb-4 font-roboto'>
        <div className='w-48 relative'>
          <img
            alt='thumbnail'
            src={medium.url}
            className='w-full h-full rounded-2xl object-cover bg-transparent hover:rounded-none'
          />

          <h3 className='h-4 font-semibold text-xs bg-[#000c] text-white inline rounded-md px-1 absolute bottom-2 right-2'>
            {timeString}
          </h3>
        </div>
        <div
          className='w-64 flex justify-start pt-1'
          onMouseEnter={() => {
            setShowOptionsBtn(true);
          }}
          onMouseLeave={() => {
            if (showOptionsMenu === false) {
              setShowOptionsBtn(false);
            }
          }}
        >
          <div className='w-full mx-2 text-left'>
            <h3 className='line-clamp-2 font-medium leading-5 text-base text-left'>
              {title}
            </h3>
            <h3 className='flex line-clamp-2 leading-5 text-xs text-[#606060]'>
              {channelTitle}
              <img
                alt='verified'
                src={youtube_verified}
                className='w-3 ml-1 mx-2'
              />
            </h3>
            <h3 className='line-clamp-2 leading-5 text-xs text-[#606060]'>
              <span>{viewStr} views</span>
              <span className='text-[8px] mx-1'> &#9679; </span>
              <span>{publishedDateStr}</span>
            </h3>
          </div>
          <div className='w-7 items-end relative'>
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
    </Link>
  );
};

export default RecommendedVideo;
