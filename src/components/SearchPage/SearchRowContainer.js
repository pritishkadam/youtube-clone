import React, { useCallback, useEffect, useState } from 'react';
import SearchRow from './SearchRow';
import channel_logo from './../../assets/channel-logo.svg';
import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEOS_URL } from '../../util/constants';

const SearchRowContainer = (props) => {
  const { searchData } = props;
  const { id, snippet } = searchData;
  const { videoId } = id;
  const { channelId } = snippet;

  const [videoDetails, setVideoDetails] = useState(null);
  const [logo, setLogo] = useState('');

  const getVideoDetails = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_URL + '&id=' + videoId);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        const data = await response.json();
        setVideoDetails(data?.items[0]);
      }
    } catch (e) {
      setVideoDetails(null);
    }
  }, [videoId, setVideoDetails]);

  const getChannelDetails = useCallback(async () => {
    try {
      const url = YOUTUBE_CHANNEL_API.replace('CHANNEL_ID', channelId);
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        const data = await response.json();
        setLogo(data?.items[0]?.snippet?.thumbnails?.default?.url);
      }
    } catch (e) {
      setLogo(channel_logo);
    }
  }, [channelId, setLogo]);

  useEffect(() => {
    getChannelDetails();
    getVideoDetails();
  }, [getChannelDetails, getVideoDetails]);

  return (
    <div className='w-10/12 my-2 font-roboto'>
      {logo && videoDetails && (
        <div key={videoId}>
          <SearchRow id={videoId} info={videoDetails} logo={logo} />
        </div>
      )}
    </div>
  );
};

export default SearchRowContainer;
