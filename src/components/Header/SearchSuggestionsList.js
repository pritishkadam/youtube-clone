import React from 'react';
import { Link } from 'react-router-dom';
import SearchSuggestionRow from './SearchSuggestionRow';

const SearchSuggestionsList = (props) => {
  const {
    searchQuery,
    suggestionsList,
    setCallAPI,
    setHoveredText,
    handleSearchClick,
    searchedResults,
  } = props;

  const data = searchQuery === '' ? searchedResults : suggestionsList;

  const isQuerySearched =
    searchQuery === '' && searchedResults.length !== 0 ? true : false;

  const handleMouseOver = (value) => {
    setCallAPI(false);
    setHoveredText(value);
  };

  return (
    <>
      {data && data.length !== 0 && searchQuery && (
        <div
          id='searchSuggestion'
          className='absolute top-12 w-full bg-white border rounded-xl'
        >
          {data?.map((element) => (
            <>
              {element && (
                <div
                  key={element}
                  onMouseOver={() => {
                    handleMouseOver(element);
                  }}
                  onMouseLeave={() => {
                    setHoveredText('');
                  }}
                  onClick={() => {
                    handleSearchClick(element);
                  }}
                >
                  <Link key={element} to={`/results?search_query=${element}`}>
                    <SearchSuggestionRow
                      element={element}
                      isQuerySearched={isQuerySearched}
                    />
                  </Link>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchSuggestionsList;
