/**
 * ************************************
 *
 * @module  Login
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - SignedLogin page used for logging in with u
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../state/actions/actions';
import InputBar, { TextInput, ButtonInputAuth } from '../../main/utility/InputBar/InputBar';

const signUpRequest = async (username, password, serverPassword, navigate, dispatch, setCreateAccountFailed) => {
  const result = await fetch('/api/profile/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, serverPassword } ),
  });
  
  if (result.ok){
    const body = await result.json();
    dispatch(setUserData(body));

    return navigate('/main');
  }
  else {
    setCreateAccountFailed(true);
  }
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverPassword, setServerPassword] = useState('');
  const [createAccountFailed, setCreateAccountFailed] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className='gh-12 shrink-0 flex flex-col justify-start items-center font-montserrat text-gray-50'>
      <img src='LogYardHori.png' className='mb-1 mt-12'></img>

      <div className='bg-logo-200/80 shadow-lg shadow-brown-900 p-5 pt-3 mt-28 rounded-lg text-center'>
        
        <h1 className='text-2xl pb-2'>SIGN UP:</h1>
        <TextInput onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='my-1 w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput type='password' onChange={(e) => setServerPassword(e.target.value)}  placeholder='Server Password' className='my-1 w-96 px-4 py-2 mt-1 mb-4 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic placeholder-gray-200 bg-transparent'/>
        {createAccountFailed && <h1 className='text-gray-50 italic mb-4'>Username is taken or invalid server password</h1>}
        
        <ButtonInputAuth 
          onClick={() => signUpRequest(username, password, serverPassword, navigate, dispatch, setCreateAccountFailed)} 
          label='Create' 
          className='w-96 rounded-lg my-1'/>
        <InputBar className='my-1 flex'>
          <ButtonInputAuth onClick={()=> navigate('/')} label='Sign-In as Guest' className='grow'/>
          <ButtonInputAuth onClick={()=> navigate('/signedlogin')} label='User Sign In' className='grow'/>
        </InputBar>
      
      </div>
    </div>
  );
};

export default Signup;