import React from 'react';
import Skeleton from './Skeleton';

const SkeletonList = () => {
  return (
    <div id='card-container' className='w-10/12 flex flex-col my-2 font-roboto'>
      {Array(12)
        .fill('')
        .map((el, index) => (
          <Skeleton key={index} />
        ))}
    </div>
  );
};

export default SkeletonList;
