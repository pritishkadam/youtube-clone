import React from 'react';
import oldSearch from './../../assets/old-search.svg';
import newSearch from './../../assets/search-icon.svg';

const SearchSuggestionRow = (props) => {
  const { element, isQuerySearched } = props;
  return (
    <div className='w-full flex px-5 py-2 hover:bg-slate-100 hover:cursor-pointer'>
      <img
        alt='search-icon'
        src={isQuerySearched ? oldSearch : newSearch}
        className='w-6'
      />
      <span className='ml-2 text-lg'>{element}</span>
    </div>
  );
};

export default SearchSuggestionRow;
