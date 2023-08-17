import React, { useState } from 'react';

const ChannelCards = (props) => {
  const { data } = props;
  const { title, icon, details } = data;
  const [subscribeDialog, setSubscribeDialog] = useState(false);

  const handleSubscriptionDialog = () => {
    setSubscribeDialog(!subscribeDialog);
  };

  return (
    <div className='flex flex-col items-center font-roboto m-auto relative'>
      <img alt='channel-icon' src={icon} className='w-24 rounded-full' />
      <h3 className='text-sm py-1 font-semibold text-[#0f0f0f]'>{title}</h3>
      <h3 className='text-xs text-[#606060]'>{details}</h3>
      <div className='relative'>
        <button
          onClick={handleSubscriptionDialog}
          className='mt-6 text-[#0f0f0f] text-xs font-semibold p-2 px-3 rounded-full bg-slate-100'
        >
          Subscribe
        </button>
        {subscribeDialog && <Subscription />}
      </div>
    </div>
  );
};

const Subscription = () => {
  return (
    <div className='w-96 h-44 flex flex-col items-start p-4 justify-between z-10 bg-white font-roboto border absolute'>
      <h2 className='text-base'>Want to subscribe to this channel?</h2>
      <h3 className='text-sm mb-5 text-[#606060]'>Sign in to subscribe to this channel.</h3>
      <div className='text-sm font-semibold px-3 py-2 text-[#065fd4] hover:bg-blue-100 hover:rounded-full'>Sign in</div>
    </div>
  );
};

export default ChannelCards;
