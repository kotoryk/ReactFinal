import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SinglePost({ post }) {
  const { imageUrl, title, username, timestamp } = post;

  return (
    <div className='SinglePost'>
      <div className='Post'>
        <Link to={`/post/${post.id}`} className='Link'>
          <img src={imageUrl} alt={title} />
          <div>
            <h1>{title}</h1>
          </div>
        </Link>

        <Link to={`/user/${username}`} className='Link'>
          <div>
            <h2>{username}</h2>
          </div>
        </Link>

        <p>{timestamp}</p>
      </div>
    </div>
  );
}

export default SinglePost;
