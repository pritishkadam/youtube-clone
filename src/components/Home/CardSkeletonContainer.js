import React from 'react';
import CardSkeleton from './CardSkeleton';

const CardSkeletonContainer = () => {
  return (
    <div
      id='card-container'
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row-dense auto-cols-fr gap-x-4 gap-y-10 mx-4 m-auto'
    >
      {Array(12)
        .fill('')
        .map((el, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default CardSkeletonContainer;
