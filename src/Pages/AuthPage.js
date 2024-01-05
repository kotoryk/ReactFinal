import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className='AuthPage'>
      <button onClick={handleLogin} className='GenericBTN'>
        LogIn
      </button>
      <button onClick={handleRegister} className='GenericBTN'>
        Register
      </button>
    </div>
  );
}

export default AuthPage;
