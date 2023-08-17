import React from 'react';
import historyIcon from './../assets/history-icon-2.svg';
import SignInButton from './Header/SignInButton';

const History = () => {
  return (
    <div className='w-10/12 flex flex-col justify-center items-center text-center mb-20 font-roboto'>
      <img alt='subscription' src={historyIcon} className='w-32 h-32' />
      <div>
        <h2 className='text-2xl my-4'>Keep track of what you watch</h2>
        <h3 className='text-sm mb-7'>
          Watch history isn't viewable when signed out.
          <a href='https://support.google.com/youtube/answer/95725?hl=en' className='text-blue-500'>
            &nbsp;Learn more
          </a>
        </h3>
      </div>
      <SignInButton />
    </div>
  );
};

export default History;
