import React, { useState } from 'react';
import { usePostStore, useStore } from '../Store/MyStore';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CreatePostPage() {
  const { addPost } = usePostStore();
  const { myUser } = useStore();
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [creationMessage, setCreationMessage] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = () => {
    const timestamp = new Date().toLocaleString();
    addPost({
      imageUrl,
      title,
      username: myUser.username,
      timestamp,
    });
    setImageUrl('');
    setTitle('');
    setCreationMessage('Post has been created!');

    setTimeout(() => {
      navigate('/index');
    }, 1000);
  };

  return (
    <div className='CreatePostPage'>
      <input
        type='text'
        placeholder='Image URL'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className='Input'
      />
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='Input'
      />
      <button onClick={handleCreatePost} className='GenericBTN'>
        Create Post
      </button>
      {creationMessage && <p>{creationMessage}</p>}
    </div>
  );
}

export default CreatePostPage;
