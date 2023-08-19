import React from 'react';

const CategoryHeader = (props) => {
  const { title, subscribeBtn, icon, details } = props;
  return (
    <div id='header' className='w-full h-28 flex border-b-2 bg-slate-100 font-roboto'>
      <div id='title' className='w-full flex items-center px-4 bg-transparent'>
        <img alt='icon' src={icon} className='w-20 rounded-full bg-transparent' />
        <div className='flex flex-col'>
        <h3 className='text-2xl font-medium mx-4 font-roboto'>{title}</h3>
        <h3 className='text-sm font-medium mx-4 text-slate-600 font-roboto'>{details}</h3>
        </div>
      </div>
      {subscribeBtn && (
        <div id='subscribe-btn' className='self-center'>
          <button className='bg-black text-white text-sm font-semibold px-3 py-2 mx-5 rounded-full hover:opacity-80'>Subscribe</button>
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;
