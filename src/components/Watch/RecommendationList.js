import React from 'react';
import RecommendedVideo from './RecommendedVideo';
import { musicConfig } from '../BrowseChannels/browseChannelsConfig';

const RecommendationList = (props) => {
  const { data } = props;
  return (
    <div className='my-2'>
      {data &&
        data.map((element) => {
          return <RecommendedVideo info={element} />;
        })}
    </div>
  );
};

export default RecommendationList;
