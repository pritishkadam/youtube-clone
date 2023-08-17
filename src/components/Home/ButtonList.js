import React, { useEffect, useState } from 'react';
import Button from './Button';
// import { VIDEO_CATEGORIES } from '../util/constants';
import videoCategoriesConfig from './videoCategoriesConfig';

const ButtonList = (props) => {
  const { setCategory} = props;
  const [videoCategories, setVideoCategories] = useState([]);

  const getVideoCategories = async () => {
    // const response = await fetch(VIDEO_CATEGORIES);
    // const data = await response.json();
    // console.log('data: ', data);
    const categories = videoCategoriesConfig();
    setVideoCategories(categories.items);
  };

  useEffect(() => {
    getVideoCategories();
  }, []);

  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 800;
  };

  const scrollRight = (e) => {
    console.log('Clicked right button: ', e);
    document.getElementById('content').scrollRight += 800;
  };

  return (
    <div id='buttonList' className='grid mx-4 mb-6 sticky top-14 bg-white z-10'>
      <div className='flex justify-start mb-1'>
        {videoCategories &&
          videoCategories.map((category) => {
            const { id, snippet } = category;
            return <Button key={id} name={snippet.title} />;
          })}
      </div>
    </div>
  );
};

export default ButtonList;
