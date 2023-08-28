import React from 'react';
import { Link } from 'react-router-dom';
import search from './../../assets/search-icon.svg';
import SearchSuggestionsList from './SearchSuggestionsList';
import cancelBtn from './../../assets/cancel-button.svg';

const SearchBar = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    handleSearchClick,
    setCallAPI,
    hoveredText,

    suggestionsList,
    setHoveredText,
    searchedResults,
  } = props;

  const handleOnChange = (e) => {
    setCallAPI(true);
    setSearchQuery(e.target.value);
  };

  return (
    <div id='searchBox' className='flex flex-row flex-1 w-full'>
      <div className='relative h-10 flex flex-1 leading-6 font-normal border border-[#d3d3d3] outline-none focus-visible:border focus-visible:border-[#1c62b9] bg-[#f8f8f8] pr-1 rounded-l-full'>
        <div className='w-full flex'>
          <input
            type='text'
            className='w-16 sm:w-28 md:w-full lg:w-full xl:w-full h-10 bg-transparent leading-6 font-normal outline-none pr-1 pl-4'
            value={hoveredText ? hoveredText : searchQuery}
            onChange={handleOnChange}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            placeholder='Search'
          />
          {searchQuery !== '' && (
            <button
              className='rounded-full hover:bg-slate-200 p-3'
              onClick={() => {
                setSearchQuery('');
              }}
            >
              <img alt='cancelBtn' src={cancelBtn} className='w-4' />
            </button>
          )}
        </div>
        {showSuggestions && (
          <SearchSuggestionsList
            searchQuery={searchQuery}
            suggestionsList={suggestionsList}
            setCallAPI={setCallAPI}
            setSearchQuery={setSearchQuery}
            handleSearchClick={handleSearchClick}
            setHoveredText={setHoveredText}
            searchedResults={searchedResults}
          />
        )}
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
