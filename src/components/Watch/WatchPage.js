import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { close_menu, open_menu } from './../../util/navSlice';
import { useSearchParams } from 'react-router-dom';
import RecommendationListContainer from './RecommendationListContainer';
import VideoContainer from './VideoContainer';
import useGetVideoDetails from './useGetVideoDetails';
import ErrorPage from '../ErrorPage';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  const [videoDetails, setVideoDetails] = useState(null);
  const [startData, setStartData] = useState(true);

  const id = searchParams.get('v');

  const { error } = useGetVideoDetails(
    startData,
    setStartData,
    setVideoDetails,
    id
  );

  // const getVideoDetails = async () => {
  //   const response = await fetch(YOUTUBE_VIDEOS_URL + '&id=' + id);
  //   if (response.status !== 200) {
  //     setVideoDetails(null);
  //   } else {
  //     const data = await response.json();
  //     setVideoDetails(data?.items[0]);
  //   }
  // };

  // useEffect(() => {
  //   getVideoDetails();
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(close_menu());
    return () => {
      dispatch(open_menu());
    };
  }, [dispatch]);

  return (
    <div
      className={`w-full md:w-11/12 h-auto flex flex-col md:flex-row md:justify-center gap-6 mx-auto my-4 font-roboto`}
    >
      {error && <ErrorPage />}
      {videoDetails && (
        <>
          <VideoContainer videoId={id} videoInfo={videoDetails} />
          <RecommendationListContainer />
        </>
      )}
    </div>
  );
};

export default WatchPage;
