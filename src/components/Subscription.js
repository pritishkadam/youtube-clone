import React from 'react';
import subscriptionIcon from './../assets/subscription-icon.svg';
import SignInButton from './Header/SignInButton';

const Subscription = () => {
  return (
    <div className='w-10/12 flex flex-col justify-center items-center text-center mb-20 font-roboto'>
      <img alt='subscription' src={subscriptionIcon} className='w-32 h-32' />
      <div>
        <h2 className='text-2xl my-4'>Don't miss new videos</h2>
        <h3 className='text-sm mb-7'>Sign in to see updates from your favorite YouTube channels</h3>
      </div>
      <SignInButton />
    </div>
  );
};

export default Subscription;
