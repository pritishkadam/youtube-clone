import React from 'react';
import { useSelector } from 'react-redux';
import MiniSideBar from './MiniSideBar';
import SideBar from './SideBar';

const SideBarContainer = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  return <div>{isMenuOpen ? <SideBar /> : <></>}</div>;
};

export default SideBarContainer;
