import React from 'react';

const Button = (props) => {
  const { name } = props;

  return (
    <div>
      <button className='bg-black text-white m-3 px-4 py-2 rounded-full'>
        {name}
      </button>
    </div>
  );
};

export default Button;
