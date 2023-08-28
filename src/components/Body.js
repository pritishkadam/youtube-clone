import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header.js';
import SideBarContainer from './SideBar/SideBarContainer';
import SideBar from './SideBar/SideBar.js';

const Body = () => {
  const { pathname } = useLocation();
  const isWatchPage = pathname.includes('watch') ? true : false;

  return (
    <div>
      <Header />
      <div className='flex w-full h-full flex-grow relative top-14 px-1 font-roboto'>
        {isWatchPage ? <div className='z-50 fixed bg-white left-0'><SideBar /></div> : <SideBarContainer />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
