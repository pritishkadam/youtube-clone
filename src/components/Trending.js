import React from 'react';
import trendingIcon from './../assets/trending-page-icon.svg';
import BrowseChannels from './BrowseChannels/BrowseChannels';

const Trending = () => {
  return (
    <div className='w-10/12'>
      <div id='header' className='w-full h-28 border flex'>
        <div id='title' className='w-full flex items-center'>
          <img alt='icon' src={trendingIcon} className='w-24 rounded-full' />
          <h3 className='text-2xl mx-4'>Trending</h3>
        </div>
        <div id='subscribe-btn'>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
