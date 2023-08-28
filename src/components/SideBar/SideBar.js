import React from 'react';
import { useSelector } from 'react-redux';
import menuConfig from './menuConfig';
import MenuButtonsList from './MenuButtonsList';
import SignInButton from '../Header/SignInButton';
import exploreSectionConfig from './exploreSectionConfig';
import youtubeSectionConfig from './youtubeSectionConfig';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  
  // Early Return
  if (!isMenuOpen) return null;

  const menuItems = menuConfig();
  const exploreSectionItems = exploreSectionConfig();
  const youtubeSectionItems = youtubeSectionConfig();
  
  return (
    <nav className={`w-56 py-3 max-h-screen overflow-hidden hover:overflow-y-scroll sticky top-14 pb-14`}>
      <ul>
        <>
          {menuItems && <MenuButtonsList listItems={menuItems} />}
          <SignIn />
          <hr className='my-3' />
          {exploreSectionItems && (
            <MenuButtonsList sectionTitle={'Explore'} listItems={exploreSectionItems} />
          )}
          {youtubeSectionItems && (
            <MenuButtonsList sectionTitle={'More from YouTube'} listItems={youtubeSectionItems} />
          )}
        </>
      </ul>
    </nav>
  );
};

const SignIn = () => {
  return (
    <div className='w-full flex flex-col font-roboto px-6 py-1 gap-4'>
      <h3 className='text-sm pr-2'>
        Sign in to like videos, comment, and subscribe.
      </h3>
      <SignInButton />
    </div>
  );
};

export default SideBar;
