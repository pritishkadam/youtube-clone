import React from 'react';
import SearchSkeleton from './SearchSkeleton';

const SearchSkeletonList = () => {
  return (
    <div id='list-container' className='w-10/12 flex flex-col my-2 font-roboto'>
      {Array(12)
        .fill('')
        .map((el, index) => (
          <SearchSkeleton key={index} />
        ))}
    </div>
  );
};

export default SearchSkeletonList;
