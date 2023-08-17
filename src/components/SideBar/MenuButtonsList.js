import React from 'react';
import MenuButton from './MenuButton';
import { NavLink } from 'react-router-dom';

const MenuButtonsList = (props) => {
  const { sectionTitle, listItems } = props;
  return (
    <>
      {sectionTitle && <SectionTitle sectionTitle={sectionTitle} />}
      {listItems &&
        listItems.map((item) => {
          const { title, icon, path, divider } = item;
          return (
            <div>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  path && isActive ? 'rounded-lg font-semibold bg-slate-200' : ''
                }
              >
                <MenuButton title={title} icon={icon} />
              </NavLink>
              {divider && <hr className='my-3' />}
            </div>
          );
        })}
    </>
  );
};

const SectionTitle = (props) => {
  const { sectionTitle } = props;
  return <div className='py-2 px-5 text-base'>{sectionTitle}</div>;
};

export default MenuButtonsList;
