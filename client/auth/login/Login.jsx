import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleclick = async () => {
    try {
      const params = new URLSearchParams({
        password
      });
      // had to change this to properly send query params
      const response = await fetch(`/api/auth?${params}`);
      // if response come back ok, redirect to dashboard
      if (response.ok) {
        console.log('fetch response came back as OK');
        navigate('/main/dashboard');
      }
      // otherwise, redirect to sign in
      else {
        navigate('/');
      }
    }
    catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='h-full flex items-center justify-center'>
      <input className='passwordInput px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none text-white placeholder-primary-300 bg-primary-700 focus:border-secondary-800' type='password' placeholder='password' value={password} onChange= {(e) => setPassword(e.target.value)}></input>
      <button className='bg-secondary-700 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded' onClick={handleclick}> Log In</button>
    </div>
  );
};

export default Login;
