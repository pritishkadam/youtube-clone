import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { close_menu, open_menu } from './../../util/navSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import RecommendationListContainer from './RecommendationListContainer';
import VideoContainer from './VideoContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const { state: videoInfo } = useLocation();
  console.log('State: ', videoInfo);

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
    <div className='w-5/6 h-auto flex gap-6 mx-auto my-4 font-roboto'>
      <VideoContainer videoId={id} videoInfo={videoInfo} />
      <RecommendationListContainer />
    </div>
  );
};

export default WatchPage;
