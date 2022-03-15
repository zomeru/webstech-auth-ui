import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 15px;
    margin-bottom: 3px;
  }

  input {
    outline: none;
    border-radius: 10px;
    border: 1px solid
      ${({ error }: { error: boolean | undefined }) =>
        error ? '#d46151' : '#a3a3a3'};
    font-size: 15px;
    padding: 12px 17px;

    :focus {
      border: 1px solid #0089ed;
    }
  }
`;

interface InputProps {
  label: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  error?: boolean;
  className?: string;
  password?: boolean;
}

const Input = ({
  error,
  label,
  placeholder,
  className,
  value,
  setValue,
  password,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <StyledInput className={className} error={error}>
      <label htmlFor=''>{label}</label>
      <input
        type={password ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </StyledInput>
  );
};

export default Input;
