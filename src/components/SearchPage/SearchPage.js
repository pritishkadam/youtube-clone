import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../../util/constants';
import SearchRowContainer from './SearchRowContainer';
import ErrorPage from '../ErrorPage';

const SearchResults = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get('search_query');
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = useCallback(async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + query);
    if (response.status !== 200) {
      setSearchResults(null);
    } else {
      const data = await response.json();
      setSearchResults(data.items);
    }
  }, [query, setSearchResults]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  if (searchResults === null) return <ErrorPage />;
  return (
    <>
      <div className='flex flex-col'>
        {searchResults &&
          searchResults.length !== 0 &&
          searchResults.map((searchData, index) => {
            return <SearchRowContainer key={index} searchData={searchData} />;
          })}
      </div>
    </>
  );
};

export default SearchResults;
