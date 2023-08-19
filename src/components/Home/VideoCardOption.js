import React from 'react';
import videoCardOptions from './videoOptionsConfig';

const videoOptions = videoCardOptions();

const VideoCardOption = () => {
  return (
    <div className='w-40 flex flex-col bg-white text-black py-2 absolute right-0 z-10 rounded-lg shadow-lg'>
      {videoOptions &&
        videoOptions.length !== 0 &&
        videoOptions.map((element, index) => {
          const { title, icon } = element;
          return (
            <h3
              className='p-2 px-4 hover:bg-slate-200 flex cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img
                alt={`option-${index}`}
                src={icon}
                className='w-4 mr-2 text-black'
              />
              <span>{title}</span>
            </h3>
          );
        })}
    </div>
  );
};

export default VideoCardOption;
