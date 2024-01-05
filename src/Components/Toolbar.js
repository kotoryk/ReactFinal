import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../Store/MyStore';
import '../App.css';
import YouTube from 'react-youtube';

function Toolbar() {
  const videoId = 'ojIKoKNBwN4';

  const youtubeOpts = {
    height: '120',
    width: '250',
    playerVars: {
      autoplay: 1,
      controls: 0,
      iv_load_policy: 3,
    },
  };

  const navigate = useNavigate();
  const setMyUser = useStore((store) => store.setMyUser);
  const myUser = useStore((store) => store.myUser);

  const handleLogout = () => {
    console.log(`Logging out user: ${myUser?.username || 'Unknown'}`);

    setMyUser(null);

    navigate('/auth');
  };

  return (
    <div className='Toolbar'>
      <div className='youtube'>
        <YouTube videoId={videoId} opts={youtubeOpts} />
      </div>
      <Link to='/index' className='Link'>
        Home Page
      </Link>
      <Link to='/profile' className='Link'>
        Profile
      </Link>
      <Link to='/createpost' className='Link'>
        Create Post
      </Link>
      <button onClick={handleLogout} className='LogOutBTN GenericBTN'>
        Log Out
      </button>
    </div>
  );
}

export default Toolbar;
