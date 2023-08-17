import React from 'react';

const Button = (props) => {
  const { name } = props;

  return (
    <div>
      <button className='bg-black text-sm h-8 whitespace-nowrap text-white m-2 mb-1 px-3 rounded-lg'>
        {name}
      </button>
    </div>
  );
};

export default Button;
