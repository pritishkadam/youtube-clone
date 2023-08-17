import React from 'react';
import profile from './../../assets/profile.svg';

const SignInButton = () => {
  return (
    <button className='flex w-24 outline outline-1 outline-slate-300 p-1 py-2 rounded-full hover:outline-none hover:bg-[#0090fe1c]'>
      <img
        alt='profile'
        src={profile}
        className='w-5 rounded-full border border-[#3c97e6] cursor-pointer my-auto mx-1'
      />
      <span className='ml-1 text-sm text-[#3c97e6] font-semibold'>Sign in</span>
    </button>
  );
};

export default SignInButton;
