import React from 'react';
import commentConfig from './commentConfig';
import CommentsList from './CommentsList';

const CommentListContainer = (props) => {
  const { videoInfo } = props;
  const { statistics } = videoInfo;
  const { commentCount } = statistics;

  const { items } = commentConfig();

  const commentCountStr =
    commentCount !== undefined
      ? Number(commentCount).toLocaleString('en-US')
      : 0;

  return (
    <div className='w-full px-2'>
      <h3 className='my-6 text-lg font-light'>{commentCountStr} Comments</h3>
      {items &&
        items.map((element) => {
          const { id, snippet, replies } = element;
          const { topLevelComment } = snippet;
          const { snippet: topLevelSnippet } = topLevelComment;
          const comments = replies?.comments;
          const commentsData = {
            id,
            snippet: topLevelSnippet,
            replies: comments ? comments : null,
          };
          return <CommentsList key={id} data={commentsData} />;
        })}
    </div>
  );
};

export default CommentListContainer;
