import React from 'react';

const Button = (props) => {
  const { id, name, categoryID, setCategoryID } = props;

  const handleOnSelect = () => {
    setCategoryID(id);
  };

  return (
    <div>
      <button
        onClick={handleOnSelect}
        className={`text-sm h-8 whitespace-nowrap m-2 mb-1 px-3 rounded-lg ${
          id === categoryID ? 'bg-black text-white' : 'bg-gray-200 text-black'
        } `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
