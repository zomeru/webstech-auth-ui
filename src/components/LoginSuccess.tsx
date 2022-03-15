import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledLoginSuccess = styled.div`
  width: 500px;
  height: 80vh;
  background-color: #fff;
  position: absolute;
  top: 10vh;
  right: 10vh;
  border-radius: 50px;
  padding: 30px 50px;

  h2 {
    margin-bottom: 20px;
  }
`;

interface LoginSuccessProps {
  onSignOutClick?: () => void;
}

const LoginSuccess = ({ onSignOutClick }: LoginSuccessProps) => {
  return (
    <StyledLoginSuccess className='form'>
      <h2>Naka log in ka na boss!</h2>
      <Button text='Sign out' onClick={onSignOutClick} />
    </StyledLoginSuccess>
  );
};

export default LoginSuccess;
