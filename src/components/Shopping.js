import React from 'react';
import CategoryHeader from './CategoryHeader';
import VideoList from './VideoList';
import shoppingIcon from './../assets/shopping-page-icon.svg';

const Shopping = () => {

  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Shopping'}
        subscribeBtn={true}
        icon={shoppingIcon}
      />
      <VideoList info={null} title={'Top Picks'} categoryID={'0'} />
    </div>
  );
};

export default Shopping;
