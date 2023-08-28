import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_URL } from '../../util/constants';

const useGetVideoDetails = (startData, setStartData, setVideoDetails, id) => {
  const [data, setData] = useState({
    error: false,
    errorMessage: '',
    data: undefined,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEOS_URL + '&id=' + id);
        if (response.status !== 200) {
          setVideoDetails(null);
          throw new Error();
        } else {
          setStartData(false);
          const data = await response.json();
          setVideoDetails(data?.items[0]);
        }
      } catch (e) {
        setStartData(false);
        setData({
          error: true,
          errorMessage: e,
          data: undefined,
        });
      }
    };
    if (startData) {
      getData();
    }
  }, [startData, setStartData, setVideoDetails, id]);
  return data;
};

export default useGetVideoDetails;
