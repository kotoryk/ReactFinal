import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store/MyStore';
import '../App.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const usernameInp = useRef();
  const passwordInp = useRef();
  const confirmPasswordInp = useRef();

  const users = useStore((store) => store.users);
  const registerUser = useStore((store) => store.register);
  const setMyUser = useStore((store) => store.setMyUser);

  const [error, setError] = useState(null);

  function validateUsername(username) {
    const isRegistered = users.some((user) => user.username === username);

    if (isRegistered) {
      setError('Username is already registered.');
      return false;
    }

    if (username.length < 4 || username.length > 20) {
      setError('Username must be between 4 and 20 characters.');
      return false;
    }

    return true;
  }

  function validatePassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }

    if (!/\d/.test(password)) {
      setError('Password must contain at least 1 numeric symbol.');
      return false;
    }

    return true;
  }

  function register() {
    const username = usernameInp.current.value;
    const password = passwordInp.current.value;
    const confirmPassword = confirmPasswordInp.current.value;

    if (
      validateUsername(username) &&
      validatePassword(password, confirmPassword)
    ) {
      const user = { username, password };

      registerUser(user);

      setMyUser(user);
      console.log(user);
      navigate('/index');
    }
  }

  return (
    <div className='RegisterPage'>
      <div className='RegisterPageContainer'>
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
        <input
          type='password'
          ref={confirmPasswordInp}
          placeholder='confirm password'
          className='Input'
        />

        <button onClick={register} className='GenericBTN '>
          Register
        </button>

        {error && <div style={{ color: 'white' }}>{error}</div>}
      </div>
    </div>
  );
};

export default RegisterPage;
