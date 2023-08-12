import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { close_menu, open_menu } from '../util/navSlice';
import { useSearchParams } from 'react-router-dom';

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
  return <div className=''>WatchPage</div>;
};

export default WatchPage;
