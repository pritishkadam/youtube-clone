import channel_logo from './../../assets/channel-logo.svg';
import likeButton from './../../assets/like-button.svg';
import dislikeButton from './../../assets/dislike-button.svg';
import shareButton from './../../assets/share-btn.svg';
import youtube_verified from './../../assets/youtube_verified.svg';

const VideoDetailsHeader = (props) => {
  const { logo, channelTitle, subscriberCount, likeCountStr } = props;
  return (
    <>
      <div id='start' className='flex items-center'>
        <img
          alt='channel-logo'
          src={logo ? logo : channel_logo}
          className='w-10 rounded-full self-center'
        />
        <div id='channel-details' className='flex flex-col mx-2'>
          <h2 className=' flex font-semibold text-base leading-6'>
            {channelTitle}
            <img
              alt='verified'
              src={youtube_verified}
              className='w-3 ml-1 mx-2'
            />
          </h2>
          <h3 className='text-xs text-[#606060]'>
            {subscriberCount} subscribers
          </h3>
        </div>
        <div id='subscribe-btn' className='self-center'>
          <button className='font-roboto bg-black text-white text-sm font-semibold px-3 py-2 mx-5 rounded-full hover:opacity-80'>
            Subscribe
          </button>
        </div>
      </div>
      <div id='end' className='flex gap-4'>
        <div
          id='like-dislike-btn'
          className='flex rounded-full h-8 self-center mx-1 bg-slate-100'
        >
          <button
            id='like-btn'
            className='flex px-2 py-2 self-center rounded-l-full border-r-2 hover:bg-slate-200'
          >
            <img src={likeButton} alt='like-btn' className='w-5 mx-1' />
            <span className='text-xs self-center font-semibold'>{likeCountStr}</span>
          </button>
          <button
            id='dislike-btn'
            className='flex px-2 py-2 self-center rounded-r-full hover:bg-slate-200'
          >
            <img src={dislikeButton} alt='dislike-btn' className='w-5 mx-1' />
          </button>
        </div>
        <div
          id='share-btn'
          className='flex rounded-full h-8 self-center bg-slate-100 hover:bg-slate-200'
        >
          <button id='like-btn' className='flex px-2 py-2 self-center mx-1'>
            <img src={shareButton} alt='like-btn' className='w-5 mx-1' />
            <span className='text-sm font-semibold'>Share</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default VideoDetailsHeader;
