import React from 'react';

const MenuButton = (props) => {
  const { title, icon } = props;
  return (
    <div
      id='menu-btn'
      className='w-11/12 h-10 px-2 mx-2 hover:bg-slate-200 hover:rounded-lg'
    >
      <button className='w-full h-full text-base flex py-2 px-1'>
        <img alt='menu-btn' src={icon} className='w-5 h-5 mr-6 bg-transparent' />
        <span className='text-sm font-roboto'>{title}</span>
      </button>
    </div>
  );
};

export default MenuButton;
