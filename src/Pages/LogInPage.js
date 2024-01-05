import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store/MyStore';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const usernameInp = useRef();
  const passwordInp = useRef();

  const users = useStore((store) => store.users);
  const setMyUser = useStore((store) => store.setMyUser);

  const [error, setError] = useState(null);

  function validateCredentials(username, password) {
    const loggedInUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!loggedInUser) {
      setError('Invalid credentials. Please check your username and password.');
      return false;
    }

    return true;
  }

  function login() {
    const username = usernameInp.current.value;
    const password = passwordInp.current.value;

    const loggedInUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validateCredentials(username, password)) {
      setMyUser(loggedInUser);
      console.log(loggedInUser);
      setError(null);
      navigate('/index');
    }
  }

  return (
    <div className='LogInPage'>
      <div className='LogInPageContainer'>
        <input
          type='text'
          ref={usernameInp}
          placeholder='username'
          className='Input'
        />
        <input
          type='password'
          ref={passwordInp}
          placeholder='password'
          className='Input'
        />

        <button onClick={login} className='GenericBTN'>
          Login
        </button>
        {error && <div style={{ color: 'white' }}>{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
