import React from 'react';
import CategoryHeader from '../Categories/CategoryHeader';
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
      <hr className='h-1 bg-slate-300 my-6' />
      <LiveVideoContainer title={'Live Now'} videoType={'live'} />
      <LiveVideoContainer title={'Recent Live Streams'} videoType={'completed'} />
      <LiveVideoContainer title={'Upcoming Live Streams'} videoType={'upcoming'} />
    </div>
  );
};

export default Live;
