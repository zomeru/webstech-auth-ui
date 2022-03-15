import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const StyledLogin = styled.div`
  width: 500px;
  height: 80vh;
  background-color: #fff;
  position: absolute;
  top: 10vh;
  right: 10vh;
  border-radius: 50px;
  padding: 30px 50px;

  .title {
    display: flex;
    justify-content: space-between;

    h2 {
      color: #0089ed;
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .already {
      text-align: right;
      margin: auto 0;

      p {
        font-size: 12px;
      }

      .login_button {
        color: #0089ed;
        cursor: pointer;
      }
    }
  }

  .input {
    margin-bottom: 15px;
  }

  .inputLast {
    margin-bottom: 45px;
  }

  .error {
    color: #d46151;
    font-size: 14px;
    text-align: center;
    margin-bottom: 5px;
  }

  .success {
    color: #0089ed;
    font-size: 14px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

interface LoginProps {
  formSwitch?: () => void;
  username?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  onSignInClick?: () => void;
  signInError?: string | null;
  signInSuccess?: string | null;
}

const Login = ({
  formSwitch,
  username,
  password,
  setUsername,
  setPassword,
  onSignInClick,
  signInError,
  signInSuccess,
}: LoginProps) => {
  return (
    <StyledLogin className='form'>
      <div className='title'>
        <h2>Sign in</h2>
        <div className='already'>
          <p>Don't have an account?</p>
          <p className='login_button' onClick={formSwitch}>
            Sign up here.
          </p>
        </div>
      </div>
      <div className='inputs'>
        <Input
          className='input'
          label='Enter your username'
          placeholder='username'
          value={username}
          setValue={setUsername}
        />
        <Input
          className='inputLast'
          label='Enter your password'
          placeholder='password'
          value={password}
          setValue={setPassword}
          password
        />
      </div>
      {signInError && <p className='error'>{signInError}</p>}
      {signInSuccess && <p className='success'>{signInSuccess}</p>}
      <Button text='Sign in' onClick={onSignInClick} />
    </StyledLogin>
  );
};

export default Login;
