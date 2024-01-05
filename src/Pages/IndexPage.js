import React, { useState } from 'react';
import { usePostStore } from '../Store/MyStore';
import SinglePost from '../Components/SinglePost';
import '../App.css';

function IndexPage() {
  const { posts } = usePostStore();
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortBy(null);
    } else {
      setSortBy(criteria);
    }
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'timestamp') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    }

    return 0;
  });

  return (
    <div className='IndexPage'>
      <div className='Sort'>
        <button className='GenericBTN' onClick={() => handleSort('title')}>
          Sort posts by title
        </button>
        <button className='GenericBTN' onClick={() => handleSort('timestamp')}>
          Sort posts by upload time
        </button>
      </div>
      <div className='PostContainer'>
        {sortedPosts.map((post, index) => (
          <div key={index}>
            <SinglePost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
