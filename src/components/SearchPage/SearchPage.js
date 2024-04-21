import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../../util/constants';
import SearchRowContainer from './SearchRowContainer';
import ErrorPage from '../ErrorPage';
import SearchSkeletonList from './SearchSkeletonList';

const SearchResults = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get('search_query');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(false);

  const getSearchResults = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + query);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        const data = await response.json();
        setSearchResults(data.items);
      }
    } catch (e) {
      setSearchResults(null);
      setError(true);
    }
  }, [query, setSearchResults]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return (
    <>
      {error && <ErrorPage />}
      {searchResults === null && !error && <SearchSkeletonList />}
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
