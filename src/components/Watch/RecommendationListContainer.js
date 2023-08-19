import React from 'react';
import RecommendationList from './RecommendationList';
import musicVideosConfig from '../../util/musicVideosConfig';

const RecommendationListContainer = () => {
  const videos = musicVideosConfig();
  return <RecommendationList data={videos.items} />;
};

export default RecommendationListContainer;
