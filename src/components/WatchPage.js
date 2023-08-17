import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { close_menu, open_menu } from '../util/navSlice';
import { useSearchParams } from 'react-router-dom';
import historyIcon from './../assets/history-icon-2.svg';
import SignInButton from './Header/SignInButton';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('v');
  console.log('Video ID: ', id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(close_menu());
    return () => {
      dispatch(open_menu());
    };
  }, []);
  return (
    <div className='w-10/12 flex flex-col justify-center items-center text-center mb-20 font-roboto'>
      <img alt='subscription' src={historyIcon} className='w-32 h-32' />
      <div>
        <h2 className='text-2xl my-4'>Keep track of what you watch</h2>
        <h3 className='text-sm mb-7'>
          Watch history isn't viewable when signed out.
          <a
            href='https://support.google.com/youtube/answer/95725?hl=en'
            className='text-blue-500'
          >
            &nbsp;Learn more
          </a>
        </h3>
      </div>
      <SignInButton />
    </div>
  );
};

export default WatchPage;
