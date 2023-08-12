import React from 'react';
import MiniSideBar from './SideBar/MiniSideBar';
import HomeContainer from './HomeContainer';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  console.log('HomePage: ', !isMenuOpen);
  return (
    <div className='flex'>
      {!isMenuOpen ? <MiniSideBar /> : <></>}
      <HomeContainer />
    </div>
  );
};

export default HomePage;
