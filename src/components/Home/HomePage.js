import React from 'react';
import MiniSideBar from '../SideBar/MiniSideBar';
import HomeContainer from './HomeContainer';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  return (
    <div className={isMenuOpen ? 'flex w-5/6' : 'flex w-full'}>
      <HomeContainer />
    </div>
  );
};

export default HomePage;
