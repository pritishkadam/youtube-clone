import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../../util/constants';
import { cachedResults } from '../../util/cacheSearchSlice';
import SearchBar from './SearchBar';
import { toggle_menu } from '../../util/navSlice';
import { searchedQueries } from '../../util/searchedQuerySlice';
import Menu from './Menu';
import Logo from './Logo';
import SignInButton from './SignInButton';
import mic from './../../assets/mic-icon.svg';

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const searchedResults = useSelector((store) => store.searchedQuery);

  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredText, setHoveredText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [callAPI, setCallAPI] = useState(false);

  const getSearchSuggestions = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(cachedResults({ [searchQuery]: data[1] }));
    } catch (e) {
      setSuggestions([]);
    }
  }, [dispatch, searchQuery, setSuggestions]);

  useEffect(() => {
    if (callAPI) {
      const timer = setTimeout(() => {
        if (searchCache && searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else if (searchQuery !== '') {
          getSearchSuggestions();
        }
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    }
    if (searchQuery === '') {
      setSuggestions([]);
    }
  }, [getSearchSuggestions, searchCache, callAPI, searchQuery]);

  /**
   * 1st key press - i
   * - render the component
   * - useEffect()
   * - start timer and make an API call after 200ms
   *
   * 2nd key press - ip (if key pressed after 200ms)
   * - re-render the component(destroy the existing component and then re-render, but here on running the return function the timer is already removed)
   * - useEffect()
   * - start new timer and make an API call again after 200ms
   *
   * 3rd key press - iph (if key pressed before 200ms)
   * - re-render the component(destroy the existing component, so run the clearTimeout to remove the existing timer and then re-render)
   * - useEffect()
   * - start new timer and make an API call again after 200ms
   *
   */

  const toggleMenuHandler = () => {
    dispatch(toggle_menu());
  };

  const handleSearchClick = (searchText) => {
    setShowSuggestions(false);
    setHoveredText('');
    setSearchQuery(searchText);
    dispatch(searchedQueries(searchText));
  };

  return (
    <div className='flex fixed top-0 w-full z-20 justify-between items-center bg-white px-4 font-roboto h-14'>
      {/* Menu and Logo */}
      <div id='menu-and-logo' className='flex mt-1'>
        <Menu toggleMenuHandler={toggleMenuHandler} />
        <Logo />
      </div>

      {/* Search Bar */}
      <div id='center' className='flex w-8/12 justify-center gap-4'>
        <div id='searchBar' className='flex flex-col w-8/12 justify-center'>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            handleSearchClick={handleSearchClick}
            setCallAPI={setCallAPI}
            hoveredText={hoveredText}
            suggestionsList={suggestions}
            setHoveredText={setHoveredText}
            searchedResults={searchedResults}
          />
        </div>
        <button
          onClick={() => {
            handleSearchClick(searchQuery);
          }}
          className='w-10 h-10 bg-[#f8f8f8] px-2 py-2 rounded-full cursor-pointer hover:bg-slate-200'
        >
          <img alt='searchMic' src={mic} className='w-5 m-auto' />
        </button>
      </div>

      {/* Account Settings */}
      <div id='settings' className='flex mr-4'>
        <SignInButton />
      </div>
    </div>
  );
};

export default Header;
