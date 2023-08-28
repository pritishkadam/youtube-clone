import React from 'react';
import RecommendedVideo from './RecommendedVideo';

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
