import React, { useEffect, useState } from 'react';
import profile from './../../assets/profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../../util/constants';
import { cachedResults } from '../../util/cacheSearchSlice';
import SearchBar from './SearchBar';
import { toggle_menu } from '../../util/navSlice';
import SearchSuggestionsList from './SearchSuggestionsList';
import { searchedQueries } from '../../util/searchedQuerySlice';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const searchedResults = useSelector((store) => store.searchedQuery);

  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredText, setHoveredText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [callAPI, setCallAPI] = useState(false);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(cachedResults({ [searchQuery]: data[1] }));
  };

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
  }, [callAPI, searchQuery]);

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
   * 3rd key press - ip (if key pressed before 200ms)
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
    <div className='flex justify-between items-center bg-white px-4 font-roboto h-14'>
      {/* Menu and Logo */}
      <div id='menu-and-logo' className='flex mt-1'>
        <Menu toggleMenuHandler={toggleMenuHandler} />
        <Logo />
      </div>

      {/* Search Bar */}
      <div id='searchBar' className='flex flex-col w-1/2 ml-10 justify-center'>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          handleSearchClick={handleSearchClick}
          setCallAPI={setCallAPI}
          hoveredText={hoveredText}
        />
        {showSuggestions && (
          <SearchSuggestionsList
            searchQuery={searchQuery}
            suggestionsList={suggestions}
            setCallAPI={setCallAPI}
            setSearchQuery={setSearchQuery}
            handleSearchClick={handleSearchClick}
            setHoveredText={setHoveredText}
            searchedResults={searchedResults}
          />
        )}
      </div>

      {/* Account Settings */}
      <div id='settings' className='flex mr-4'>
        <img alt='profile' src={profile} className='w-8 cursor-pointer' />
      </div>
    </div>
  );
};

export default Header;
