import React from 'react';
import {
  bestOfYoutubeConfig,
  comedyConfig,
  cookingConfig,
  fashionConfig,
  musicConfig,
} from './browseChannelsConfig';
import ChannelCardsList from './ChannelCardsList';

const BrowseChannels = () => {
  const bestOfYoutubeData = bestOfYoutubeConfig();
  const fashionData = fashionConfig();
  const comedyData = comedyConfig();
  const musicData = musicConfig();
  const cookingData = cookingConfig();

  return (
    <div className='w-10/12'>
      {bestOfYoutubeData && <ChannelCardsList config={bestOfYoutubeData} />}
      {fashionData && <ChannelCardsList config={fashionData} />}
      {comedyData && <ChannelCardsList config={comedyData} />}
      {musicData && <ChannelCardsList config={musicData} />}
      {cookingData && <ChannelCardsList config={cookingData} />}
    </div>
  );
};

export default BrowseChannels;
