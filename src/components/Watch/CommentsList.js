import React from 'react';
import Comment from './Comment';

const CommentsList = (props) => {
  const { data } = props;
  const { id, snippet, replies } = data;
  return (
    <div className='my-4' key={id}>
      <Comment info={snippet} />
      {replies !== null &&
        replies !== undefined &&
        replies.map((element) => {
          return <div className='px-10'>
            <CommentsList data={element} />
          </div>;
        })}
    </div>
  );
};

export default CommentsList;
