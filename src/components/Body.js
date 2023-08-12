import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.js';

const Body = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
