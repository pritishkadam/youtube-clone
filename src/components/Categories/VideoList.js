import React, { useCallback, useEffect, useState } from 'react';
import VideoRow from './VideoRow';
import { Link } from 'react-router-dom';
import SkeletonList from './SkeletonList';
import { YOUTUBE_URL } from '../../util/constants';
import ErrorPage from '../ErrorPage';

const VideoList = (props) => {
  const { info, title, categoryID } = props;
  const [videos, setVideos] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const getVideos = useCallback(
    async (categoryID) => {
      if (info !== null) {
        setFetching(false);
        setVideos(info.items);
      } else {
        try {
          const url = `${YOUTUBE_URL}&videoCategoryId=${categoryID}`;
          const response = await fetch(url);
          setFetching(false);
          if (response.status !== 200) {
            setVideos(null);
            setError(true);
          } else {
            const data = await response.json();
            setVideos(data.items);
          }
        } catch (e) {
          setError(true);
        }
      }
    },
    [info, setFetching, setVideos]
  );

  useEffect(() => {
    getVideos(categoryID);
  }, [getVideos, categoryID]);

  if (videos && videos.length === 0) return null;

  return (
    <>
      {error && <ErrorPage />}
      {videos === null && !error && <SkeletonList />}
      {!fetching && !error && (
        <div className='w-10/12 flex flex-col my-2 font-roboto'>
          {title && (
            <div>
              <h3 className='mx-5 my-2 font-semibold'>{title}</h3>
            </div>
          )}
          {videos &&
            videos.length !== 0 &&
            videos.map((video) => {
              return (
                <div key={video.id}>
                  <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoRow info={video} />
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default VideoList;
