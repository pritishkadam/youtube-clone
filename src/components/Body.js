import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.js';
import SideBarContainer from './SideBar/SideBarContainer';

const Body = () => {
  return (
    <div>
      <Header />
      <div className='flex w-full h-full flex-grow relative top-14 px-1 font-roboto'>
        <SideBarContainer />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
