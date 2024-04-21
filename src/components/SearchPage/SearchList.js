import React, { useState } from 'react';
import SearchRow from './SearchRow';

const SearchList = (props) => {
  const { data } = props;

  if (data.length === 0) return null;

  return (
    <div className='w-10/12 border border-black my-2 font-roboto'>
      {data &&
        data.length !== 0 &&
        data.map((video) => {
          const { id } = video;
          const { videoId } = id;
          return (
            <div key={video.id} className=''>
              <SearchRow id={videoId} info={video} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchList;
