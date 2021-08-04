import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #fff;
  padding: 8px 18px;

  input {
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

export function Input({ icon, placeholder }) {
  return (
    <InputWrapper>
      {icon}
      <input placeholder={placeholder} />
    </InputWrapper>
  );
}
