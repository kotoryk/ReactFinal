import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../Store/MyStore';
import '../App.css';
import { Link } from 'react-router-dom';

function SinglePostPage() {
  const { id } = useParams();
  const { posts } = usePostStore();

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>No post found with ID: {id}</div>;
  }

  const { imageUrl, title, username, timestamp } = post;

  return (
    <div className='SinglePostPage'>
      <div className='SinglePost'>
        <div className='SinglePostImage'>
          <img src={imageUrl} alt={title} />
        </div>

        <div className='PostDetails'>
          <h1>{title}</h1>
          <Link to={`/user/${username}`} className='Link'>
            <h2>{username}</h2>
          </Link>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
