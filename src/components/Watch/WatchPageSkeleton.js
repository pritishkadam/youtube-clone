import React from 'react';
import RecommendationListSkeleton from './RecommendationListSkeleton';
import VideoContainerSkeleton from './VideoContainerSkeleton';

const WatchPageSkeleton = () => {
  return (
    <div
      className={`w-full md:w-11/12 h-auto flex flex-col md:flex-row md:justify-center gap-6 mx-auto my-4 font-roboto`}
    >
      <VideoContainerSkeleton />
      <RecommendationListSkeleton />
    </div>
  );
};

export default WatchPageSkeleton;
