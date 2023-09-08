import React, { useState } from 'react';
import LiveVideoList from './LiveVideoList';
import ErrorPage from '../ErrorPage';
import CardSkeleton from '../Home/CardSkeleton';

const LiveVideoContainer = (props) => {
  const { title, videoType } = props;
  const [error, setError] = useState(false);
  const [fetching, setFetching] = useState(true);

  return (
    <>
      <h3 className='text-xl m-4 font-medium'>{title}</h3>
      {fetching && (
        <div className=''>
          <CardSkeletonContainer />
        </div>
      )}
      {!error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row-dense auto-cols-fr gap-x-4 gap-y-5 mx-4 m-auto'>
          <LiveVideoList
            videoType={videoType}
            setError={setError}
            setFetching={setFetching}
          />
        </div>
      )}
      {error && <ErrorPage />}
      <hr className='h-1 bg-slate-300 my-8' />
    </>
  );
};

const CardSkeletonContainer = (props) => {
  return (
    <div id='card-container' className='flex gap-5'>
      {Array(4)
        .fill('')
        .map((el, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default LiveVideoContainer;
