import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  width: 100%;
  border: none;
  padding: 12px 17px;
  background-color: #0089ed;
  border-radius: 10px;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    background-color: #109aff;
  }

  p {
    color: #fff;
    font-size: 16px;
  }
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <p>{text}</p>
    </StyledButton>
  );
};

export default Button;
