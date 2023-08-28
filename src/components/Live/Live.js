import React from 'react';
import CategoryHeader from '../CategoryHeader';
import liveIcon from './../../assets/channels/best_of_youtube/live.svg';
import LiveVideoContainer from './LiveVideoContainer';

const Live = () => {
  const details = '16.2M subscribers';

  return (
    <div className='w-full mx-auto ml-2'>
      <CategoryHeader
        title={'Live'}
        subscribeBtn={true}
        icon={liveIcon}
        details={details}
      />
      <LiveVideoContainer />
    </div>
  );
};

export default Live;
