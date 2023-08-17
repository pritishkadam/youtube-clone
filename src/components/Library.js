import React from 'react';
import libraryIcon from './../assets/library-icon-2.svg';
import SignInButton from './Header/SignInButton';

const Library = () => {
  return (
    <div className='w-10/12 flex flex-col justify-center items-center text-center mb-20 font-roboto'>
      <img alt='subscription' src={libraryIcon} className='w-32 h-32' />
      <div>
        <h2 className='text-2xl my-4'>Enjoy your favorite videos</h2>
        <h3 className='text-sm mb-7'>
          Sign in to access videos that you’ve liked or saved
        </h3>
      </div>
      <SignInButton />
    </div>
  );
};

export default Library;
