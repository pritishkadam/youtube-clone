import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from './../../assets/search-icon.svg';

const SearchBar = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    handleSearchClick,
    setCallAPI,
    hoveredText,
  } = props;

  const [showIcon, setShowIcon] = useState(false);

  const handleOnChange = (e) => {
    setCallAPI(true);
    setSearchQuery(e.target.value);
  };

  return (
    <div id='searchBox' className='flex flex-row'>
      <div
        onBlur={() => {
          setShowIcon(false);
        }}
        className='w-96 ml-6 h-10 flex flex-1 leading-6 font-normal border border-[#d3d3d3] outline-none focus-visible:border focus-visible:border-[#1c62b9] bg-[#f8f8f8] pl-4 pr-1 rounded-l-full'
      >
        {showIcon && <img alt='search' src={search} className='w-5 border mr-10' />}
        <input
          type='text'
          className='w-96 h-10 bg-transparent leading-6 font-normal outline-none pr-1'
          value={hoveredText ? hoveredText : searchQuery}
          onChange={handleOnChange}
          onFocus={() => {
            setShowIcon(true);
            setShowSuggestions(true);
          }}
          placeholder='Search'
        />
      </div>
      <Link
        to={
          searchQuery.length !== 0 ? '/results?search_query=' + searchQuery : ''
        }
      >
        <button
          onClick={() => {
            handleSearchClick(searchQuery);
          }}
          className='w-16 h-10 border border-[#d3d3d3] bg-[#f8f8f8] px-[1.40rem] py-2 rounded-r-full cursor-pointer'
        >
          <img alt='search' src={search} className='w-6' />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
