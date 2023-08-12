import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const categories = [
    'All',
    'Gaming',
    'Songs',
    'Cricket',
    'Soccer',
    'Cooking',
    'News',
  ];
  return (
    <div className='flex'>
      {categories.map((category, index) => {
        return <Button key={index} name={category} />;
      })}
    </div>
  );
};

export default ButtonList;
