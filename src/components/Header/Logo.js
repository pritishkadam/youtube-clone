import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg';

const Logo = () => {
  return (
    <div id='logo' className='w-24 m-2 ml-3'>
      <button>
        <Link to='/'>
          <img alt='logo' src={logo} className='w-full cursor-pointer' />
        </Link>
      </button>
    </div>
  );
};

export default Logo;
