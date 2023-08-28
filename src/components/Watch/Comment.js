import React from 'react';
import timeSince from '../../util/timeSince';
import likeButton from './../../assets/like-button.svg';
import dislikeButton from './../../assets/dislike-button.svg';

const Comment = (props) => {
  const { info } = props;
  const {
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    updatedAt,
  } = info;

  const likeCountStr = likeCount
  ? new Intl.NumberFormat('en-GB', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(likeCount)
  : 0;

  const updatedDate = new Date(updatedAt);

  const updatedDateStr = timeSince(updatedDate);

  return (
    <div className='flex gap-2'>
      <img
        alt='profile-icon'
        src={authorProfileImageUrl}
        className='w-10 rounded-full self-start'
      />
      <div className='flex flex-col'>
        <div className='flex gap-2 items-center'>
          <h2 className='text-xs font-semibold'>{authorDisplayName}</h2>
          <h2 className='text-xs text-[#606060]'>{updatedDateStr}</h2>
        </div>
        <h3 className='text-sm'>{textOriginal}</h3>
        <div id='end' className='flex gap-4 my-1'>
          <div
            id='like-dislike-btn'
            className='flex rounded-full h-8 self-center mx-1 gap-2'
          >
            <div className='flex items-center'>
              <button
                id='like-btn'
                className='flex px-1 py-2 self-center rounded-full hover:bg-slate-200'
              >
                <img src={likeButton} alt='like-btn' className='w-4 mx-1' />
              </button>
              <span className='text-xs text-[#606060]'>{likeCountStr}</span>
            </div>
            <button
              id='dislike-btn'
              className='flex px-1 py-2 self-center rounded-full hover:bg-slate-200'
            >
              <img src={dislikeButton} alt='dislike-btn' className='w-4 mx-1' />
            </button>
          </div>
          <div
            id='share-btn'
            className='flex rounded-full h-8 self-center hover:bg-slate-200'
          >
            <button id='like-btn' className='flex px-2 py-2 self-center mx-1'>
              <span className='text-xs font-semibold'>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
