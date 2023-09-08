import React, { useEffect, useState } from 'react';
import Button from './Button';
import videoCategoriesConfig from './videoCategoriesConfig';

const ButtonList = (props) => {
  const { categoryID, setCategoryID } = props;
  const [videoCategories, setVideoCategories] = useState([]);

  const getVideoCategories = async () => {
    const categories = videoCategoriesConfig();
    setVideoCategories(categories.items);
  };

  useEffect(() => {
    getVideoCategories();
  }, []);

  return (
    <div id='buttonList' className='grid mx-4 mb-6 sticky top-14 bg-white z-10'>
      <div className='flex justify-start mb-1'>
        {videoCategories &&
          videoCategories.map((category) => {
            const { id, snippet } = category;
            return (
              <Button
                key={id}
                id={id}
                name={snippet.title}
                categoryID={categoryID}
                setCategoryID={setCategoryID}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ButtonList;
