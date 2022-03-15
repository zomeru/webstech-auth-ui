import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const StyledSignUp = styled.div`
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

interface SignUpProps {
  formSwitch?: () => void;
  username?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword?: string;
  setConfirmPassword?: React.Dispatch<React.SetStateAction<string>>;
  onSignUpClick?: () => void;
  signUpError?: string | null;
  signUpSuccess?: string | null;
}

const SignUp = ({
  formSwitch,
  username,
  email,
  password,
  confirmPassword,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSignUpClick,
  signUpError,
  signUpSuccess,
}: SignUpProps) => {
  return (
    <StyledSignUp className='form'>
      <div className='title'>
        <h2>Sign up</h2>
        <div className='already'>
          <p>Already have an account?</p>
          <p className='login_button' onClick={formSwitch}>
            Sign in here.
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
          className='input'
          label='Enter your email'
          placeholder='email'
          value={email}
          setValue={setEmail}
        />
        <Input
          className='input'
          label='Enter your password'
          placeholder='password'
          value={password}
          setValue={setPassword}
          password
        />
        <Input
          className='inputLast'
          label='Confirm your password'
          placeholder='confirm password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          password
        />
      </div>
      {signUpError && <p className='error'>{signUpError}</p>}
      {signUpSuccess && <p className='success'>{signUpSuccess}</p>}
      <Button text='Sign up' onClick={onSignUpClick} />
    </StyledSignUp>
  );
};

export default SignUp;
