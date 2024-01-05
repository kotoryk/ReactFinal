import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../Store/MyStore';
import SinglePost from '../Components/SinglePost';
import '../App.css';

function SingleUserPage() {
  const { posts } = usePostStore();
  const { username } = useParams();

  const userPosts = posts.filter((post) => post.username === username);

  return (
    <div className='SingleUserPage'>
      <h2>Posts by {username}</h2>
      <div className='SingleUserPageContainer'>
        {userPosts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default SingleUserPage;
