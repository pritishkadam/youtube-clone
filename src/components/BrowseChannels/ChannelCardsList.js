import React from 'react';
import ChannelCards from './ChannelCard';

const ChannelCardsList = (props) => {
  const { config } = props;
  const { section, data, divider } = config;
  console.log('Data: ', data);
  return (
    <div className='flex flex-col text-center mx-3 mt-1'>
      <div
        id='section'
        className='flex w-full my-4 font-semibold text-lg tracking-tight'
      >
        {section && <h3>{section}</h3>}
      </div>
      <div id='channels' className='flex'>
        {data &&
          data.length !== 0 &&
          data.map((element) => {
            return <ChannelCards data={element} />;
          })}
      </div>
      {divider && <hr className='my-6 bg-slate-200' />}
    </div>
  );
};

export default ChannelCardsList;
