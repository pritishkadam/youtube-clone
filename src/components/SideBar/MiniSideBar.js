import React from 'react';
import menuConfig from './menuConfig';
import { NavLink } from 'react-router-dom';

const MiniSideBar = () => {
  const menuItems = menuConfig();

  return (
    <div className='w-20 flex flex-col'>
      {menuItems &&
        menuItems.length !== 0 &&
        menuItems.map((element, index) => {
          const { title, icon, path } = element;
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                path && isActive
                  ? 'w-16 h-20 rounded-lg font-semibold bg-slate-200'
                  : ''
              }
            >
              <MiniSideBarOption title={title} icon={icon} />
            </NavLink>
          );
        })}
    </div>
  );
};

const MiniSideBarOption = (props) => {
  const { title, icon } = props;
  return (
    <div className='flex flex-col items-center justify-center w-16 h-20 p-3 rounded-lg hover:bg-slate-200'>
      <img alt='menu-icon' src={icon} className='w-5 h-5' />
      <span className='text-[10px] my-1'>{title}</span>
    </div>
  );
};

export default MiniSideBar;
