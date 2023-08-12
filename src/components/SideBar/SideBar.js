import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className='w-48 p-4 border'>
      <ul>
        <li className='m-1'>
          <Link to='/'>Home</Link>
        </li>
        <li className='m-1'>Shorts</li>
        <li className='m-1'>Videos</li>
        <li className='m-1'>Live</li>
      </ul>
      <h1 className='font-bold my-4'>Subscription</h1>
      <ul>
        <li className='m-1'>Music</li>
        <li className='m-1'>Sports</li>
        <li className='m-1'>Gaming</li>
        <li className='m-1'>Movies</li>
      </ul>
      <h1 className='font-bold my-4'>Watch Later</h1>
      <ul>
        <li className='m-1'>Documentaries</li>
        <li className='m-1'>Horror</li>
        <li className='m-1'>Mystery</li>
        <li className='m-1'>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
