import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #fff;
  padding: 8px 18px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    color: #333;

    &::placeholder {
      color: #c4c4c4;
    }
  }

  .searchIcon {
    color: #c4c4c4;
  }
`;

export function Input({ icon, placeholder, type, value, onChange }) {
  return (
    <InputWrapper>
      {icon}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </InputWrapper>
  );
}
