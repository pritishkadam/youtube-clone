import React from 'react';
import menu from './../../assets/menu.svg';

const Menu = (props) => {
    const {toggleMenuHandler} = props;
  return (
    <div id='burger-menu' className='w-10'>
      <button
        className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'
        onClick={() => {
          toggleMenuHandler();
        }}
      >
        <img alt='menu' src={menu} className='w-6' />
      </button>
    </div>
  );
};

export default Menu;
