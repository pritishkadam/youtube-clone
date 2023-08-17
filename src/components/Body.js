import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.js';

const Body = () => {
  return (
    <div>
      <Header />
      <div className='flex w-full h-full flex-grow relative top-14 px-1'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
