import React, { useCallback, useEffect, useState } from 'react';
import channel_logo from './../../assets/channel-logo.svg';
import option from './../../assets/three-dots-option.svg';
import { YOUTUBE_CHANNEL_API } from './../../util/constants';
import timeSince from './../../util/timeSince';
import VideoCardOption from './../Home/VideoCardOption';
import { Link } from 'react-router-dom';

const LiveVideoCard = (props) => {
  const { info } = props;
  const { id, snippet } = info;
  const { videoId } = id;
  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;
  const { medium } = thumbnails;

  const [showOptionsBtn, setShowOptionsBtn] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [logo, setLogo] = useState('');

  const publishedDate = new Date(publishedAt);

  const publishedDateStr = timeSince(publishedDate);

  const getChannelDetails = useCallback(async () => {
    const url = YOUTUBE_CHANNEL_API.replace('CHANNEL_ID', channelId);
    const response = await fetch(url);
    if (response.status !== 200) {
      setLogo(channel_logo);
    } else {
      const data = await response.json();
      setLogo(data?.items[0]?.snippet?.thumbnails?.default?.url);
    }
  }, [channelId, setLogo]);
  
  useEffect(() => {
    getChannelDetails();
  }, [getChannelDetails]);

  return (
    <Link to={`/watch?v=${videoId}`} key={id}>
      <div className='w-full h-auto'>
        <div className='w-full relative'>
          <img
            alt='thumbnail'
            src={medium.url}
            className='w-full h-full rounded-2xl object-cover bg-transparent hover:rounded-none'
          />
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
            <h3 className='line-clamp-2 font-semibold leading-5 text-base'>
              {title}
            </h3>
            <h3 className='line-clamp-2 leading-5 text-sm text-[#606060]'>
              {channelTitle}
            </h3>
            <h3 className='line-clamp-2 leading-5 text-sm text-[#606060]'>
              <span>{publishedDateStr}</span>
            </h3>
          </div>
          <div className='w-10 justify-end relative'>
            {showOptionsBtn && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowOptionsBtn(true);
                  setShowOptionsMenu(!showOptionsMenu);
                }}
                className='hover:bg-slate-200 rounded-full'
              >
                <img alt='options' src={option} className='w-12' />
              </button>
            )}
            {showOptionsMenu && <VideoCardOption />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LiveVideoCard;
