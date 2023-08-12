import React from 'react';

const MiniSideBar = () => {
  return (
    <div className='w-48 p-4 border'>
      <h1 className='font-bold'>MiniSideBar</h1>
      <ul>
        <li className='m-1'>Home</li>
        <li className='m-1'>Shorts</li>
        <li className='m-1'>Videos</li>
        <li className='m-1'>Live</li>
      </ul>
    </div>
  );
};

export default MiniSideBar;
