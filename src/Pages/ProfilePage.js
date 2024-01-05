import React, { useState } from 'react';
import { useStore, usePostStore } from '../Store/MyStore';
import '../App.css';

function ProfilePage() {
  const { myUser, setMyUser } = useStore((store) => store);
  const [newUsername, setNewUsername] = useState('');
  const { posts } = usePostStore();

  const handleUsernameChange = () => {
    if (newUsername.trim() !== '') {
      const updatedUser = { ...myUser, username: newUsername };

      setMyUser(updatedUser);

      const updatedPosts = posts.map((post) => {
        if (post.username === myUser.username) {
          return { ...post, username: newUsername };
        }
        return post;
      });

      usePostStore.getState().setPosts(updatedPosts);

      console.log(
        `Username changed: Old username - ${myUser.username}, New username - ${updatedUser.username}`
      );
      setNewUsername('');
    }
  };

  return (
    <div className='ProfilePage'>
      <h1>User name: {myUser.username}</h1>
      <input
        type='text'
        placeholder='New user name'
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className='Input'
      />
      <button onClick={handleUsernameChange} className='GenericBTN'>
        Change user name
      </button>
    </div>
  );
}

export default ProfilePage;
